import Button from '@/components/button';
import Image from 'next/image';
import KidsImage from '@/assets/kids-image.png';
import { useEffect, useState } from 'react';

export default function Kids() {
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
    <div className="bg-[#1A1A1A] text-white flex justify-center items-center gap-[250px] p-5 lg:p-16">
      {windowSize.width > 1024 && (
        <>
          <div className="max-w-[50rem] flex flex-col gap-5 p-5">
            <h2 className="text-4xl font-semibold">A primeira conta para o seu filho(a)!</h2>
            <p className="text-sm text-[#ABABB9]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
            </p>
            <Button className="w-fit px-12 py-5 rounded-lg">Saiba mais</Button>
          </div>
          <div>
            <Image src={KidsImage} alt="kids" width={400} height={400} />
          </div>
        </>
      )}

      {windowSize.width <= 1024 && (
        <>
          <div className="max-w-[50rem] flex flex-col items-center gap-5">
            <Image src={KidsImage} alt="kids" width={350} height={350} />
            <h2 className="text-2xl font-semibold">A primeira conta para o seu filho(a)!</h2>
            <p className="text-sm text-[#ABABB9]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
            </p>
            <Button className="w-fit px-12 py-5 rounded-lg">Saiba mais</Button>
          </div>
        </>
      )}
    </div>
  );
}
