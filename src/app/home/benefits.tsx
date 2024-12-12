import Verified from '@/assets/verified';
import Image from 'next/image';
import BenefitsImage from '@/assets/benefits-image.png';
import Button from '@/components/button';
import { useEffect, useState } from 'react';

const benefits = [
  { id: 1, text: 'Pagamento Pix e QR Code' },
  { id: 2, text: 'Aproximação NFC' },
  { id: 3, text: 'Chip 3G e Wi-fi' },
  { id: 4, text: 'Bateria Durável' },
  { id: 5, text: 'Comprovante Papel e SMS' },
  { id: 6, text: 'Interface Ultra veloz' },
];

export default function Benefits() {
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
    <div className="flex items-center justify-center gap-5 p-8">
      {windowSize.width > 1024 && (
        <>
          <div className="w-[35rem]">
            <Image src={BenefitsImage} alt="benefits" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {benefits.map((text, index) => (
                <div key={index} className="flex gap-2">
                  <Verified color="#4FACFE" />
                  <p>{text.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-[35rem] flex flex-col gap-5">
            <h2 className="text-3xl font-semibold">Mais benefícios para seu comércio com a Maquininha Mobibank</h2>
            <p className="text-sm text-[#ABABB9]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
            </p>
            <Button
              back="bg-[#4FACFE] hover:bg-white border-2 border-[#4FACFE]"
              text="text-white hover:text-black"
              className="w-fit p-4 px-10 rounded-lg"
            >
              Saiba mais
            </Button>
          </div>
        </>
      )}

      {windowSize.width <= 1024 && (
        <>
          <div className="flex flex-col gap-5 py-12">
            <h2 className="text-3xl font-semibold">Mais benefícios para seu comércio com a Maquininha Mobibank</h2>
            <Image src={BenefitsImage} alt="benefits" />
            <p className="text-sm text-[#ABABB9]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {benefits.map((text, index) => (
                <div key={index} className="flex gap-2">
                  <Verified color="#4FACFE" />
                  <p>{text.text}</p>
                </div>
              ))}
            </div>
            <Button
              back="bg-[#4FACFE] hover:bg-white border-2 border-[#4FACFE]"
              text="text-white hover:text-black"
              className="p-4 px-10 rounded-lg mt-8"
            >
              Saiba mais
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
