import CodeEditor from '@uiw/react-textarea-code-editor'
import { I18nText } from '@/components/common'
import { Button, Typography } from '@/components/ui'
import { useUploadSolutionSection } from './hooks/useUploadSolutionSection'

export const UploadSolutionSection = () => {
  const { state, functions } = useUploadSolutionSection()

  return (
    <section className="mt-10">
      <Typography tag="h2" variant="h2">
        <I18nText path="task.uploadSolutionSection.title" />
      </Typography>
      <CodeEditor
        className="mt-5"
        value={state.code}
        language="java"
        placeholder="Please enter java code."
        onChange={(evn) => functions.setCode(evn.target.value)}
        padding={15}
        style={{
          backgroundColor: '#f5f5f5',
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace'
        }}
      />
      <Button onClick={functions.onUploadSolutionClick} className="mt-5">
        <I18nText path="button.send" />
      </Button>
    </section>
  )
}