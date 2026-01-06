import {
  CalendarAppProjectImg,
  GenshinDiaryProjectImg,
  IgCloneProjectImg,
  TrikiGameProjectImg,
} from '@/assets/projetcs/_index'

export const LNGS = {
  es: { nativeName: 'es', name: 'Español' },
  en: { nativeName: 'en', name: 'English' },
}

export const NAV_ITEMS = [
  {
    title: 'home',
    href: '#home',
  },
  {
    title: 'projects',
    href: '#projects',
  },
  {
    title: 'aboutMe',
    href: '#about',
  },
]

export const MY_TECHONOLOGIES = [
  'React',
  'NextJS',
  'Turso',
  'Prisma',
  'Drizzle',
  'NodeJS',
  'Electron',
  'Tailwind',
  'Typescript',
]

export const PROJECTS_ITEMS = [
  {
    title: 'genshinDiary.title',
    colorTitle: 'text-red-400',
    description: 'genshinDiary.description',
    technologies: ['NextJS', 'React', 'Prisma', 'Turso', 'Tailwind', 'Shadcn'],
    image: GenshinDiaryProjectImg.src,
    href: 'https://genshin-diary.vercel.app/',
    github: 'https://github.com/miguedev1047/genshin-diary-app',
    isCode: true,
    isSource: true,
  },
  {
    title: 'instagramClone.title',
    colorTitle: 'text-yellow-400',
    description: 'instagramClone.description',
    technologies: [
      'NextJS',
      'React',
      'Drizzle',
      'Turso',
      'BetterAuth',
      'Tailwind',
      'Shadcn',
    ],
    image: IgCloneProjectImg.src,
    href: 'https://ig-app-clone.vercel.app',
    github: 'https://github.com/miguedev1047/ig-clone',
    isCode: true,
    isSource: true,
  },
  {
    title: 'trikiGame.title',
    colorTitle: 'text-[#FFFF00]',
    description: 'trikiGame.description',
    technologies: ['React', 'Tailwind', 'Zustand', 'Shadcn', '8Bit'],
    image: TrikiGameProjectImg.src,
    href: 'https://triki-game-web.vercel.app/',
    github: 'https://github.com/miguedev1047/triki-game',
    isCode: true,
    isSource: true,
  },
  {
    title: 'calendarApp.title',
    colorTitle: 'text-[#665CAA]',
    description: 'calendarApp.description',
    technologies: [
      'React',
      'Tailwind',
      'Zustand',
      'Shadcn',
      'Motion',
      'Tanstack Router',
    ],
    image: CalendarAppProjectImg.src,
    href: 'https://calendar-app-web.vercel.app',
    github: 'https://github.com/miguedev1047/calendar-app',
    isCode: true,
    isSource: true,
  },
]

export const EMAIL = 'miguelangeljimenez1047@gmail.com'
export const GITHUB = 'https://github.com/miguedev1047'
