'use client';

import Image from 'next/image';
import Logo from '@/assets/mobi-logo.png';
import Button from '../button';
import { useEffect, useState } from 'react';
import MenuIcon from '@/assets/menu';

export default function Header() {
  const [isHidden, setIsHidden] = useState(true);

  const [menu, setMenu] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: 0,
  });

  const handleScroll = () => (document.body.style.position = 'sticky'); // Can scroll down

  const handleNoScroll = () => (document.body.style.position = 'fixed'); // Can not scroll down

  const handleMenu = () => {
    setMenu(!menu);
    if (menu) {
      handleNoScroll();
    } else {
      handleScroll();
    }
  };

  useEffect(() => {
    // Verifica se estamos no lado do cliente antes de acessar `window`
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      setIsHidden(currentPath.startsWith('/dashboard'));
    }

    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
        });
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <header
      className={`w-full h-[6rem] bg-[#1A1A1A] text-white p-2 flex items-center justify-center relative ${isHidden ? 'hidden' : 'flex'}`}
    >
      {windowSize.width > 1024 && (
        <nav className="w-[75rem] h-full flex items-center justify-between">
          <Image src={Logo} alt="logo-image" />
          <ul className="flex gap-12 font-semibold">
            <li>Conta Digital</li>
            <li>Cartões</li>
            <li>A Mobi Bank</li>
            <li>Gateway</li>
          </ul>
          <Button>Entrar</Button>
        </nav>
      )}

      {windowSize.width <= 1024 && (
        <nav className="w-[75rem] h-full flex items-center justify-between">
          <Image src={Logo} alt="logo-image" />
          <button onClick={() => handleMenu}>
            <MenuIcon />
          </button>
          <Button>Entrar</Button>
        </nav>
      )}

      {menu && (
        <div className="w-screen h-screen bg-[#1A1A1A] absolute top-0 left-0">
          <button onClick={() => handleMenu} className="absolute top-5 right-5 font-bold text-2xl">
            X
          </button>
          <div className="w-full h-full flex flex-col items-center mt-16 gap-16">
            <Image src={Logo} alt="logo-image" />
            <ul className="flex flex-col gap-12 text-center font-semibold">
              <li>Conta Digital</li>
              <li>Cartões</li>
              <li>A Mobi Bank</li>
              <li>Gateway</li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
