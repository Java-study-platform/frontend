import { AchievementDto } from '@/generated/user-api'
import { instance } from '@/utils/api/instance'

export interface GetUserAchievementsUsernameRequestParams {
  username: string
}

export const getUserAchievementsUsername = ({
  params,
  config
}: RequestOptions<GetUserAchievementsUsernameRequestParams>) =>
  instance.get<AchievementDto[]>(`/user/achievements/${params.username}`, config)
