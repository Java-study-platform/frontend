/* eslint-disable @typescript-eslint/ban-ts-comment */
import escapeHtml from 'escape-html'
import { Text } from 'slate'

//@ts-ignore
export const serializeEditorValue = (node): string => {
  if (Text.isText(node)) {
    let string = escapeHtml(node.text)
    //@ts-ignore
    if (node.bold) {
      string = `<strong>${string}</strong>`
    }
    //@ts-ignore
    if (node.italic) {
      string = `<em>${string}</em>`
    }
    //@ts-ignore
    if (node.underline) {
      string = `<u>${string}</u>`
    }
    //@ts-ignore
    if (node.strikethrough) {
      string = `<s>${string}</s>`
    }
    //@ts-ignore
    if (node.code) {
      string = `<code>${string}</code>`
    }

    return string
  }
  //@ts-ignore
  const children = node.children?.map((n) => serializeEditorValue(n)).join('')

  switch (node.type) {
    case 'quote':
      return `<blockquote><p>${children}</p></blockquote>`
    case 'p':
      return `<p>${children}</p>`
    case 'h1':
      return `<h1>${children}</h1>`
    case 'h2':
      return `<h2>${children}</h2>`
    case 'h3':
      return `<h3>${children}</h3>`
    case 'link':
      if ('url' in node && typeof node.url === 'string')
        return `<a href="${escapeHtml(node.url)}">${children}</a>`
      return children
    default:
      return children
  }
}
