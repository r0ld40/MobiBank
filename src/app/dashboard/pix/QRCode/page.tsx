'use client';

import Arrow from '@/assets/arrow';
import Link from 'next/link';
import { useState } from 'react';

const info = [
  {
    id: 1,
    name: 'João da Silva',
    cpf: '000.000.000-00',
    conta: 'Um Banco ai S.A',
  },
];

export default function PixQRCode() {
  const [qrCode, setQrCode] = useState('');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQrCode(value);
  };

  return (
    <div className="w-[58rem] h-[45rem] flex flex-col gap-5 justify-between items-center border-2 p-5 rounded-lg bg-white">
      <div className="w-full flex flex-col gap-5 items-center">
        <Link href={'/dashboard/pix'} className="w-full flex gap-2 items-center">
          <Arrow color="#000000" size={20} rotate={180} />
          <h2 className="w-fit font-semibold text-lg">Pagamento via Pix</h2>
        </Link>
        <div className="w-full flex flex-col gap-5">
          <h2 className="font-semibold text-2xl">Insira o código do QR code para pagar</h2>
          <input
            onChange={handleInput}
            value={qrCode}
            placeholder={'0000 0000 0000 0000'}
            type="text"
            className="w-[450px] h-10 p-4 rounded-lg outline-none focus:bg-black focus:bg-opacity-10 transition border-2 bg-[#F6F6F6]"
          />
        </div>
        <p className="w-full text-sm">
          Para <strong>{info[0].name}</strong>
        </p>
      </div>
      <Link
        href={'/dashboard/pix/Transfer'}
        className={`w-fit p-5 px-[80px] flex justify-center items-center rounded-lg font-semibold transition ${qrCode !== '' ? 'bg-[#0980B4] hover:bg-black hover:bg-opacity-20' : 'bg-gray-300 cursor-not-allowed'}`}
      >
        Próximo
      </Link>
    </div>
  );
}
