import { ProfileImg } from '@/assets/images/_index'
import { AuroraText } from '@/components/ui/aurora-text'
import { BlurFade } from '@/components/ui/blur-fade'
import Image from 'next/image'

export function HeroSection() {
  return (
    <BlurFade
      delay={0.25}
      inView
    >
      <section
        id='#home'
        className='max-w-5xl min-h-[calc(100dvh_-_80px)] mx-auto rounded-md flex items-center justify-center antialiased relative pb-40'
      >
        <div className='p-4 mx-auto relative z-10 w-full pt-20 md:pt-0 space-y-8'>
          <figure className='bg-accent border p-2 relative size-24 mx-auto rounded-full overflow-hidden'>
            <Image
              width={128}
              height={128}
              src={ProfileImg.src}
              alt='Miguelito Profile Image'
              className='size-full object-contain rounded-full'
            />
          </figure>

          <h1 className='text-4xl md:text-7xl text-balance font-bold text-center'>
            Hola, soy <AuroraText>Miguel Angel</AuroraText>
          </h1>
          <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center max-w-xl mx-auto'>
            No soy un robot, soy un desarrollador{' '}
            <span className='font-bold'>Front-End</span>. Me apasiona el diseño
            web y la programación.
          </p>
        </div>
      </section>
    </BlurFade>
  )
}
