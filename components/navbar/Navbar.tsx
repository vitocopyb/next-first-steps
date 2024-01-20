import Link from 'next/link';
import { HomeIcon } from '@primer/octicons-react';
import { ActiveLink } from '..';

const navItems = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' },
];

export const NavbarComponent = () => {
  return (
    <nav className="flex bg-blue-900 text-white p-2 m-2 rounded">
      <Link href="/" className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>
      {
        navItems.map(item => (
          <ActiveLink key={item.path} {...item} />
        ))
      }
    </nav>
  )
}
