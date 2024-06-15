import { cn } from '@udecode/cn'
import {
  createNodeHOC,
  createNodesHOC,
  type PlaceholderProps,
  usePlaceholderState
} from '@udecode/plate-common'
import { ELEMENT_H1 } from '@udecode/plate-heading'
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph'
import React from 'react'

export const Placeholder = (props: PlaceholderProps) => {
  const { children, nodeProps, placeholder } = props

  const { enabled } = usePlaceholderState(props)

  return React.Children.map(children, (child) =>
    React.cloneElement(child, {
      className: child.props.className,
      nodeProps: {
        ...nodeProps,
        className: cn(
          enabled &&
            'before:absolute before:cursor-text before:opacity-30 before:content-[attr(placeholder)]'
        ),
        placeholder
      }
    })
  )
}

export const withPlaceholder = createNodeHOC(Placeholder)

export const withPlaceholdersPrimitive = createNodesHOC(Placeholder)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withPlaceholders = (components: any) =>
  withPlaceholdersPrimitive(components, [
    {
      hideOnBlur: true,
      key: ELEMENT_PARAGRAPH,
      placeholder: 'Type a paragraph',
      query: {
        maxLevel: 1
      }
    },
    {
      hideOnBlur: false,
      key: ELEMENT_H1,
      placeholder: 'Untitled'
    }
  ])
