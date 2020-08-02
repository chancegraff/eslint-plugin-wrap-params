| ⚠️ Usage with Prettier in any way will cause formatting errors. ⚠️ |
| ----------- |


For those unhappy few whom are still dissatisfied after having configured every ESLint rule. Built as an alternative to relying on hacky solutions with Prettier, as well as implementing rules and fixes that ESLint hasn't or won't. I will continue adding rules as I create them. This is for my own personal use, but you're free to use it and remix it as you see fit.

## Requirements

* Node \>10.17.0
* ESLint \>7.6.0

## Installation

1. Download the repository into your project manually, or via NPM:

```
npm i -D chancegraff/eslint-plugin-wrap-params
```

2. Add the plugin to your configuration

```json
{
    "plugins": [
        "wrap-params"
    ],
}
```

3. Include the rules in your `.eslintrc.*` file

```json
{
    "rules": {
        "wrap-params/wrap-params": "error",
        "wrap-params/destructured-objects": "error"
    }
}
```

### 2020/08/02

#### `wrap-params/wrap-params`

- Wraps each function parameter onto a new line.

- Original

```
(a, {b, c}, d) => { ... }
```

- Formatted

```
(
    a,
    {b, c},
    d
) => { ... }
```

#### `wrap-params/destructured-objects`

- Wraps each attribute of a destructured object onto a new line when used as a function parameter.

- Original

```
({ a, b, c }, a) => { ... }
```

- Formatted

```
({
    a,
    b,
    c
}, a) => { ... }
```



MIT License
