# [Docsify](https://docsify.js.org/#/)
> Generate Documentation website for your project

## Documentation

- [Quick Start](https://docsify.js.org/#/quickstart)
- [Plugins](https://docsify.js.org/#/plugins)
- [Offline Mode](https://docsify.js.org/#/pwa)
- [Awesome Docsify](https://docsify.js.org/#/awesome)

### Docsify Plugins

- [Docsify Themeable](https://jhildenbiddle.github.io/docsify-themeable/#/)
- [Docsify Font~Awesome](https://github.com/erickjx/docsify-fontawesome)
- [Docsify Update Tracker](https://github.com/pfeak/docsify-updated)

### Docsify Helpers

**Important Content:**
```markdown
!> **Time** is money, my friend!
```

**General Tips:**
```markdown
?> _TODO_ unit test
```

**Set Attribute For Link:**
```markdown
[link](/demo ':target=_blank')
[link](/demo2 ':target=_self')
```

**Disable Link:**
```markown
[link](/demo ':disabled')
```

**Image Resizing:**
```markdown
![logo](https://docsify.js.org/_media/icon.svg ':size=WIDTHxHEIGHT')
![logo](https://docsify.js.org/_media/icon.svg ':size=50x100')
![logo](https://docsify.js.org/_media/icon.svg ':size=100')

<!-- Support percentage -->

![logo](https://docsify.js.org/_media/icon.svg ':size=10%')
```

**Create Dropdown:**
```markdown
<details>
<summary>Self-assessment (Click to expand)</summary>

- Abc
- Abc

</details>
```

**Customize Class:**
```markdown
![logo](https://docsify.js.org/_media/icon.svg ':class=someCssClass')
```

**Customize ID:**
```markdown
![logo](https://docsify.js.org/_media/icon.svg ':id=someCssId')
```

**Customize ID for Heading:**
```markdown
### Hello, world! :id=hello-world
```

**Wrap Markdown in HTML Tag:**
```markdown
<div style='color: red'>

- listitem
- listitem
- listitem

</div>
```

## Setup
```bash
# install docsify globally
npm i docsify-cli -g
```

```bash
# initialize docs subdirectory
docsify init ./docs
```

---

## Deployment
> deploying docisfy 

### Development

**deployment command:**
```bash
docsify serve docs
```

### Production

- [Deploy](https://docsify.js.org/#/deploy)
- [gh-pages Package Deployment](https://github.com/tschaub/gh-pages)
