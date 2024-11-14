import Aside from '@/components/AsideDash';

export default function RootDash({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div suppressHydrationWarning={true} className="flex bg-[#FBFBFB]">
      <Aside />
      <main className='p-7'>
        {children}
      </main>
    </div>
  );
}
