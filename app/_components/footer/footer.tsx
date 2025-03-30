import { CopyField } from '@/components/copy-field'
import { BlurFade } from '@/components/ui/blur-fade'
import { Button } from '@/components/ui/button'
import { SendIcon } from 'lucide-react'
import { Github } from '@/assets/icons/github-icon'
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { EMAIL, GITHUB } from '@/constants/general'
import Link from 'next/link'

export function Footer() {
  return (
    <BlurFade
      delay={0.25}
      inView
    >
      <footer className='max-w-5xl mx-auto rounded-md antialiased relative border bg-card mb-8 p-6 flex justify-between items-center shadow'>
        <CopyField value={EMAIL}>
          <AnimatedShinyText className='flex items-center gap-2 justify-center px-4 py-1 cursor-pointer'>
            <SendIcon className='transition-transform duration-300 ease-in-out group-hover:translate-x-0.5' />
            <p>{EMAIL}</p>
          </AnimatedShinyText>
        </CopyField>

        <Button
          variant='ghost'
          size='icon'
          asChild
        >
          <Link
            href={GITHUB}
            target='_blank'
          >
            <Github />
          </Link>
        </Button>
      </footer>
    </BlurFade>
  )
}
