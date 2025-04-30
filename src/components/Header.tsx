
import { useScrollPosition } from '@/hooks/use-scroll-position';
import { cn } from '@/lib/utils';

const Header = () => {
  const scrollPosition = useScrollPosition();

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrollPosition > 50 ? "bg-white shadow-md py-4" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-playfair font-bold text-primary">
          MJC Real Estate
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#properties" className="text-primary hover:text-accent transition-colors">Properties</a>
          <a href="#about" className="text-primary hover:text-accent transition-colors">About</a>
          <a href="#contact" className="text-primary hover:text-accent transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
