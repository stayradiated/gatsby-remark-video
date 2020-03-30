interface Options {
  parentTag?: string,
  parentClass?: string,
  videoAttributes: Record<string, number | string | boolean>,
}

const renderVideoTag = (options: Options) => {
  const { parentTag = 'div', parentClass = 'video', videoAttributes } = options
  const attributeList = []

  for (const [key, value] of Object.entries(videoAttributes)) {
    if (value == null) {
      continue
    }

    switch (typeof value) {
      case 'boolean': {
        if (value === true) {
          attributeList.push(key)
        } else {
          // leave out false
        }
        break
      }
      default: {
        attributeList.push(`${key}="${value.toString()}"`)
      }
    }
  }

  const attributeListString = attributeList.join(' ')

  const videoNode = `<${parentTag} class="${parentClass}"><video ${attributeListString}></video></${parentTag}>`

  return videoNode
}

export default renderVideoTag
