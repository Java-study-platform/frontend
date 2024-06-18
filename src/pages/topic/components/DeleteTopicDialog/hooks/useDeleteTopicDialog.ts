import { TopicDTO } from '@/generated/core-api'
import { useDeleteLearningTopicsByIdMutation } from '@/utils/api/hooks'
import { ROUTES } from '@/utils/constants'
import { useI18n } from '@/utils/contexts'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

interface UseDeleteTopicDialogParams {
  topic: TopicDTO
}

export const useDeleteTopicDialog = ({ topic }: UseDeleteTopicDialogParams) => {
  const i18n = useI18n()
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false)

  const deleteLearningTopicsByIdMutation = useDeleteLearningTopicsByIdMutation()

  const onConfirmDeleteClick = async () => {
    await deleteLearningTopicsByIdMutation.mutateAsync({ id: topic.id })
    navigate(ROUTES.ROOT)
    if (topic.name) toast.success(i18n.formatMessage({ id: 'toast.topicDeleted' }, { name: topic.name }))
  }

  return {
    state: { open, loading: deleteLearningTopicsByIdMutation.isPending },
    functions: { setOpen, onConfirmDeleteClick }
  }
}
