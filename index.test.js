const postcss = require("postcss");

const plugin = require("./");

async function run(input, output, opts = {}) {
  let result = await postcss([plugin(opts)]).process(input, {
    from: undefined,
  });
  expect(result.css).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
}

it("supports single directives", async () => {
  await run(
    "@dark bg-red-200 text-blue-400;",
    "@apply dark:bg-red-200 dark:text-blue-400;",
    {
      rules: ["dark"],
    }
  );
});

it("supports multiple directives", async () => {
  await run(
    "@dark:hover bg-red-200 text-blue-400;",
    "@apply hover:dark:bg-red-200 hover:dark:text-blue-400;",
    {
      rules: ["dark", "hover"],
    }
  );
});

it("supports triple directives", async () => {
  await run(
    "@dark:hover:active bg-red-200 text-blue-400;",
    "@apply active:hover:dark:bg-red-200 active:hover:dark:text-blue-400;",
    {
      rules: ["dark", "hover", "active"],
    }
  );
});

it("don't parse invalid rules", async () => {
  await run("@invalid text-blue-400;", "@invalid text-blue-400;", {
    rules: [],
  });
});

it("supports a sheet", async () => {
  await run(
    "@dark:hover:active bg-red-200 text-blue-400; @dark bg-red-200;",
    "@apply active:hover:dark:bg-red-200 active:hover:dark:text-blue-400; @apply dark:bg-red-200;",
    {
      rules: ["dark", "hover", "active"],
    }
  );
});

it("supports default rules", async () => {
  await run(
    "@dark bg-red-200 text-blue-400;",
    "@apply dark:bg-red-200 dark:text-blue-400;"
  );
});
