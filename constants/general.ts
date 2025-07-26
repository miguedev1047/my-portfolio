import {
  GenshinDiaryProjectImg,
  IgCloneProjectImg,
  OpenfyMusicProjectImg,
} from '@/assets/projetcs/_index'

export const NAV_ITEMS = [
  {
    title: 'Inicio',
    href: '#home',
  },
  {
    title: 'Proyectos',
    href: '#projects',
  },
  {
    title: 'Acerca de mi',
    href: '#about',
  },
]

export const MY_TECHONOLOGIES = [
  'React',
  'NextJS',
  'Turso',
  'Prisma',
  'Tailwind',
  'Typescript',
]

export const PROJECTS_ITEMS = [
  {
    title: 'Genshin Diary',
    colorTitle: 'text-red-400',
    description:
      'Sitio web que ofrece guías sencillas para tus personajes favoritos de Genshin Impact.',
    technologies: ['NextJS', 'React', 'Tailwind', 'Shadcn', 'Prisma', 'Turso'],
    image: GenshinDiaryProjectImg.src,
    href: 'https://genshin-diary.vercel.app/',
    github: 'https://github.com/miguedev1047/genshin-diary-app',
    isCode: true,
    isSource: true,
  },
  {
    title: 'Openfy Music',
    colorTitle: 'text-blue-400',
    description:
      'Una aplicación de escritorio que te permite descargar y escuchar música.',
    technologies: ['Electron', 'React', 'Tailwind', 'Shadcn', 'NodeJS'],
    image: OpenfyMusicProjectImg.src,
    href: 'https://github.com/miguedev1047/openfy-music',
    github: 'https://github.com/miguedev1047/openfy-music',
    isCode: true,
    isSource: true,
  },
  {
    title: 'Instagram Clone',
    colorTitle: 'text-yellow-400',
    description: 'Un clón simple de instagram con tecnologías modernas.',
    technologies: ['NextJS', 'React', 'Tailwind', 'Shadcn', 'Drizzle', 'Turso'],
    image: IgCloneProjectImg.src,
    href: 'https://ig-app-clone.vercel.app',
    github: 'https://github.com/miguedev1047/ig-clone',
    isCode: true,
    isSource: true,
  },
]

export const EMAIL = 'miguelangeljimenez1047@gmail.com'
export const GITHUB = 'https://github.com/miguedev1047'
