import visit from 'unist-util-visit'
import { Node } from 'unist'

import matchVideoTag from './match-video-tag'
import renderVideoTag from './render-video-tag'

export interface PluginOptions {
  width?: string,
  height?: string,
  preload?: string,
  muted?: string,
  title?: string,

  autoplay?: boolean,
  playsinline?: boolean,
  controls?: boolean,
  loop?: boolean,
}

interface Transformer {
  markdownAST: Node,
}

const transformVideoTags = (
  transformer: Transformer,
  options: PluginOptions,
) => {
  const { markdownAST } = transformer
  visit(markdownAST, 'inlineCode', (node) => {
    const value = node.value as string

    const options = matchVideoTag(value)
    if (options != null) {
      node.type = 'html'
      node.value = renderVideoTag(options)
    }
  })
}

export default transformVideoTags
