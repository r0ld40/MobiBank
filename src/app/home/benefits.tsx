import Verified from '@/assets/verified';
import Image from 'next/image';
import BenefitsImage from '@/assets/benefits-image.png';
import Button from '@/components/button';

const benefits = [
  { id: 1, text: 'Pagamento Pix e QR Code' },
  { id: 2, text: 'Aproximação NFC' },
  { id: 3, text: 'Chip 3G e Wi-fi' },
  { id: 4, text: 'Bateria Durável' },
  { id: 5, text: 'Comprovante Papel e SMS' },
  { id: 6, text: 'Interface Ultra veloz' },
];

export default function Benefits() {
  return (
    <div className="flex items-center justify-center gap-5 p-8">
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
    </div>
  );
}
