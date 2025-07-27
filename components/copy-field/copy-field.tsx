'use client'

import { toast } from 'sonner'
import { CopyFieldProps } from '@/components/copy-field/copy-field.type'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
import { useTranslations } from 'next-intl'

export function CopyField(props: CopyFieldProps) {
  const t = useTranslations('Footer.email')
  const { value, children } = props

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      toast.success('Copiado al portapapeles.')
    } catch {
      toast.error('No se pudo copiar el valor.')
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
          <p>{t('tooltip')}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
