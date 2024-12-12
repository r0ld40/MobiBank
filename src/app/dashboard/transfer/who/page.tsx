'use client';

import Arrow from '@/assets/arrow';
import Link from 'next/link';

export default function Who() {
  return (
    <div className="w-[58rem] h-[45rem] flex flex-col gap-5 justify-between items-center border-2 p-5 rounded-lg bg-white">
      <div className="w-full flex flex-col gap-5 items-center">
        <Link href={'/dashboard/transfer'} className="w-full flex gap-2 items-center">
          <Arrow color="#000000" size={20} rotate={180} />
          <h2 className="w-fit font-semibold text-lg">Transferência</h2>
        </Link>
        <div className="w-full flex flex-col gap-5">
          <h2 className="font-semibold text-3xl">Quem é o favorecido?</h2>
          <div className="w-full p-5 flex flex-col gap-5 text-2xl font-bold">
            <Link
              href={'/dashboard/transfer/bank'}
              className="hover:opacity-60 transition flex items-center justify-between"
            >
              <div className="flex items-center gap-4">Eu</div>
              <div>
                <Arrow color="#000000" />
              </div>
            </Link>
            <hr className="border-2 border-[#B4B4B4] border-dashed" />
            <Link
              href={'/dashboard/transfer/bank'}
              className="hover:opacity-60 transition flex items-center justify-between"
            >
              <div className="flex items-center gap-4">Outra pessoa</div>
              <div>
                <Arrow color="#000000" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
