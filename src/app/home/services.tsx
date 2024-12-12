import Image from 'next/image';
import ServicesImage from '@/assets/services-image.png';
import Boleto from '@/assets/boleto.png';
import CartaoCredito from '@/assets/cartao-credito.png';
import CartaoDebito from '@/assets/cartao-debito.png';
import PixImage from '@/assets/pix-image.png';
import LinkPagamento from '@/assets/link-pagamento.png';
import Verified from '@/assets/verified';
import { useEffect, useState } from 'react';

const services = ['Boleto Bancário', 'Cartão de Crédito', 'Pix', 'Cartão de Débito', 'Link de Pagamento'];

const gate = [
  { id: 1, text: 'Ut enim ad minim veniam, quis nostrud', title: 'Checkout' },
  { id: 2, text: 'Ut enim ad minim veniam, quis nostrud', title: 'API E-Commerce' },
  { id: 3, text: 'Ut enim ad minim veniam, quis nostrud', title: 'Super Link' },
];

const renderIcons = (nameIcon: string) => {
  switch (nameIcon) {
    case 'Boleto Bancário':
      return <Image src={Boleto} alt="services" width={40} height={40} className="" />;
    case 'Cartão de Crédito':
      return <Image src={CartaoCredito} alt="services" width={40} height={40} className="" />;
    case 'Pix':
      return <Image src={PixImage} alt="services" width={40} height={40} className="" />;
    case 'Cartão de Débito':
      return <Image src={CartaoDebito} alt="services" width={40} height={40} className="" />;
    case 'Link de Pagamento':
      return <Image src={LinkPagamento} alt="services" width={40} height={40} className="" />;
  }
};

export default function Services() {
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
    <div>
      <div className="w-full flex flex-col items-center gap-2 bg-[#1A1A1A] text-white p-5">
        <h2 className="text-3xl font-semibold">5 em 1:</h2>
        <p className="text-sm text-[#C4C4C4]">Todas as opções de pagamento em um só lugar</p>
      </div>
      <div className="w-full flex justify-center items-center p-5 px-12">
        <div className="w-fit grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-[200px]">
          {services.map((service) => (
            <p
              className={`flex flex-col items-center gap-2 text-center text-xl font-semibold ${service === 'Pix' && 'text-[#4FACFE] font-bold'}`}
              key={service}
            >
              {renderIcons(service)}
              {service}
            </p>
          ))}
        </div>
      </div>

      {windowSize.width > 1024 && (
        <div className="w-full h-[45rem] flex items-center justify-center gap-14">
          <div className="w-fit flex flex-col gap-5 bg-[#EDEDED] -skew-x-12 p-5">
            <Image src={ServicesImage} alt="services" width={350} height={350} className="" />
            <div className="max-w-[17rem] bg-white rounded-full p-2 py-4   flex items-center justify-center gap-2">
              <Verified color="#4FACFE" />
              <p>Fácil de usar e seguro</p>
            </div>
          </div>
          <div>
            <span className="text-[#0980B4] text-sm">Conheça também</span>
            <h2 className="text-3xl font-semibold">Gateway de Pagamento MobiBank</h2>
            <p className="text-sm text-[#ABABB9]">Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
            <div className="w-full flex flex-col gap-7 mt-12">
              {gate.map((gate) => (
                <div key={gate.id} className="w-fit flex gap-2 items-center">
                  <Verified color="#4FACFE" />
                  <div>
                    <h2 className="text-2xl font-semibold">{gate.title}</h2>
                    <p className="text-sm text-[#ABABB9]">{gate.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {windowSize.width <= 1024 && (
        <div className="w-full flex flex-col items-center justify-center mt-14">
          <div>
            <span className="text-[#0980B4] text-md">Conheça também</span>
            <h2 className="text-xl font-semibold">Gateway de Pagamento MobiBank</h2>
          </div>
          <div className="w-fit flex flex-col items-center justify-center gap-5 mt-5 bg-[#EDEDED] -skew-x-6 p-5">
            <Image src={ServicesImage} alt="services" width={300} height={300} className="" />
            <div className="max-w-[17rem] bg-white rounded-full p-2 py-4   flex items-center justify-center gap-2">
              <Verified color="#4FACFE" />
              <p>Fácil de usar e seguro</p>
            </div>
          </div>
          <p className="text-sm text-[#ABABB9] mt-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
          <div>
            <div className="w-full flex flex-col gap-7 my-14">
              {gate.map((gate) => (
                <div key={gate.id} className="w-fit flex gap-2 items-center">
                  <Verified color="#4FACFE" />
                  <div>
                    <h2 className="text-2xl font-semibold">{gate.title}</h2>
                    <p className="text-sm text-[#ABABB9]">{gate.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
