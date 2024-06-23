import { AchievementDto } from '@/generated/user-api'
import { instance } from '@/utils/api/instance'

export const getUserAchievements = (options?: RequestOptions) =>
  instance.get<AchievementDto[]>('/user/achievements', options?.config)
