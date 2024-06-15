import { TaskDTO } from '@/generated/core-api'
import { ROUTES } from '@/utils/constants'
import { FilePenIcon, TrashIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button, Card, CardContent, CardHeader, Typography } from '@/components/ui'
import { DeleteTaskDialog } from '../DeleteCategoryDialog/DeleteTaskDialog'
import { EditTaskDialog } from '../EditTaskDialog/EditTaskDialog'

interface TaskCardProps {
  task: TaskDTO
}

export const TaskCard = ({ task }: TaskCardProps) => (
  <Card className="w-80 mdx:w-[100%]">
    <CardHeader className="flex items-center justify-between">
      <Link to={ROUTES.TASK(task.id!)} className="w-40 truncate hover:underline">
        {task.name}
      </Link>
    </CardHeader>
    <CardContent className="space-y-4">
      {task.description && <Typography className='"w-40 truncate'>{task.description}</Typography>}
      {/* // TODO only for admin */}
      <div className="flex gap-2">
        <EditTaskDialog
          task={task}
          trigger={
            <Button variant="secondary" size="icon" aria-label="Edit" className="w-full">
              <FilePenIcon className="h-4 w-4" />
            </Button>
          }
        />
        <DeleteTaskDialog
          task={task}
          trigger={
            <Button variant="destructive" size="icon" aria-label="Delete" className="w-full">
              <TrashIcon className="h-4 w-4" />
            </Button>
          }
        />
      </div>
    </CardContent>
  </Card>
)
