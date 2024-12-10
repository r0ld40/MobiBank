import Image from 'next/image';
import ServicesImage from '@/assets/services-image.png';
import Verified from '@/assets/verified';

const services = ['Boleto Bancário', 'Cartão de Crédito', 'Pix', 'Cartão de Débito', 'Link de Pagamento'];

const gate = [
  { id: 1, text: 'Ut enim ad minim veniam, quis nostrud', title: 'Checkout' },
  { id: 2, text: 'Ut enim ad minim veniam, quis nostrud', title: 'API E-Commerce' },
  { id: 3, text: 'Ut enim ad minim veniam, quis nostrud', title: 'Super Link' },
];

export default function Services() {
  return (
    <div className="">
      <div className="w-full flex flex-col items-center gap-2 bg-[#1A1A1A] text-white p-5">
        <h2 className="text-3xl font-semibold">5 em 1:</h2>
        <p className="text-sm text-[#C4C4C4]">Todas as opções de pagamento em um só lugar</p>
      </div>
      <div className="w-full flex justify-center items-center p-5">
        <div className="w-fit grid grid-cols-1 md:grid-cols-5 gap-[220px]">
          {services.map((service) => (
            <p className="text-center font-semibold" key={service}>
              {service}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full h-[45rem] flex items-center justify-center gap-14">
        <div className="w-fit flex flex-col gap-5 bg-[#EDEDED] -skew-x-12 p-5">
          <Image src={ServicesImage} alt="services" width={500} height={500} className="" />
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
    </div>
  );
}
