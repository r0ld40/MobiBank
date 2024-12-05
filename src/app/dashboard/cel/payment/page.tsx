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
  const [done, setDone] = useState(false);
  const [transaction, setTransaction] = useState('');

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
    if (!data) return;

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

  const handleChange = (value: string) => {
    setTransaction(value);

    let newData = { ...data };

    newData[0].recently = [];

    newData[0].recently.push({
      id: newData[0].transactions.length + 1,
      mode: value,
      value: 0,
      date: new Date().toISOString(),
      method: 'send',
      to: newData[0].operator,
    });

    setData(newData);

    newData = [];
    console.log('Metodo escolhido:', transaction);

    setDone(value !== '');
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
        <p className="w-full text-2xl font-bold mb-4">Qual é a forma de pagamento?</p>
        <RadioGroup onValueChange={handleChange} defaultValue="none" className="flex flex-col gap-5">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={'Carteira'} id={`cash`} />
            <Label htmlFor={`cash`} className="font-semibold text-lg">
              Saldo na conta
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={'Cartão de Crédito'} id={`card`} />
            <Label htmlFor={`card`} className="font-semibold text-lg">
              Cartão final
            </Label>
          </div>
        </RadioGroup>
      </div>
      <Link
        onClick={updateData}
        href={'/dashboard/cel/value'}
        className={`w-fit p-5 px-[80px] flex justify-center items-center rounded-lg font-semibold ${done ? 'bg-[#0980B4] hover:bg-black hover:bg-opacity-20' : 'bg-gray-300 cursor-not-allowed'} transition`}
      >
        Próximo
      </Link>
    </div>
  );
}
