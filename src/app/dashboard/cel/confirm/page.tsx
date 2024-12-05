'use client';

import Arrow from '@/assets/arrow';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface UserData {
  id: number;
  name: string;
  cpf: string;
  phone: string;
  operator: string;
  transactions: Transaction[];
  recently: Transaction[];
}

interface Transaction {
  id: number;
  mode: string;
  value: number;
  date: string;
  method: string;
  to: string;
}

export default function Page() {
  const [data, setData] = useState<Record<number, UserData> | null>(null);
  const recently = data?.[0]?.recently ?? [];
  const cash = recently.length ? recently[0].value : 0;

  const fetchInfo = async () => {
    const response = await fetch('/api/info', { method: 'GET' });
    const response2 = await fetch('/api/rede', { method: 'GET' });

    if (response.ok && response2.ok) {
      const data = await response.json();
      setData(data);
    } else {
      console.error('Erro ao buscar dados:', response.statusText);
    }
  };

  const updateData = async () => {
    if (!data || !recently?.[0]) return;

    const newData = { ...data };

    if (newData[0]) {
      newData[0].transactions.push(recently[0]);
    }

    setData(newData);

    const updatedData = { ...data };

    const response = await fetch('/api/info', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    if (response.ok) {
      const info = await response.json();
      setData(info);
      console.log('Dados atualizados:', info);
    } else {
      console.error('Erro ao atualizar dados:', response.statusText);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const money = (value: number): string => {
    if (value > 25) {
      return '60';
    }
    return '30';
  };

  return (
    <div className="w-[35rem] h-fit flex flex-col items-center gap-8 bg-white p-5 rounded-lg border-2">
      <div className="w-full flex flex-col gap-2">
        <Link href={'/dashboard/cel'} className="w-full flex gap-2 items-center">
          <Arrow color="#000000" size={20} rotate={180} />
          <h2 className="w-fit font-semibold text-lg">Recarga de Celular</h2>
        </Link>
        <hr />
        <p className="w-full text-2xl font-bold mb-4">Confirmar transação?</p>
      </div>
      <div className="w-full flex flex-col gap-2">
        <p>
          Recarga {recently?.[0]?.to}: R$ {recently?.[0]?.value}
        </p>
        <p>Válido por {money(cash)} dias</p>
      </div>
      <Link
        onClick={updateData}
        href={'/dashboard/cel/loading'}
        className={`w-fit p-5 px-[80px] flex justify-center items-center rounded-lg font-semibold bg-[#0980B4] hover:bg-black hover:bg-opacity-20 transition`}
      >
        Próximo
      </Link>
    </div>
  );
}
