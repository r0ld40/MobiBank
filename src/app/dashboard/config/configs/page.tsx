'use client';

import Arrow from '@/assets/arrow';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="w-fit h-[45rem] flex flex-col gap-5 justify-between items-center border-2 p-5 rounded-lg bg-white">
      <div className="w-full flex flex-col gap-5 items-center">
        <Link href={'/dashboard/config'} className="w-full flex gap-2 items-center">
          <Arrow color="#000000" size={20} rotate={180} />
          <h2 className="w-fit font-semibold text-lg">Configurações</h2>
        </Link>
      </div>
    </div>
  );
}
