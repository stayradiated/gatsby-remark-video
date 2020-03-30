import toml from '@iarna/toml'

const REGEXP_VIDEO = /^\s*video\(({[^]*})\)\s*$/

const matchVideoTag = (tag: string): Record<string, any> => {
  const matches = tag.match(REGEXP_VIDEO)

  if (matches) {
    const configString = matches[1].replace(/\n/g, '')

    try {
      const { config } = toml.parse(`config = ${configString}`) as {
        config: Record<string, any>,
      }

      if (typeof config.src !== 'string') {
        throw new Error(
          'gatsby-remark-video: video tag must include "src" attribute',
        )
      }

      return config
    } catch (error) {
      console.error(error.message)
      return null
    }
  }

  return null
}

export default matchVideoTag
