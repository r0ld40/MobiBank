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
    const valueInt = parseFloat(value);
    let newData = { ...data };
    const recently = newData[0].recently;

    newData[0].recently = [];

    newData[0].recently.push({
      id: recently[0].id,
      mode: recently[0].mode,
      value: valueInt,
      date: recently[0].date,
      method: recently[0].method,
      to: recently[0].to,
    });

    console.log(newData);
    setData(newData);

    newData = [];

    setDone(valueInt !== 0);
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
            <RadioGroupItem value={'15,00'} id={`cash`} />
            <Label htmlFor={`cash`} className="font-semibold text-lg">
              <p>R$ 15,00</p>
              <p>Vál. 30 dias</p>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={'20,00'} id={`cash`} />
            <Label htmlFor={`cash`} className="font-semibold text-lg">
              <p>R$ 20,00</p>
              <p>Vál. 30 dias</p>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={'25,00'} id={`cash`} />
            <Label htmlFor={`cash`} className="font-semibold text-lg">
              <p>R$ 25,00</p>
              <p>Vál. 30 dias</p>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={'30,00'} id={`cash`} />
            <Label htmlFor={`cash`} className="font-semibold text-lg">
              <p>R$ 30,00</p>
              <p>Vál. 30 dias</p>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={'40,00'} id={`cash`} />
            <Label htmlFor={`cash`} className="font-semibold text-lg">
              <p>R$ 40,00</p>
              <p>Vál. 30 dias</p>
            </Label>
          </div>
        </RadioGroup>
      </div>
      <Link
        onClick={updateData}
        href={'/dashboard/cel/confirm'}
        className={`w-fit p-5 px-[80px] flex justify-center items-center rounded-lg font-semibold ${done ? 'bg-[#0980B4] hover:bg-black hover:bg-opacity-20' : 'bg-gray-300 cursor-not-allowed'} transition`}
      >
        Próximo
      </Link>
    </div>
  );
}
