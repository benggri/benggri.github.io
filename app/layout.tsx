import type { Metadata } from 'next';
import './globals.css';

import Theme from '@/components/theme/Theme';
import ReactQueryProvider from '@/components/module/reactQuery/ReactQueryProvider';
import NavbarMenu from '@/components/layout/NavbarMenu';

export const metadata: Metadata = {
  title: 'Benggri github io',
  description: 'Benggri github io',
  other: {
    "google-adsense-account": "ca-pub-9245086971599023"
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`w-full h-screen mx-auto`}>
        <ReactQueryProvider>
          <Theme>
            <header className={`w-full z-[10] fixed t-0`}>
              <NavbarMenu />
            </header>
            <main className={`container relative top-20`}>
              {children}
            </main>
          </Theme>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
