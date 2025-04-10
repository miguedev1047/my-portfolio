import { FocalLight } from '@/components/focal-light'
import { BlurFade } from '@/components/ui/blur-fade'

export function AboutSection() {
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
              Un poco sobre mi
            </h2>

            <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center max-w-2xl mx-auto'>
              Soy Miguel Angel de Colombia. Me especializo en{' '}
              <span className='font-bold'>React/Next.js</span> para crear
              aplicaciones y sitios web eficientes, escalables y modernos. No
              solo escribo código, diseño experiencias que optimizan el
              rendimiento y la interacción.
            </p>
          </article>
        </div>
      </section>
    </BlurFade>
  )
}
