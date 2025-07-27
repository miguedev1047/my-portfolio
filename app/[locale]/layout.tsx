import '../globals.css'

import type { Metadata } from 'next'

import { Onest } from 'next/font/google'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { NextIntlClientProvider } from 'next-intl'
import { Toaster } from '@/components/ui/sonner'
import { hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { getTranslations } from 'next-intl/server'
import { LngSwitcher } from '@/components/lng-switcher'

type Props = {
  params: Promise<{ locale: string }>
}

const onest = Onest({ subsets: ['latin'] })

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata' })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html
      lang={locale}
      suppressHydrationWarning
    >
      <body
        className={`${onest.className} antialiased overflow-x-clip`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            disableTransitionOnChange
            enableSystem
          >
            <Toaster />
            <LngSwitcher />

            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
