import Image from 'next/image';
import Logo from '@/assets/mobi-logo.png';

export default function Footer() {
  return (
    <div className="w-full h-auto bg-[#1A1A1A] flex flex-col items-center justify-center gap-5 text-white pt-5">
      <Image src={Logo} alt="logo" width={50} height={50} />
      <hr className="w-[90%] border-[#0980B4]" />
      <div className="p-5">{/* information here */}</div>
      <div className="w-full h-[4rem] flex items-center justify-center text-sm font-semibold bg-black">
        <p>MobiBank Pagamentos 2023 - Instituição de Pagamento</p>
      </div>
    </div>
  );
}
