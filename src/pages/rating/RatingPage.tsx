import { ReloadIcon } from '@radix-ui/react-icons'
import { CrownIcon } from 'lucide-react'
import { I18nText } from '@/components/common'
import { Typography } from '@/components/ui'
import { useRatingPage } from './hooks/useRatingPage'

export const RatingPage = () => {
  const { state } = useRatingPage()

  return (
    <div className="flex h-screen">
      <div className="container max-w-[750px] mdx:mx-auto mdx:max-w-[300px]">
        <Typography tag="h1" variant="h1">
          <I18nText path="rating.title" />
        </Typography>
        {state.loading && (
          <div className="mt-2 flex items-center gap-2">
            <I18nText path="common.loading" />
            <ReloadIcon className="h-4 w-4 animate-spin" />
          </div>
        )}
        <div className="pag-2 mt-10 flex w-[300px] flex-col">
          {state.users?.map((user, index) => (
            <div key={user.id} className="borer-1 relative mt-2 flex items-center gap-2 rounded-md">
              {index < 10 && (
                <div className="absolute -left-2 -top-2 -translate-x-1/2 -rotate-45">
                  <CrownIcon className="h-5 w-5 fill-yellow-300" />
                </div>
              )}
              <Typography tag="p" variant="large" className="max-w-[250px] truncate">
                {user.username}
              </Typography>
              <Typography tag="p" variant="large">
                - {user.experience}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
