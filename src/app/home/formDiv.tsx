import Apple from '@/assets/apple';
import PlayStore from '@/assets/playstore';
import Form from '@/components/form';
import { useEffect, useState } from 'react';

export default function FormDiv() {
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

  if (windowSize.width < 1024)
    return (
      <div className="w-full flex flex-col justify-center items-center gap-2 bg-[#1A1A1A] text-white p-8">
        <div className="max-w-[50rem] flex flex-col gap-8">
          <h2 className="text-3xl font-semibold">CADASTRE-SE E RECEBA A NOTIFICAÇÃO DE LANÇAMENTO DO APP</h2>
          <p className="text-sm text-[#C4C4C4]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
          </p>
          <Form />
        </div>
        <div className="flex flex-col gap-12 mt-8">
          <div className="w-fit flex gap-2 items-center p-5 rounded-lg shadow-2xl shadow-[#4FACFE]">
            <Apple color="#4FACFE" size={60} />
            <div>
              <p>Em breve na </p>
              <strong className="text-2xl">Apple Store</strong>
            </div>
          </div>
          <div className="w-fit flex gap-2 items-center p-5 rounded-lg shadow-2xl shadow-[#4FACFE]">
            <PlayStore color="#4FACFE" size={60} />
            <div>
              <p>Em breve no </p>
              <strong className="text-2xl">Google Play</strong>
            </div>
          </div>
        </div>
      </div>
    );

  if (windowSize.width > 1024)
    return (
      <div className="w-full flex justify-center items-center gap-2 bg-[#1A1A1A] text-white p-8">
        <div className="max-w-[50rem] flex flex-col gap-3">
          <h2 className="text-3xl font-semibold">CADASTRE-SE E RECEBA A NOTIFICAÇÃO DE LANÇAMENTO DO APP</h2>
          <p className="text-sm text-[#C4C4C4]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
          </p>
          <div className="flex gap-12 mt-8">
            <div className="w-fit flex gap-2 items-center p-5 rounded-lg shadow-2xl shadow-[#4FACFE]">
              <Apple color="#4FACFE" size={60} />
              <div>
                <p>Em breve na </p>
                <strong className="text-2xl">Apple Store</strong>
              </div>
            </div>
            <div className="w-fit flex gap-2 items-center p-5 rounded-lg shadow-2xl shadow-[#4FACFE]">
              <PlayStore color="#4FACFE" size={60} />
              <div>
                <p>Em breve no </p>
                <strong className="text-2xl">Google Play</strong>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Form />
        </div>
      </div>
    );
}
