import { BlurFade } from '@/components/ui/blur-fade'
import { ProjectList } from '@/app/_sections/projects-section/_components/project-list'

export function ProjectsSection() {
  return (
    <BlurFade
      delay={0.25}
      inView
    >
      <section
        id='projects'
        className='relative max-w-4xl mx-auto rounded-md flex md:items-center md:justify-center antialiased pb-40 z-20'
      >
        <div className='w-full space-y-12 md:space-y-20 z-40 px-4'>
          <article className='space-y-6'>
            <h2 className='text-4xl md:text-7xl text-balance font-bold text-center'>
              Proyectos
            </h2>

            <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center max-w-2xl mx-auto'>
              He trabajado en diversos proyectos, desde sitios web sencillos
              hasta aplicaciones web complejas. Aquí tienes algunos de mis
              favoritos.
            </p>
          </article>

          <ProjectList />
        </div>
      </section>
    </BlurFade>
  )
}
