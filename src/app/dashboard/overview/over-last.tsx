import Link from 'next/link';
import { useEffect, useState } from 'react';

const Icons = ({
  method,
  value,
  mode,
  date,
  to,
}: {
  method: string;
  value: number;
  mode: string;
  date: string;
  to: string;
}) => {
  switch (method) {
    case 'send':
      return (
        <div className="w-full flex gap-2">
          <div className="w-10 h-10 rounded-lg bg-black">{/* Icone aqui */}</div>
          <div className="w-full flex flex-col">
            <div className="w-full flex justify-between">
              <p>Transferência via {mode}</p>
              <span className="text-[#B2B2B2]">R$ {value}</span>
            </div>
            <div className="w-full flex justify-between text-[#B2B2B2] text-sm">
              <p>{to}</p>
              <span>{date}</span>
            </div>
          </div>
        </div>
      );
    case 'receive':
      return (
        <div className="w-full flex gap-2">
          <div className="w-10 h-10 rounded-lg bg-black">{/* Icone aqui */}</div>
          <div className="w-full flex flex-col">
            <div className="w-full flex justify-between">
              <p>Transferência via {mode}</p>
              <span className="text-[#5AE677]">R$ {value}</span>
            </div>
            <div className="w-full flex justify-between text-[#B2B2B2] text-sm">
              <p>{to}</p>
              <span>{date}</span>
            </div>
          </div>
        </div>
      );
    default:
      return;
  }
};

type Transaction = {
  id: number;
  mode: string;
  value: number;
  date: string;
  method: string;
  to: string;
};

type UserData = {
  id: number;
  name: string;
  cpf: string;
  conta: string;
  phone: string;
  operator: string;
  transactions: Transaction[];
};

export default function OverLast() {
  const [data, setData] = useState<Record<number, UserData> | null>(null); // info dos clientes do banco
  const user = data?.[0]; // info do usuário

  const getData = async () => {
    const response = await fetch('/api/info', {
      method: 'GET',
    });

    if (response.ok) {
      const data = await response.json();
      setData(data);
      console.log(data);
    } else {
      console.error('Erro ao buscar dados:', response.statusText);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full max-h-[280px] overflow-y-scroll flex flex-col gap-3 border-2 p-5 rounded-lg bg-white">
      <div className="w-full flex flex-col gap-2 bg-white">
        <div className="w-full flex justify-between">
          <p className="font-bold text-xl">Últimas Transações</p>
          <Link href={''} className="text-[#00F2FE] hover:underline hover:text-red-600 transition">
            Ver tudo
          </Link>
        </div>
        <hr />
      </div>
      <div className="w-full flex flex-col gap-5">
        {user?.transactions
          .map((transaction) => (
            <div key={transaction.id} className="w-full flex justify-between items-center">
              <Icons
                method={transaction.method}
                value={transaction.value}
                mode={transaction.mode}
                date={transaction.date}
                to={transaction.to}
              />
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
}
