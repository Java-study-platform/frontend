import { TaskDTO } from '@/generated/core-api'
import { ROUTES } from '@/utils/constants'
import { useUserContext } from '@/utils/contexts'
import { FilePenIcon, TrashIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { I18nText } from '@/components/common'
import { Button, Card, CardContent, CardHeader, Typography } from '@/components/ui'
import { DeleteTaskDialog } from '../DeleteCategoryDialog/DeleteTaskDialog'
import { EditTaskDialog } from '../EditTaskDialog/EditTaskDialog'

interface TaskCardProps {
  task: TaskDTO
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const userContext = useUserContext()

  return (
    <Card className="w-80 mdx:w-[100%]">
      <CardHeader className="flex items-center justify-between">
        <Link to={ROUTES.TASK(task.id)} className="w-40 truncate text-center hover:underline">
          {task.name}
        </Link>
        <Link to={ROUTES.TOPIC(task.topicId!)} className="ml-2 hover:underline">
          <Typography tag="span" variant="sub1">
            (<I18nText path="dialog.editTask.link" />)
          </Typography>
        </Link>
      </CardHeader>
      <CardContent className="space-y-4">
        {task.description && <Typography className='"w-40 truncate'>{task.description}</Typography>}
        {userContext.user?.isAdmin && (
          <div className="flex justify-center gap-2">
            <EditTaskDialog
              task={task}
              trigger={
                <Button variant="secondary" size="icon" aria-label="Edit">
                  <FilePenIcon className="h-4 w-4" />
                </Button>
              }
            />
            <DeleteTaskDialog
              task={task}
              trigger={
                <Button variant="destructive" size="icon" aria-label="Delete">
                  <TrashIcon className="h-4 w-4" />
                </Button>
              }
            />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
