import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Title',
  description: 'Contact Description',
  keywords: ['Contact Page', 'Victor', 'información', '...']
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  )
}
