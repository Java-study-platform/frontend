import {
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_UNDERLINE
} from '@udecode/plate-basic-marks'
import { useEditorReadOnly } from '@udecode/plate-common'
import { BoldIcon, CodeIcon, ItalicIcon, StrikethroughIcon, UnderlineIcon } from 'lucide-react'
import { MarkToolbarButton } from './mark-toolbar-button'
import { MoreDropdownMenu } from './more-dropdown-menu'
import { TurnIntoDropdownMenu } from './turn-into-dropdown-menu'

export function FloatingToolbarButtons() {
  const readOnly = useEditorReadOnly()

  return (
    <>
      {!readOnly && (
        <>
          <TurnIntoDropdownMenu />

          <MarkToolbarButton nodeType={MARK_BOLD} tooltip="Bold (⌘+B)">
            <BoldIcon />
          </MarkToolbarButton>
          <MarkToolbarButton nodeType={MARK_ITALIC} tooltip="Italic (⌘+I)">
            <ItalicIcon />
          </MarkToolbarButton>
          <MarkToolbarButton nodeType={MARK_UNDERLINE} tooltip="Underline (⌘+U)">
            <UnderlineIcon />
          </MarkToolbarButton>
          <MarkToolbarButton nodeType={MARK_STRIKETHROUGH} tooltip="Strikethrough (⌘+⇧+M)">
            <StrikethroughIcon />
          </MarkToolbarButton>
          <MarkToolbarButton nodeType={MARK_CODE} tooltip="Code (⌘+E)">
            <CodeIcon />
          </MarkToolbarButton>
        </>
      )}

      <MoreDropdownMenu />
    </>
  )
}
