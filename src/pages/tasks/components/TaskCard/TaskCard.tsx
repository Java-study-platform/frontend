import { TaskDTO } from '@/generated/core-api'
import { FilePenIcon, TrashIcon } from 'lucide-react'
import { Button, Card, CardContent, CardHeader, CardTitle, Typography } from '@/components/ui'
import { DeleteCategoryDialog } from '../DeleteCategoryDialog/DeleteCategoryDialog'
import { EditTaskDialog } from '../EditTaskDialog/EditTaskDialog'

interface TaskCardProps {
  task: TaskDTO
}

export const TaskCard = ({ task }: TaskCardProps) => (
  <Card className="w-52">
    <CardHeader className="flex items-center justify-between">
      <CardTitle>
        <Typography tag="p" variant="body1" className="w-40 truncate">
          {task.name}
        </Typography>
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
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
        <DeleteCategoryDialog
          category={category}
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
