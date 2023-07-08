# [Husky](https://typicode.github.io/husky/#/)

> Modern native git hooks made easy

## Articles

1. https://www.youtube.com/watch?v=Bmffw9Xt5D0
2. https://ivantanev.com/safer-coding-with-husky-hooks/

## Yarn 2 Install

### Private Install

```json
// private:true (non-npm/yarn package repository)
// package.json
{
    "private": true, // ← your package is private, you only need postinstall
    "scripts": {
        "postinstall": "husky install"
    }
}
```

### Public Install

_Make sure to install package:_ **[pinst](https://github.com/typicode/pinst)**

```json
// private: false (npm/yarn package)
// package.json
{
    "private": false, // ← your package is public
    "scripts": {
        "postinstall": "husky install",
        "prepack": "pinst --disable",
        "postpack": "pinst --enable"
    }
}
```

### Yarn 2 Uninstall

```bash
# Remove "postinstall": "husky install" from package.json and run:
yarn remove husky && git config --unset core.hooksPath
```

### Usage (Yarn 2)

```bash
# husky-init is a one-time command to quickly initialize a project with husky.
yarn dlx husky-init --yarn2 && yarn
```
