/* eslint-disable @typescript-eslint/ban-ts-comment */
import { jsx } from 'slate-hyperscript'

// @ts-ignore
export const deserializeEditorValue = (element, markAttributes = {}) => {
  debugger

  if (element.nodeType === Node.TEXT_NODE) {
    return jsx('text', markAttributes, element.textContent)
  } else if (element.nodeType !== Node.ELEMENT_NODE) {
    return null
  }

  const nodeAttributes = { ...markAttributes }

  // define attributes for text nodes
  switch (element.nodeName) {
    case 'STRONG':
      // @ts-ignore
      nodeAttributes.bold = true
      break
    case 'EM':
      // @ts-ignore
      nodeAttributes.italic = true
      break
    case 'U':
      // @ts-ignore
      nodeAttributes.underline = true
      break
    case 'S':
      // @ts-ignore
      nodeAttributes.strikethrough = true
      break
    case 'CODE':
      // @ts-ignore
      nodeAttributes.code = true
      break
  }
  // @ts-ignore
  const children = Array.from(element.childNodes)
    .map((node) => deserializeEditorValue(node, nodeAttributes))
    .flat()

  if (children.length === 0) {
    children.push(jsx('text', nodeAttributes, ''))
  }

  switch (element.nodeName) {
    case 'BODY':
      return jsx('fragment', {}, children)
    case 'BR':
      return '\n'
    case 'BLOCKQUOTE':
      return jsx('element', { type: 'quote' }, children)
    case 'P':
      return jsx('element', { type: 'p' }, children)
    case 'H1':
      return jsx('element', { type: 'h1' }, children)
    case 'H2':
      return jsx('element', { type: 'h2' }, children)
    case 'H3':
      return jsx('element', { type: 'h3' }, children)
    case 'A':
      return jsx('element', { type: 'link', url: element.getAttribute('href') }, children)
    default:
      return children
  }
}
