import test from 'ava'

import renderVideoTag from './render-video-tag'

test('just with src', (t) => {
  const html = renderVideoTag({
    src: './my_video',
  })
  t.is(html, '<video src="./my_video"></video>')
})

test('with number, string and boolean options', (t) => {
  const html = renderVideoTag({
    src: './my_video',
    width: 800,
    height: 'auto',
    muted: true,
  })
  t.is(html, '<video src="./my_video" width="800" height="auto" muted></video>')
})

test('should ignore false options', (t) => {
  const html = renderVideoTag({
    src: './my_video',
    controls: false,
  })
  t.is(html, '<video src="./my_video"></video>')
})

test('should ignore undefined and null options', (t) => {
  const html = renderVideoTag({
    src: './my_video',
    width: null,
    height: undefined,
  })
  t.is(html, '<video src="./my_video"></video>')
})
