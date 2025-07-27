import { FocalLight } from '@/components/focal-light'
import { BlurFade } from '@/components/ui/blur-fade'
import { useTranslations } from 'next-intl'

export function AboutSection() {
  const t = useTranslations('Home.sections')
  return (
    <BlurFade
      delay={0.25}
      inView
    >
      <section
        id='about'
        className='relative max-w-4xl mx-auto rounded-md flex md:items-center md:justify-center antialiased pb-40 z-20'
      >
        <FocalLight />

        <div className='w-full space-y-12 md:space-y-20 z-40 px-4'>
          <article className='space-y-6'>
            <h2 className='text-4xl md:text-7xl text-balance font-bold text-center'>
              {t('aboutMe.title')}
            </h2>

            <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center max-w-2xl mx-auto'>
              {t.rich('aboutMe.description', {
                bold: (chunks) => <span className='font-bold'>{chunks}</span>,
              })}
            </p>
          </article>
        </div>
      </section>
    </BlurFade>
  )
}
