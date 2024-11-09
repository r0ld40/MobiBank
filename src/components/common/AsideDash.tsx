'use client';

import Image from 'next/image';
import Logo from '@/assets/mobi-logo-dash.png';

export default function Aside() {
  return (
    <aside className="block w-[240px] bg-[#1A1A1A] text-white">
      <Image src={Logo} alt="logo" width={75} />
      <div>
        <label htmlFor="menu">Menu</label>
        <nav>
          <ul>
            <li>Overview</li>
            <li>Pix</li>
            <li>Pagamentos</li>
            <li>Recarga de Celular</li>
            <li>Transferir</li>
            <li>Depositar</li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
