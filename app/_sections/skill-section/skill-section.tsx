import { BlurFade } from '@/components/ui/blur-fade'
import { Card } from '@/components/ui/card'
import { MY_TECHONOLOGIES } from '@/constants/general'

export function SkillSection() {
  return (
    <BlurFade
      delay={0.25}
      inView
    >
      <section
        id='skills'
        className='relative max-w-4xl mx-auto rounded-md flex md:items-center md:justify-center antialiased pb-40 z-20'
      >
        <div className='w-full space-y-12 md:space-y-20 z-40 px-4 flex flex-col justify-center items-center'>
          <article className='space-y-6'>
            <h2 className='text-4xl md:text-7xl text-balance font-bold text-center'>
              Habilidades
            </h2>

            <ul className='flex flex-wrap items-center gap-3'>
              {MY_TECHONOLOGIES.map((tech) => (
                <li key={tech}>
                  <Card className='px-5 py-2'>{tech}</Card>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </BlurFade>
  )
}
