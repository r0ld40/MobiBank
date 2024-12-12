'use client';

import Arrow from '@/assets/arrow';
import Link from 'next/link';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useEffect, useState } from 'react';
import { DatePicker } from '@/components/pick-date';

type Transaction = {
  id: number;
  mode: string;
  value: number;
  date: string;
  method: string;
};

type UserData = {
  id: number;
  name: string;
  cpf: string;
  conta: string;
  transactions: Transaction[];
  recently: Transaction[];
};

export default function PixTransfer() {
  const [money, setMoney] = useState(234.56);

  const [data, setData] = useState<Record<number, UserData>>(); // info dos clientes do banco
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

  const updateData = async () => {
    const response = await fetch('/api/info', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // Dados para atualizar
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data); // Exibe a resposta da API
    } else {
      console.error('Erro ao atualizar dados:', response.statusText);
    }
  };

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value) && value >= 0) {
      setMoney(value);
    }
  };

  const Submit = () => {
    const date = new Date();

    if (user && user.transactions) {
      user.transactions.push({
        id: user.transactions.length + 1,
        mode: 'TED/DOC',
        value: money,
        date: date.toISOString(),
        method: 'send',
      });

      user.recently = [];

      user.recently.push({
        id: user.transactions.length + 1,
        mode: 'TED/DOC',
        value: money,
        date: date.toISOString(),
        method: 'send',
      });
    }

    updateData();
  };

  return (
    <div className="w-[58rem] h-[45rem] flex flex-col gap-5 justify-between items-center border-2 p-5 rounded-lg bg-white">
      <div className="w-full flex flex-col gap-5 items-center">
        <Link href={'/dashboard/transfer/bank'} className="w-full flex gap-2 items-center">
          <Arrow color="#000000" size={20} rotate={180} />
          <h2 className="w-fit font-semibold text-lg">Transferência</h2>
        </Link>
        <div className="w-full flex flex-col gap-5">
          <h2 className="font-semibold text-3xl">Transferindo</h2>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="w-fit text-2xl text-[#0980B4]">R$ {money.toFixed(2)}</button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Insira o valor</AlertDialogTitle>
              </AlertDialogHeader>
              <div className="w-full flex flex-col gap-5 items-center">
                <input
                  placeholder="0,00"
                  type="number"
                  min={0}
                  step="0.01"
                  value={money > 0 ? money : ''}
                  onChange={handleChangeValue}
                  className="w-[450px] h-10 p-4 rounded-lg outline-none focus:bg-black focus:bg-opacity-10 transition border-2 bg-[#F6F6F6]"
                />
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction>Confirmar</AlertDialogAction>
                </AlertDialogFooter>
              </div>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="w-full">
          <ul className="w-full flex flex-col gap-7">
            <li className="w-full flex items-center justify-between font-bold">
              Quando
              <DatePicker />
            </li>
            <li className="w-full flex items-center justify-between">
              <strong>Forma de Transferência</strong>
              <p>Pix</p>
            </li>
            <li className="w-full flex items-center justify-between">
              <strong>CPF</strong>
              <p>{user?.cpf?.replace(/^\d{3}/, '***').replace(/\d{2}$/, '**')}</p>
            </li>
            <li className="w-full flex items-center justify-between">
              <strong>Conta</strong>
              <p>{user?.conta}</p>
            </li>
          </ul>
        </div>
      </div>
      <button onClick={() => Submit()}>
        <Link
          href={'/dashboard/transfer/loading'}
          className={`w-fit p-5 px-[80px] flex justify-center items-center rounded-lg font-semibold ${
            money > 0 ? 'bg-[#0980B4] hover:bg-black hover:bg-opacity-20' : 'bg-gray-300 cursor-not-allowed'
          } transition`}
        >
          Transferir
        </Link>
      </button>
    </div>
  );
}
