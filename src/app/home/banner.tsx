import Image from 'next/image';
import BannerImage from '@/assets/banner-image.png';
import Button from '@/components/button';
import { useEffect, useState } from 'react';

export default function Banner() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
  });

  useEffect(() => {
    // Verifica se estamos no lado do cliente antes de acessar `window`
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
    <div className="w-full h-[40rem] bg-[#1A1A1A] flex items-center justify-center gap-12 p-5 md:p-16">
      {/* Renderiza o conteúdo para telas menores que 768px */}
      {windowSize.width <= 768 && (
        <div className="text-white font-semibold flex flex-col gap-3">
          <h1 className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
          <Image src={BannerImage} alt="banner" width={500} height={500} />
          <div className="max-w-[30rem] flex flex-col gap-8">
            <h2>Ut enim ad minim veniam, quis nostrud exercitation ullamco</h2>
            <Button className="rounded-lg py-4">LOREM IPSUM</Button>
          </div>
        </div>
      )}

      {/* Renderiza o conteúdo para telas maiores que 768px */}
      {windowSize.width > 768 && (
        <div className="w-full h-[40rem] bg-[#1A1A1A] flex items-center justify-center gap-12 p-16">
          <div className="max-w-[30rem] flex flex-col gap-8 text-white font-semibold">
            <h1 className="text-4xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
            <h2>Ut enim ad minim veniam, quis nostrud exercitation ullamco </h2>
            <Button className="rounded-lg py-4">LOREM IPSUM</Button>
          </div>
          <Image src={BannerImage} alt="banner" width={500} height={500} />
        </div>
      )}
    </div>
  );
}
