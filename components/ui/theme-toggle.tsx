'use client'

import * as React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from 'lucide-react'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button
            className='rounded-full w-8 h-8 bg-background'
            variant='outline'
            size='icon'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <SunIcon className='w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-transform ease-in-out duration-500 dark:rotate-0 dark:scale-100' />
            <MoonIcon className='absolute w-[1.2rem] h-[1.2rem] rotate-0 transition-transform ease-in-out duration-500 dark:-rotate-90 dark:scale-0' />
            <span className='sr-only'>Cambiar tema</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side='bottom'>Cambiar tema</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
