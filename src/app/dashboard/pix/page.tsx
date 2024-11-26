import Arrow from '@/assets/arrow';
import Copy from '@/assets/copy';
import CollectDept from '@/assets/dept';
import Pix from '@/assets/pix';
import Receive from '@/assets/receive';
import Link from 'next/link';

export default function PixPage() {
  return (
    <div className="w-[58rem] h-fit flex flex-col gap-5 items-center border-2 p-5 rounded-lg bg-white">
      <h2 className="w-full font-semibold text-3xl">Pix</h2>
      <p className="w-full opacity-70 text-sm">Formas de envio e recebimento</p>
      <div className="w-full flex flex-col gap-5">
        <h2 className="w-full font-semibold text-2xl">Enviar</h2>
        <div className="w-full flex gap-12">
          <div className="w-fit flex flex-col items-center gap-2">
            <Link
              href={'/dashboard/pix/QRCode'}
              className="w-fit p-5 flex justify-center items-center rounded-lg bg-[#F0F8FF] hover:bg-black hover:bg-opacity-20 transition"
            >
              <Pix fill="#000000" width={50} height={50} />
            </Link>
            <p>Transferência</p>
          </div>
          <div className="w-fit flex flex-col items-center gap-2">
            <Link
              href={'/dashboard/pix/QRCode'}
              className="w-fit p-5 flex justify-center items-center rounded-lg bg-[#F0F8FF] hover:bg-black hover:bg-opacity-20 transition"
            >
              <Copy color="#000000" size={50} />
            </Link>
            <p>Pix copia e cola</p>
          </div>
        </div>
        <hr />
        <h2 className="w-full font-semibold text-2xl">Receber</h2>
        <div className="w-full flex gap-12">
          <div className="w-fit flex flex-col items-center gap-2">
            <Link
              href={'/dashboard/pix/QRCode'}
              className="w-fit p-5 flex justify-center items-center rounded-lg bg-[#F0F8FF] hover:bg-black hover:bg-opacity-20 transition"
            >
              <CollectDept color="#000000" size={50} />
            </Link>
            <p>Cobrar</p>
          </div>
          <div className="w-fit flex flex-col items-center gap-2">
            <Link
              href={'/dashboard/pix/QRCode'}
              className="w-fit p-5 flex justify-center items-center rounded-lg bg-[#F0F8FF] hover:bg-black hover:bg-opacity-20 transition"
            >
              <Receive stroke="#000000" width={50} height={50} />
            </Link>
            <p>Depositar</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <hr className="w-[20rem] border-2 border-dashed" />
        <Link href={'/dashboard/pix/QRCode'} className="w-fit flex gap-10 justify-between items-center">
          <div className="w-[20rem]">
            <h2 className="w-full font-semibold text-2xl">Registro de chaves</h2>
            <p className="w-full opacity-70 text-sm">Registre novas chaves ou faça uma portabilidade</p>
          </div>
          <Arrow color="#000000" size={35} />
        </Link>
        <hr className="w-[20rem] border-2 border-dashed" />
        <Link href={'/dashboard/pix/QRCode'} className="w-fit flex gap-10 justify-between items-center">
          <div className="w-[20rem]">
            <h2 className="w-full font-semibold text-2xl">Configurar Pix</h2>
            <p className="w-full opacity-70 text-sm">Altere seu limite diário de transferências ou suas chaves pix</p>
          </div>
          <Arrow color="#000000" size={35} />
        </Link>
      </div>
    </div>
  );
}
