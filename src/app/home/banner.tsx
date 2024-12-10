import Image from 'next/image';
import BannerImage from '@/assets/banner-image.png';
import Button from '@/components/button';

export default function Banner() {
  return (
    <div className="w-full h-[40rem] bg-[#1A1A1A] flex items-center justify-center gap-12 p-16">
      <div className="max-w-[30rem] flex flex-col gap-8 text-white font-semibold">
        <h1 className="text-4xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        <h2>Ut enim ad minim veniam, quis nostrud exercitation ullamco </h2>
        <Button className="rounded-lg py-4">LOREM IPSUM</Button>
      </div>
      <Image src={BannerImage} alt="banner" width={500} height={500} />
    </div>
  );
}
