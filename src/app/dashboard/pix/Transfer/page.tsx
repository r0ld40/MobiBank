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
import { useState } from 'react';
import { DatePicker } from './pick-date';

const info = [
  {
    id: 1,
    name: 'João da Silva',
    cpf: '000.000.000-00',
    conta: 'Um Banco ai S.A',
  },
];

export default function PixTransfer() {
  const [money, setMoney] = useState(0);

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value) && value >= 0) {
      setMoney(value);
    }
  };

  return (
    <div className="w-[58rem] h-[45rem] flex flex-col gap-5 justify-between items-center border-2 p-5 rounded-lg bg-white">
      <div className="w-full flex flex-col gap-5 items-center">
        <Link href={'/dashboard/pix/QRCode'} className="w-full flex gap-2 items-center">
          <Arrow color="#000000" size={20} rotate={180} />
          <h2 className="w-fit font-semibold text-lg">Pagamento via Pix</h2>
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
              <p>{info[0].cpf.replace(/^\d{3}/, '***').replace(/\d{2}$/, '**')}</p>
            </li>
            <li className="w-full flex items-center justify-between">
              <strong>Conta</strong>
              <p>{info[0].conta}</p>
            </li>
          </ul>
        </div>
      </div>
      <Link
        href={'/dashboard/pix/loading'}
        className={`w-fit p-5 px-[80px] flex justify-center items-center rounded-lg font-semibold ${
          money > 0 ? 'bg-[#0980B4] hover:bg-black hover:bg-opacity-20' : 'bg-gray-300 cursor-not-allowed'
        } transition`}
      >
        Transferir
      </Link>
    </div>
  );
}
