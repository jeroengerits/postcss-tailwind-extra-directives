# postcss-tailwind-extra-directives

[PostCSS] plugin that adds extra directives to CSS (such as `hover`, `dark`, etc...).

> This is an experimental plugin that requires more research.

[postcss]: https://github.com/postcss/postcss

## Basic Usage

```css
.myClass {
  @dark bg-gray-900 text-gray-100;
}
```

Outputs:

```css
.myClass {
  @apply dark:bg-gray-900 dark:text-gray-100;
}
```

## Getting Started

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss-tailwind-extra-directives
```

or with `Yarn`

```sh
yarn add -D postcss-tailwind-extra-directives
```

**Step 2:** Add the plugin to plugins list inside `postcss.config.js`:

```diff
module.exports = {
  plugins: [
+   require('postcss-tailwind-extra-directives'),
    require('autoprefixer')
  ]
}
```

## Features

### Multiple Directives

Combine directives by using the `:` operator.

```css
.myClass {
  @dark:hover:active bg-gray-800 text-gray-200;
}
```

Outputs:

```css
.myClass {
  @apply dark:hover:active:bg-gray-800 dark:hover:active:text-gray-200;
}
```

### List of all available directives

`@hover`
`@focus`
`@focus-within`
`@focus-visible`
`@active`
`@visited`
`@target`
`@first`
`@last`
`@only`
`@odd`
`@even`
`@first-of-type`
`@last-of-type`
`@only-of-type`
`@empty`
`@disabled`
`@checked`
`@indeterminate`
`@in-range`
`@out-of-range`
`@default`
`@required`
`@valid`
`@invalid`
`@placeholder-shown`
`@autofill`
`@read-only`
`@open`
`@before`
`@after`
`@first-letter`
`@first-line`
`@marker`
`@selection`
`@file`
`@dark`
`@portrait`
`@landscape`
`@motion-safe`
`@motion-reduce`
`@placeholder`
`@sm`
`@md`
`@lg`
`@xl`
`@2xl`
`@print`
`@rtl`
`@ltr`
