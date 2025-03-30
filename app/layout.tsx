import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import { ThemeProvider } from '@/components/ui/theme-provider'

import './globals.css'
import { Toaster } from '@/components/ui/sonner'

const onest = Onest({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Miguel Angel | Portfolio',
  description:
    'No soy un robot (aunque a veces lo parezca). Soy un desarrollador Front-End que ama el código y el buen diseño web.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='es'
      suppressHydrationWarning
    >
      <body className={`${onest.className} antialiased overflow-x-clip`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          disableTransitionOnChange
          enableSystem
        >
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
