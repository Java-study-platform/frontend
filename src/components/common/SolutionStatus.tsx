import {
  AccessibilityIcon,
  CheckCircleIcon,
  EllipsisIcon,
  InfinityIcon,
  Repeat2Icon,
  ShieldXIcon,
  XCircleIcon
} from 'lucide-react'

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
  <div>
    {status === 'OK' && <CheckCircleIcon className="h-4 w-4 text-green-500" />}
    {status === 'WRONG_ANSWER' && <XCircleIcon className="h-4 w-4 text-red-500" />}
    {status === 'TIME_LIMIT' && <InfinityIcon className="h-4 w-4 text-yellow-500" />}
    {status === 'RUNTIME_ERROR' && <AccessibilityIcon className="h-4 w-4 text-red-500" />}
    {status === 'COMPILATION_ERROR' && <Repeat2Icon className="h-4 w-4 text-red-500" />}
    {status === 'MALICIOUS_CODE' && <ShieldXIcon className="h-4 w-4 text-red-500" />}
    {status === 'PENDING' && <EllipsisIcon className="h-4 w-4 text-gray-500" />}
  </div>
)
