'use client';

import Image from 'next/image';
import Logo from '@/assets/mobi-logo-dash.png';
import Group from '@/assets/group';
import Pix from '@/assets/pix';
import Payments from '@/assets/payments';
import Cel from '@/assets/cel';
import Pay from '@/assets/pay';
import Receive from '@/assets/receive';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Aside() {
  const route = usePathname();

  return (
    <aside className="h-screen w-[240px] flex flex-col gap-5 items-center py-12 bg-[#1A1A1A] text-white">
      <Image src={Logo} alt="logo" width={75} />
      <div className='w-full flex flex-col gap-3 justify-center items-start p-5'>
        <label htmlFor="menu" className='w-fit flex justify-center items-center'>Menu:</label>
        <nav className='w-full'>
          <ul className='flex flex-col gap-3'>
            <Link href={'/dashboard/overview'}>
              <li className={`flex gap-3 items-center hover:bg-[#888888] font-bold hover:text-white transition cursor-pointer p-2 rounded-full ${route === '/dashboard/overview' || route === '/dashboard' ? 'bg-[#0980B4] text-white' : 'text-[#888888]'}`}>
                <Group fill={`${route === '/dashboard/overview' || route === '/dashboard' ? '#ffffff' : '#0980B4'}`} />
                Overview
              </li>
            </Link>
            <Link href={'/dashboard/pix'}>
              <li className={`flex gap-3 items-center hover:bg-[#888888] font-bold hover:text-white transition cursor-pointer p-2 rounded-full ${route === '/dashboard/pix' ? 'bg-[#0980B4] text-white' : 'text-[#888888]'}`}>
                <Pix fill={`${route === '/dashboard/pix' ? '#ffffff' : '#0980B4'}`} />
                Pix
              </li>
            </Link>
            <Link href={'/dashboard/payments'}>
              <li className={`flex gap-3 items-center hover:bg-[#888888] font-bold hover:text-white transition cursor-pointer p-2 rounded-full ${route === '/dashboard/payments' ? 'bg-[#0980B4] text-white' : 'text-[#888888]' }`}>
                <Payments fill={`${route === '/dashboard/payments' ? '#ffffff' : '#0980B4'}`} />
                Pagamentos
              </li>
            </Link>
            <Link href={'/dashboard/cel'}>
              <li className={`flex gap-3 items-center hover:bg-[#888888] font-bold hover:text-white transition cursor-pointer p-2 rounded-full ${route === '/dashboard/cel' ? 'bg-[#0980B4] text-white' : 'text-[#888888]' }`}>
                <Cel fill={`${route === '/dashboard/cel' ? '#ffffff' : '#0980B4' }`} />
                Cel
              </li>
            </Link>
            <Link href={'/dashboard/transfer'}>
              <li className={`flex gap-3 items-center hover:bg-[#888888] font-bold hover:text-white transition cursor-pointer p-2 rounded-full ${route === '/dashboard/transfer' ? 'bg-[#0980B4] text-white' : 'text-[#888888]' }`}>
                <Pay stroke={`${route === '/dashboard/transfer' ? '#ffffff' : '#0980B4' }`} />
                Transferir
              </li>
            </Link>
            <Link href={'/dashboard/receive'}>
              <li className={`flex gap-3 items-center hover:bg-[#888888] font-bold hover:text-white transition cursor-pointer p-2 rounded-full ${route === '/dashboard/receive' ? 'bg-[#0980B4] text-white' : 'text-[#888888]'}`}>
                <Receive stroke={`${route === '/dashboard/receive' ? '#ffffff' : '#0980B4' }`} />
                Receber
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className='text-[#888888]'>Configurações</div>
    </aside>
  );
}
