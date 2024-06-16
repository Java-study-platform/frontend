export const getDocumentBodyFromHTMLString = (text: string) =>
  new DOMParser().parseFromString(text, 'text/html').body
