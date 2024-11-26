import Link from 'next/link';
import dataJson from '@/data.json';

type Props = {
  id: number;
  mode: string;
  value: string;
};

export default function OverLast() {
  return (
    <div className="w-full h-full flex flex-col gap-3 border-2 p-5 rounded-lg bg-white">
      <div className="w-full flex justify-between">
        <p className="font-bold text-xl">Últimas Transações</p>
        <Link href={''} className="text-[#00F2FE] hover:underline hover:text-red-600 transition">
          Ver tudo
        </Link>
      </div>
      <hr />
      <div>
        {dataJson[0].values.map((transaction: Props) => (
          <div className="w-full flex justify-between" key={transaction.id}>
            <p>{transaction.mode}</p>
            <p>{transaction.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
