| ⚠️ Usage with Prettier in any way will cause formatting errors. ⚠️ |
| ----------- |


For those unhappy few whom are still dissatisfied after having configured every ESLint rule. Built as an alternative to relying on hacky solutions with Prettier by implementing rules and fixes that haven't yet been created by the ESLint team.

This is for my personal usage, but you're free to fork and remix it however you see fit. In other words, don't rely on this repo for your own projects, because I won't fix something if it breaks your code.

## Requirements

* Node \>10.17.0
* ESLint \>7.6.0

## Installation

1. Download the repository into your project manually, or via NPM:

```
npm i -D @chancey/eslint-plugin-wrap-params
```

2. Add the plugin to your configuration

```json
{
    "plugins": [
        "@chancey/wrap-params"
    ],
}
```

3. Include the rules in your `.eslintrc.*` file

```json
{
    "rules": {
        "@chancey/wrap-params/wrap-params": "error",
        "@chancey/wrap-params/destructured-objects": "error"
    }
}
```

## Rules

#### `wrap-params/wrap-params`

Wraps each function parameter onto a new line.

##### Original

```
(a, {b, c}, d) => { ... }
```

##### Formatted

```
(
    a,
    {b, c},
    d
) => { ... }
```

#### `wrap-params/destructured-objects`

Wraps each attribute of a destructured object onto a new line when used as a function parameter.

##### Original

```
({ a, b, c }, d) => { ... }
```

##### Formatted

```
({
    a,
    b,
    c
}, d) => { ... }
```

<sub>MIT License</sub>
