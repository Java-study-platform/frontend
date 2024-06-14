import { TopicDTO } from '@/generated/core-api'
import { ROUTES } from '@/utils/constants'
import { Link } from 'react-router-dom'
import { I18nText } from '@/components/common'
import { AccordionContent, AccordionItem, AccordionTrigger, Typography } from '@/components/ui'

interface TopicCardProps {
  topic: TopicDTO
}
export const TopicCard = ({ topic }: TopicCardProps) => (
  <AccordionItem value={topic.id!} disabled={!topic.tasks}>
    <AccordionTrigger className="flex items-center">
      <Typography variant="large" className="w-[200px] truncate text-start">
        {topic.name}
      </Typography>
      <Link to={ROUTES.TOPIC(topic.id!)} className="self-justify-end">
        <Typography className="hover:underline">
          (<I18nText path="topics.goToTopic" />)
        </Typography>
      </Link>
    </AccordionTrigger>
    <AccordionContent>
      {topic.tasks?.map((task) => (
        <Link to={ROUTES.TASK(task.id!)} className="hover:underline">
          <Typography variant="h4" className="font-normal">
            {task.name}
          </Typography>
        </Link>
      ))}
    </AccordionContent>
  </AccordionItem>
)
