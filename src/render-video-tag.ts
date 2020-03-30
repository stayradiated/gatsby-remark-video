const renderVideoTag = (
  attributes: Record<string, number | string | boolean>,
) => {
  const attributeList = []

  for (const [key, value] of Object.entries(attributes)) {
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

  const videoNode = `<video ${attributeListString}></video>`

  return videoNode
}

export default renderVideoTag
