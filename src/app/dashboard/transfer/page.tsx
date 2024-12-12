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

export default function TransferPage() {
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
        <Link href={'/dashboard/overview'} className="w-full flex gap-2 items-center">
          <Arrow color="#000000" size={20} rotate={180} />
          <h2 className="w-fit font-semibold text-lg">Transferência</h2>
        </Link>
        <div className="w-full flex flex-col gap-5">
          <h2 className="font-semibold text-3xl">Qual valor da transferência?</h2>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="w-fit text-4xl text-[#0980B4]">R$ {money.toFixed(2)}</button>
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
          <p>
            Saldo disponível em conta <strong className="text-[#0980B4]">R$ 12.948,53</strong>
          </p>
        </div>
      </div>
      <button>
        <Link
          href={'/dashboard/transfer/who'}
          className={`w-fit p-5 px-[80px] flex justify-center items-center rounded-lg font-semibold ${
            money > 0 ? 'bg-[#0980B4] hover:bg-black hover:bg-opacity-20' : 'bg-gray-300 cursor-not-allowed'
          } transition`}
        >
          Próximo
        </Link>
      </button>
    </div>
  );
}
