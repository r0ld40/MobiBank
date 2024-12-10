import OverUnderCard from './over-under-card';
import React from 'react';
import EyeOpen from '@/assets/eye-open';
import EyeClosed from '@/assets/eye-closed';

export default function CardClient() {
  const [eye, setEye] = React.useState(true);
  const saldo = '0,00';

  return (
    <div className="w-fit h-full flex flex-col items-center gap-8 bg-white p-5 rounded-lg border-2">
      <h2 className="w-full font-semibold text-xl">Seu Saldo</h2>
      <div className="w-full font-bold text-3xl flex justify-between">
        <p>R$ {eye ? saldo : saldo.replace(/./g, '*')}</p>
        <p>
          {eye ? (
            <button onClick={() => setEye(false)}>
              <EyeOpen />
            </button>
          ) : (
            <button onClick={() => setEye(true)}>
              <EyeClosed />
            </button>
          )}
        </p>
      </div>

      <button className="w-[338px] border-2 border-black border-dashed p-2 font-semibold opacity-40 hover:opacity-100 transition ease-in rounded-xl">
        Criar Cartão Virtual
      </button>
      <OverUnderCard />
    </div>
  );
}
