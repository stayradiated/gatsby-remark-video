import visit from 'unist-util-visit'
import { Node } from 'unist'

import matchVideoTag from './match-video-tag'
import renderVideoTag from './render-video-tag'

export interface PluginOptions {
  parentTag?: string,
  parentClass?: string,
  defaultAttributes: {
    width?: string,
    height?: string,
    preload?: string,
    muted?: string,
    title?: string,

    autoplay?: boolean,
    playsinline?: boolean,
    controls?: boolean,
    loop?: boolean,
  },
}

interface Transformer {
  markdownAST: Node,
}

const transformVideoTags = (
  transformer: Transformer,
  options: PluginOptions,
) => {
  const { parentTag, parentClass, defaultAttributes } = options
  const { markdownAST } = transformer
  visit(markdownAST, 'inlineCode', (node) => {
    const value = node.value as string

    const videoAttributes = matchVideoTag(value)
    if (videoAttributes != null) {
      node.type = 'html'
      node.value = renderVideoTag({
        parentTag,
        parentClass,
        videoAttributes: {
          ...defaultAttributes,
          ...videoAttributes,
        },
      })
    }
  })
}

export default transformVideoTags
