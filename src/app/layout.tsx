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
    <html lang="en">
      <body>
        <StoreProvider>
          <div className="flex flex-col body-div h-full w-full">
          <Header />
          <main className="flex-1">{children}</main>
        </div>
        <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
