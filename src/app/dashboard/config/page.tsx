'use client';

import Arrow from '@/assets/arrow';
import Config from '@/assets/config';
import EditIcon from '@/assets/edit';
import Profile from '@/assets/profile';
import ShareIcon from '@/assets/share';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface UserData {
  id: number;
  name: string;
  cpf: string;
  conta: string;
  agencia: string;
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

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="w-[35rem] min-h-[45rem] flex flex-col items-center gap-8 bg-white rounded-lg border-2">
      <div className="w-full p-12 flex items-center bg-[#1A1A1A] text-white rounded-t-lg gap-2">
        <div>
          <div className="w-12 h-12 bg-white rounded-full"></div>
        </div>
        <div className="w-full flex flex-col pl-4">
          <p>{data?.[0]?.name}</p>
          <div className="w-full flex items-center gap-2 text-sm opacity-60">
            <p>Ag {data?.[0]?.agencia}</p> -<p>Conta {data?.[0]?.conta}</p>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <button>
            <EditIcon stroke="#ffffff" className="hover:opacity-60 transition" width={26} height={26} />
          </button>
        </div>
      </div>
      <div className="w-full p-5 flex flex-col gap-5 text-2xl font-bold">
        <Link href={''} className="hover:opacity-60 transition flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#F0F8FF] rounded-lg flex items-center justify-center">
              <Profile width={30} height={30} />
            </div>
            Informações pessoais
          </div>
          <div>
            <Arrow color="#000000" />
          </div>
        </Link>
        <Link
          href={'/dashboard/config/configs'}
          className="hover:opacity-60 transition flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#F0F8FF] rounded-lg flex items-center justify-center">
              <Config width={30} height={30} />
            </div>
            Configurações
          </div>
          <div>
            <Arrow color="#000000" />
          </div>
        </Link>
        <Link href={''} className="hover:opacity-60 transition flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#F0F8FF] rounded-lg flex items-center justify-center">
              <ShareIcon width={30} height={30} />
            </div>
            Convidar amigos
          </div>
          <div>
            <Arrow color="#000000" />
          </div>
        </Link>
      </div>
    </div>
  );
}
