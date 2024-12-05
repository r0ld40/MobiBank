'use client';

import Arrow from '@/assets/arrow';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface UserData {
  id: number;
  name: string;
  cpf: string;
  phone: string;
  operator: string;
}

interface Rede {
  company: string;
  id: number;
}

export default function Page() {
  const [data, setData] = useState<Record<number, UserData> | null>(null);
  const [rede, setRede] = useState<Rede[]>([]);
  const [done, setDone] = useState(false);

  const fetchInfo = async () => {
    const response = await fetch('/api/info', { method: 'GET' });
    const response2 = await fetch('/api/rede', { method: 'GET' });

    if (response.ok && response2.ok) {
      const data = await response.json();
      const rede = await response2.json();
      setData(data);
      setRede(rede);
    } else {
      console.error('Erro ao buscar dados:', response.statusText);
    }
  };

  const updateData = async () => {
    if (!data) return;

    const updatedData = { ...data };
    const firstUserKey = Object.keys(updatedData)[0];
    if (firstUserKey) {
      updatedData[Number(firstUserKey)].operator =
        rede.find((r) => r.company === updatedData[Number(firstUserKey)].operator)?.company || '';
    }

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

  const handleChange = (value: string) => {
    if (data) {
      const newInfo = { ...data };
      const firstUserKey = Number(Object.keys(newInfo)[0]);

      if (!isNaN(firstUserKey)) {
        newInfo[firstUserKey].operator = value;
        setData(newInfo);

        setDone(value !== '');
      }
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="w-[35rem] h-fit flex flex-col items-center gap-8 bg-white p-5 rounded-lg border-2">
      <div className="w-full flex flex-col gap-2">
        <Link href={'/dashboard/cel'} className="w-full flex gap-2 items-center">
          <Arrow color="#000000" size={20} rotate={180} />
          <h2 className="w-fit font-semibold text-lg">Recarga de Celular</h2>
        </Link>
        <hr />
        <p className="w-full text-2xl font-bold">Qual é a operadora?</p>
        <p className="w-full opacity-70 text-[#0980B4] text-sm font-semibold mb-4">
          {data?.[Number(Object.keys(data)[0])]?.phone}
        </p>
        <RadioGroup
          onValueChange={handleChange}
          defaultValue="none"
          className="flex flex-col gap-5 font-semibold text-lg"
        >
          {rede.map((redeItem) => (
            <div key={redeItem.id} className="flex items-center space-x-2">
              <RadioGroupItem value={redeItem.company} id={`r${redeItem.id}`} />
              <Label htmlFor={`r${redeItem.id}`}>{redeItem.company}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <Link
        onClick={updateData}
        href={'/dashboard/cel/payment'}
        className={`w-fit p-5 px-[80px] flex justify-center items-center rounded-lg font-semibold ${done ? 'bg-[#0980B4] hover:bg-black hover:bg-opacity-20' : 'bg-gray-300 cursor-not-allowed'} transition`}
      >
        Próximo
      </Link>
    </div>
  );
}
