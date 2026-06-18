import Logo from '../Logo';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="adaptive-container">
      <div className="pt-8 flex items-center gap-4 md:gap-8">
        <Logo />
        <div className="flex items-center justify-between">
          <Navigation />
        </div>
      </div>
    </header>
  );
}
