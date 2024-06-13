export const getPaginationNumbers = ({
  current,
  pageCount
}: {
  pageCount: number
  current: number
}): (number | '...')[] => {
  const maxButtons = 2
  const numbers: (number | '...')[] = []

  if (pageCount <= maxButtons) {
    for (let i = 1; i <= pageCount; i++) {
      numbers.push(i)
    }
  } else {
    const leftOffset = Math.floor(maxButtons / 2)
    let start = current - leftOffset
    let end = current + leftOffset

    if (start < 1) {
      start = 1
      end = maxButtons
    } else if (end > pageCount) {
      end = pageCount
      start = pageCount - maxButtons + 1
    }

    if (start > 1) {
      numbers.push(1)
      if (start > 2) numbers.push('...')
    }

    for (let i = start; i <= end; i++) {
      numbers.push(i)
    }

    if (end < pageCount) {
      if (end < pageCount - 1) numbers.push('...')
      numbers.push(pageCount)
    }
  }

  return numbers
}
