const AT_RULES = [
  "hover",
  "focus",
  "focus-within",
  "focus-visible",
  "active",
  "visited",
  "target",
  "first",
  "last",
  "only",
  "odd",
  "even",
  "first-of-type",
  "last-of-type",
  "only-of-type",
  "empty",
  "disabled",
  "checked",
  "indeterminate",
  "default",
  "required",
  "valid",
  "invalid",
  "in-range",
  "out-of-range",
  "placeholder-shown",
  "autofill",
  "read-only",
  "open",
  "before",
  "after",
  "first-letter",
  "first-line",
  "marker",
  "selection",
  "file",
  "placeholder",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "dark",
  "portrait",
  "landscape",
  "motion-safe",
  "motion-reduce",
  "print",
  "rtl",
  "ltr",
];

module.exports = (opts = { opts: { rules: [] } }) => {
  const options = {
    atRules: [...new Set(opts.rules ? opts.rules : AT_RULES)],
  };
  return {
    postcssPlugin: "postcss-tailwind-extra-directives",
    AtRule(rule) {
      if (rule.name.includes("@")) {
        rule.name.split("@").map((name) => {
          if (options.atRules.includes(name)) {
            rule.params = rule.params
              .split(" ")
              .map((value) => `${name}:${value}`)
              .join(" ");
            rule.name = `apply`;
          }
        });
      } else if (options.atRules.includes(rule.name)) {
        rule.params = rule.params
          .split(" ")
          .map((value) => `${rule.name}:${value}`)
          .join(" ");
        rule.name = `apply`;
      }
      return rule;
    },
  };
};

module.exports.postcss = true;
