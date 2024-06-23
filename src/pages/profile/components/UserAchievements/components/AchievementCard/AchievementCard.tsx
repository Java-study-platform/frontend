import { AchievementDto } from '@/generated/user-api'
import { CheckCircleIcon } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, Progress, Typography } from '@/components/ui'

interface AchievementCardProps {
  achievement: AchievementDto
}

export const AchievementCard = ({ achievement }: AchievementCardProps) => (
  <Card className="flex w-80 flex-col mdx:w-[100%]">
    <CardHeader className="">
      <div className="flex items-center justify-between">
        <Typography tag="h4" variant="h4">
          {achievement.name}
        </Typography>
        {achievement.isObtained && <CheckCircleIcon className="fill-green-300" />}
      </div>
    </CardHeader>
    <CardContent className="flex-grow space-y-4">
      {achievement.description && <Typography>{achievement.description}</Typography>}
    </CardContent>
    {achievement.progress !== undefined && achievement.amountToObtain !== undefined && (
      <CardFooter className="flex-shrink">
        {achievement.progress} / {achievement.amountToObtain}
        <Progress value={(achievement.progress / achievement.amountToObtain) * 100} />{' '}
      </CardFooter>
    )}
  </Card>
)
