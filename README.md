## @stayradiated/gatsby-remark-video

> Embeds video tag in your gatsby project

This is a fork of
[`nullhook/gatsby-remark-video`](https://github.com/nullhook/gatsby-remark-video).

**Key differences:**

- You can override the default options (width, height, etc) for each video you
  embed.
- You can set any attribute on the video tag
- The video tag is wrapped in a parent div to make it easier to style

**Other differences:**

- Options are parsed using TOML
- Type checking with typescript
- Unit tests

## Installation

```bash
npm install @stayradiated/gatsby-remark-video
```
 
Add the following in your `gatsby-config.js`

```javascript
{
  resolve: '@stayradiated/gatsby-remark-video',
  options: {
    parentTag: 'div',
    parentClass: 'gatsby-remark-video',
    defaultAttributes: {}
  }
}
```

## Usage

In your markdown add the `video({ ... })` tag.

Options are parsed as a [TOML Inline
Table](https://github.com/toml-lang/toml#user-content-inline-table).

```markdown
`video({ src = "./my_video.mp4" })`
```

You can also add a title to the video tag by adding it in your markdown

```markdown
`video({ title = "Short demo", src = "./my_video.mp4" })`
```

All `<video />` tag attributes are supported, and can even be placed on
multiple lines.

```markdown
`video({
  title = "Short demo",
  src = "./my_video.mp4",
  width = 500,
  height = "auto",
  autoplay = true
})`
```

Both single quotes and double quotes are supported.

```markdown
`video({ title = 'Short "demo"', src = './my_video.mp4' })`
```

You can even escape quotes with backslashes.

```markdown
`video({ title = "Short \"demo\"", src = './my_video.mp4' })`
```

## Plugin Options

### Default Attributes

You can set default attributes for all video tags in `gatsby-config.js`.

```javascript
{
  resolve: '@stayradiated/gatsby-remark-video',
  options: {
    defaultAttributes: {
      width: 800,
      height: 'auto',
      preload: 'auto',
      muted: true,
      autoplay: true,
      playsinline: true,
      controls: false,
      loop: true
    }
  }
}
```

### Parent Element

By default, all video tags are wrapped in a `<div class="gatsby-remark-video">`
tag. You can customise the tag type and class name.

```javascript
{
  resolve: '@stayradiated/gatsby-remark-video',
  options: {
    parentTag: 'p',
    parentClass: 'video'
  }
}
```
