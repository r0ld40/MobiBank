import Logo from '@/assets/mobi-logo.png';
import Image from 'next/image';

export default function Card() {
  const numberCard = '0000 0000 0000 0000';
  const nameUser = 'João da Silva';
  const dataValid = '00/00';

  return(
    <div className="w-[338px] h-[213px] flex flex-col justify-between p-4 rounded-lg bg-black text-white">
      <div className="w-full flex justify-between">
        <Image src={Logo} alt="logo" width={55} />
        <p className="font-semibold text-2xl">Visa</p>
      </div>
      <div>{numberCard}</div>
      <div className="w-full flex justify-between">
        <p>{nameUser}</p>
        <p>{dataValid}</p>
      </div>
    </div>
  )
}
