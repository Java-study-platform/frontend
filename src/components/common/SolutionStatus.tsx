import { ReloadIcon } from '@radix-ui/react-icons'
import {
  AccessibilityIcon,
  CheckCircleIcon,
  InfinityIcon,
  Repeat2Icon,
  ShieldXIcon,
  XCircleIcon
} from 'lucide-react'
import { Typography } from '../ui'
import { I18nText } from './I18nText'

interface SolutionStatusProps {
  status:
    | 'PENDING'
    | 'OK'
    | 'WRONG_ANSWER'
    | 'TIME_LIMIT'
    | 'RUNTIME_ERROR'
    | 'COMPILATION_ERROR'
    | 'MALICIOUS_CODE'
}

export const SolutionStatus = ({ status }: SolutionStatusProps) => (
  <div className="flex items-center gap-1">
    <Typography tag="p">
      <I18nText path={`solution.status.${status.toLowerCase()}` as LocaleMessageId} />
    </Typography>
    {status === 'OK' && <CheckCircleIcon className="h-4 w-4 text-green-500" />}
    {status === 'WRONG_ANSWER' && <XCircleIcon className="h-4 w-4 text-red-500" />}
    {status === 'TIME_LIMIT' && <InfinityIcon className="h-4 w-4 text-yellow-500" />}
    {status === 'RUNTIME_ERROR' && <AccessibilityIcon className="h-4 w-4 text-red-500" />}
    {status === 'COMPILATION_ERROR' && <Repeat2Icon className="h-4 w-4 text-red-500" />}
    {status === 'MALICIOUS_CODE' && <ShieldXIcon className="h-4 w-4 text-red-500" />}
    {status === 'PENDING' && <ReloadIcon className="h-4 w-4 animate-spin text-gray-500" />}
  </div>
)
