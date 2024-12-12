import Verified from '@/assets/verified';
import Button from '@/components/button';
import Card from '@/components/card';
import { useEffect, useState } from 'react';

const Cards = [
  { id: 1, text: 'Altere seu limite' },
  { id: 2, text: 'Rendimento de 104% (CDI)' },
  { id: 3, text: '100% mobile banking' },
  { id: 4, text: 'lorem' },
];

export default function CardDiv() {
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
    <div className="w-full flex items-center gap-5 md:px-[50px] xl:px-[200px]">
      {windowSize.width < 1024 && (
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex flex-col gap-12">
            <p className="font-semibold text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div className="w-full flex items-center justify-center">
              <div className="shadow-2xl shadow-[#4FACFE]">
                <Card />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-2">
              {Cards.map((card) => (
                <div key={card.id} className="flex gap-2 items-center">
                  <Verified color="#4FACFE" />
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
            <div className="w-full flex items-center justify-center gap-4">
              <Button back="bg-black hover:bg-white border-2 border-black">Reservar Cartão</Button>
              <Button back="bg-[#000000] border-2 border-black">Saber Mais</Button>
            </div>
          </div>
        </div>
      )}

      {windowSize.width >= 1024 && (
        <div className="w-full flex">
          <div className="w-full flex flex-col gap-12">
            <p className="font-semibold text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div className="grid md:grid-cols-2 gap-2">
              {Cards.map((card) => (
                <div key={card.id} className="flex gap-2 items-center">
                  <Verified color="#4FACFE" />
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <Button back="bg-black hover:bg-white border-2 border-black">Reservar Cartão</Button>
              <Button back="bg-[#000000] border-2 border-black">Saber Mais</Button>
            </div>
          </div>
          <div className="flex items-center">
            <div className="shadow-2xl shadow-[#4FACFE]">
              <Card />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
