'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Locale } from '@/i18n/config'
import { setUserLocale } from '@/lib/locale'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

type Props = {
  defaultValue: string
  items: Array<{ value: string; label: string }>
  label: string
}

export function LngSelector(props: Props) {
  const { defaultValue, items, label } = props

  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  function onChange(value: string) {
    const locale = value as Locale
    startTransition(() => {
      router.push(locale)
      setUserLocale(locale)

      router.refresh()
    })
  }

  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={onChange}
      disabled={isPending}
    >
      <SelectTrigger className='fixed left-6 bottom-6 z-50'>
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent
        side='top'
        align='start'
      >
        {items.map((item) => (
          <SelectItem
            key={item.value}
            value={item.value}
          >
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
