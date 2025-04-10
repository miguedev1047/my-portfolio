'use client'

import { Github } from '@/assets/icons/github-icon'
import { type ProjectItemProps } from './project-item.props'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MagicCard } from '@/components/ui/magic-card'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

export function ProjectItem(props: ProjectItemProps) {
  const { theme } = useTheme()

  const {
    description,
    technologies,
    image,
    github = '#',
    href = '#',
    isCode,
    isSource,
    title,
  } = props

  return (
    <Card className='w-full h-auto rounded-(--radius) overflow-hidden'>
      <MagicCard gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}>
        <figure className='relative w-full h-[320px] rounded-b-(--radius) overflow-hidden select-none'>
          <Link
            href={isSource ? href : '#'}
            target={isSource ? '_blank' : '_self'}
          >
            <Image
              fill
              src={image}
              alt={title}
              className='size-full object-cover duration-300 ease-in-out transition-transform hover:scale-110 '
            />
          </Link>
        </figure>

        <CardContent className='flex flex-col gap-4 p-4'>
          <div className='w-full flex justify-between items-center'>
            <h3 className='text-2xl text-red-400 font-bold'>{title}</h3>

            {isCode && (
              <Button
                size='icon'
                variant='ghost'
                asChild
              >
                <Link
                  href={github}
                  target='_blank'
                >
                  <Github />
                </Link>
              </Button>
            )}
          </div>

          <p className='font-normal text-base text-neutral-900 dark:text-neutral-300'>
            {description}
          </p>

          <ul className='flex flex-wrap items-center gap-1'>
            {technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </ul>
        </CardContent>
      </MagicCard>
    </Card>
  )
}
