import Button from '@/components/button';
import Image from 'next/image';
import KidsImage from '@/assets/kids-image.png';

export default function Kids() {
  return (
    <div className="bg-[#1A1A1A] text-white flex justify-center items-center gap-[250px] p-16">
      <div className="max-w-[50rem] flex flex-col gap-5 p-5">
        <h2 className="text-4xl font-semibold">A primeira conta para o seu filho(a)!</h2>
        <p className="text-sm text-[#ABABB9]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
        </p>
        <Button className="w-fit px-12 py-5 rounded-lg">Saiba mais</Button>
      </div>
      <div>
        <Image src={KidsImage} alt="kids" width={400} height={400} />
      </div>
    </div>
  );
}
