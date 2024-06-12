import { TopicDTO } from '@/generated/core-api'
import { ROUTES } from '@/utils/constants'
import { Link, LinkIcon } from 'lucide-react'

interface CategoryTopicsDialogProps {
  topics: TopicDTO[]
}

export const CategoryTopicsDialog = ({ topics }: CategoryTopicsDialogProps) => (
  <div className="flex flex-col gap-2">
    {topics?.map((topic) => (
      <Link to={ROUTES.TOPIC(topic.id!)} className="flex items-center gap-2 text-sm">
        <LinkIcon className="h-4 w-4" />
        {topic.name}
      </Link>
    ))}
  </div>
)
