import test from 'ava'

import matchVideoTag from './match-video-tag'

test('should require src', (t) => {
  const input = 'video({  })'
  const output = matchVideoTag(input)
  t.is(output, null)
})

test('should match src', (t) => {
  const input = 'video({ src = "./my_video.mp4" })'
  const output = matchVideoTag(input)

  t.deepEqual(output, {
    src: './my_video.mp4',
  })
})

test('should support single quotes', (t) => {
  const input = `video({ src = './test.mp4' })`
  const output = matchVideoTag(input)

  t.deepEqual(output, {
    src: './test.mp4',
  })
})

test('should match spaces at start/end', (t) => {
  const input = `
    video({ src = "./test.mp4" })
  `
  const output = matchVideoTag(input)

  t.deepEqual(output, {
    src: './test.mp4',
  })
})

test('should match boolean options', (t) => {
  const input =
    'video({ src = "./my_video", autoplay = true, controls = false })'
  const output = matchVideoTag(input)

  t.deepEqual(output, {
    src: './my_video',
    autoplay: true,
    controls: false,
  })
})

test('should match number options', (t) => {
  const input = 'video({ src = "./my_video", width = 768, height = 432 })'
  const output = matchVideoTag(input)

  t.deepEqual(output, {
    src: './my_video',
    width: 768,
    height: 432,
  })
})

test('with title', (t) => {
  const input = 'video({ title = "Short demo", src = "./my_video.mp4" })'
  const output = matchVideoTag(input)

  t.deepEqual(output, {
    title: 'Short demo',
    src: './my_video.mp4',
  })
})

test('with title in single quotes', (t) => {
  const input = `video({ title = 'Short "demo"', src = "./my_video.mp4" })`
  const output = matchVideoTag(input)

  t.deepEqual(output, {
    title: 'Short "demo"',
    src: './my_video.mp4',
  })
})

test('with escaped quotes ', (t) => {
  const input = `video({ title = "Short \\"demo\\"", src = "./my_video.mp4" })`
  const output = matchVideoTag(input)

  t.deepEqual(output, {
    title: 'Short "demo"',
    src: './my_video.mp4',
  })
})
