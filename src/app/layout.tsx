import Footer from '@/components/Footer/Footer';
import './globals.css';
import Header from '@/components/Header/Header';
import StoreProvider from './storeProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <StoreProvider>
          <div className="flex flex-col min-h-dvh w-full">
            <div className="flex flex-col body-div flex-1">
              <Header />
              <main className="flex-1">{children}</main>
            </div>
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
