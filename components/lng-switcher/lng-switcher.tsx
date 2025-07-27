import { useLocale, useTranslations } from 'next-intl'
import { LngSelector } from '@/components/lng-switcher/lng-selector'

export function LngSwitcher() {
  const t = useTranslations('Header.lngSwitcher')
  const locale = useLocale()

  return (
    <LngSelector
      defaultValue={locale}
      items={[
        {
          value: 'en',
          label: t('en'),
        },
        {
          value: 'es',
          label: t('es'),
        },
      ]}
      label={t('label')}
    />
  )
}
