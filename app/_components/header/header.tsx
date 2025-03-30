import { ThemeToggle } from '@/components/ui/theme-toggle'
import { TypingAnimation } from '@/components/ui/typing-animation'
import { NAV_ITEMS } from '@/constants/general'
import Link from 'next/link'

export function Header() {
  return (
    <header className='sticky w-full h-20 bg-background/50 backdrop-blur-lg justify-center items-center top-0 border-b z-50'>
      <div className='flex h-full items-center max-w-4xl mx-auto px-4'>
        <nav className='flex grow basis-0'>
          <TypingAnimation className='text-xl font-black'>{`<Miguel />`}</TypingAnimation>
        </nav>

        <nav className='max-md:hidden'>
          <ul className='flex items-center space-x-8'>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className='hover:underline'
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className='flex grow basis-0 justify-end'>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
