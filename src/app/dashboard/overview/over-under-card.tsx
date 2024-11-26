import Link from 'next/link';
import Image from 'next/image';
import TransIco from '@/assets/transfer-ico.png';
import Virtual from '@/assets/virtual-card-ico.png';
import Pay from '@/assets/pay-ico.png';
import Piggy from '@/assets/piggy-bank-ico.png';

const Cards = [
  {
    id: 1,
    name: 'Transferir',
    link: '/dashboard/transfer',
  },
  {
    id: 2,
    name: 'Pagar conta',
    link: '/dashboard/payments',
  },
  {
    id: 3,
    name: 'Cartão Virtual',
    link: '/dashboard/virtual-card',
  },
  {
    id: 4,
    name: 'Cofrinhos',
    link: '/dashboard/piggyBank',
  },
];

const figures = (nameFigure: string) => {
  switch (nameFigure) {
    case 'Transferir':
      return <Image src={TransIco} alt="transfer" width={33} height={33} />;
    case 'Pagar conta':
      return <Image src={Pay} alt="pay" width={33} height={33} />;
    case 'Cartão Virtual':
      return <Image src={Virtual} alt="card" width={33} height={33} />;
    case 'Cofrinhos':
      return <Image src={Piggy} alt="piggy" width={33} height={33} />;
    default:
      return '';
  }
};

export default function OverUnderCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {Cards.map((card) => (
        <Link
          href={card.link}
          key={card.id}
          className="w-[150px] h-[150px] bg-white border-[1px] rounded-lg flex flex-col items-center justify-center hover:bg-black hover:bg-opacity-20 hover:text-white hover:font-bold transition cursor-pointer"
        >
          {figures(card.name)}
          <p>{card.name}</p>
        </Link>
      ))}
    </div>
  );
}
