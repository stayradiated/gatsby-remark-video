import test from 'ava'

import renderVideoTag from './render-video-tag'

test('just with src', (t) => {
  const html = renderVideoTag({
    videoAttributes: {
      src: './my_video',
    },
  })
  t.is(html, '<div class="video"><video src="./my_video"></video></div>')
})

test('with number, string and boolean options', (t) => {
  const html = renderVideoTag({
    videoAttributes: {
      src: './my_video',
      width: 800,
      height: 'auto',
      muted: true,
    },
  })
  t.is(
    html,
    '<div class="video"><video src="./my_video" width="800" height="auto" muted></video></div>',
  )
})

test('should ignore false options', (t) => {
  const html = renderVideoTag({
    videoAttributes: {
      src: './my_video',
      controls: false,
    },
  })
  t.is(html, '<div class="video"><video src="./my_video"></video></div>')
})

test('should ignore undefined and null options', (t) => {
  const html = renderVideoTag({
    videoAttributes: {
      src: './my_video',
      width: null,
      height: undefined,
    },
  })
  t.is(html, '<div class="video"><video src="./my_video"></video></div>')
})

test('custom parent tag and class name', (t) => {
  const html = renderVideoTag({
    parentTag: 'p',
    parentClass: 'custom-video-tag',
    videoAttributes: {
      src: './my_video',
    },
  })
  t.is(html, '<p class="custom-video-tag"><video src="./my_video"></video></p>')
})
