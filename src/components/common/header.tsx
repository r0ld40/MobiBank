import Image from 'next/image';
import Logo from '@/assets/mobi-logo.png';
import Button from '../button';

export default function Header() {
  return (
    <div className="w-full h-[6rem] bg-[#1A1A1A] text-white p-2 flex items-center justify-center">
      <nav className="w-[75rem] h-full flex items-center justify-between">
        <Image src={Logo} alt="logo-image" />
        <ul className="flex gap-12 font-semibold">
          <li>Conta Digital</li>
          <li>Cartões</li>
          <li>A Mobi Bank</li>
          <li>Gateway</li>
        </ul>
        <Button>Entrar</Button>
      </nav>
    </div>
  );
}
