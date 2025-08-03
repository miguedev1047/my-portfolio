'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { toast } from 'sonner'
import { CopyFieldProps } from '@/components/copy-field/copy-field.type'
import { useTranslations } from 'next-intl'

export function CopyField(props: CopyFieldProps) {
  const t = useTranslations('Footer')
  const { value, children } = props

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      toast.success(t('toast.copy.message'))
    } catch {
      toast.error(t('toast.copy.error'))
    }
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span
            onClick={handleCopy}
            aria-label={`Copiar ${value}`}
          >
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>{t('email.tooltip')}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
