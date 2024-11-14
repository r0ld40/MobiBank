'use client';

import Image from 'next/image';
import Logo from '@/assets/mobi-logo-dash.png';
import React from 'react';
import Link from 'next/link';
import Config from '@/assets/config';
import Links from './Links-Menu';

const cofreData = [
  { id: 1, name: 'Cofre 1', value: 'R$ 0,00', color: "#ffffff" },
  { id: 2, name: 'Cofre 2', value: 'R$ 0,00', color: "#ffffff" },
  { id: 3, name: 'Cofre 3', value: 'R$ 0,00', color: "#ffffff" },
  { id: 4, name: 'Cofre 4', value: 'R$ 0,00', color: "#ffffff" },
  { id: 5, name: 'Cofre 5', value: 'R$ 0,00', color: "#ffffff" },
]

export default function Aside() {
  return (
    <aside className="h-screen w-[240px] flex flex-col items-center py-12 bg-[#1A1A1A] text-white">
      <Image src={Logo} alt="logo" width={75} />
      <div className='w-full flex flex-col gap-3 justify-center items-start p-5 mt-5'>
        <label htmlFor="menu" className='w-fit flex justify-center items-center'>Menu:</label>
        <nav className='w-full'>
          <ul className='flex flex-col gap-3'>
            <Links WebRoute='/dashboard/overview' text='Overview' link={'/dashboard/overview'} iconName='Group' />
            <Links WebRoute='/dashboard/pix' text='Pix' link={'/dashboard/pix'} iconName='Pix' />
            <Links WebRoute='/dashboard/payments' text='Pagamentos' link={'/dashboard/payments'} iconName='Payments' />
            <Links WebRoute='/dashboard/cel' text='Recarga de Celular' link={'/dashboard/cel'} iconName='Cel' />
            <Links WebRoute='/dashboard/transfer' text='Transferir' link={'/dashboard/transfer'} iconName='Pay' />
            <Links WebRoute='/dashboard/receive' text='Depositar' link={'/dashboard/receive'} iconName='Receive' />
          </ul>
        </nav>
      </div>
      <div className='w-full p-5'>
        <h2>Cofrinhos</h2>
        <div className='w-full p-2 flex flex-col items-center bg-[#333333] rounded-lg gap-3'>
          <div className='w-full flex flex-col items-center'>
            {cofreData.map((cofre) => (
              <div className='w-full flex gap-2 items-center text-[#888888] relative' key={cofre.id}>
                <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: cofre.color }}></div>
                <div className='w-full flex justify-between'>
                  <span>{cofre.name}</span>
                  <span>{cofre.value}</span>
                </div>
              </div>
            ))}
          </div>
          <Link href={'/dashboard/config'} className='w-fit flex gap-2 mt-2 items-center hover:opacity-70 transition rounded-lg bg-[#5151F9] p-1 px-2'>
            <p className='text-xl font-bold'>+</p>
            Adicionar
          </Link>
        </div>
      </div>
      <div className='w-full text-[#888888] p-5'>
        <Link href={'/dashboard/config'} className='w-fit flex gap-3 items-center hover:opacity-70 transition'>
          <Config fill='#888888' />
          Configurações
        </Link>
      </div>
    </aside>
  );
}
