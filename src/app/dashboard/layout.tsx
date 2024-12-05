import Aside from '@/components/AsideDash';
import DashSearch from '@/components/DashSearch';

export default function RootDash({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div suppressHydrationWarning={true} className="flex bg-[#FBFBFB] overflow-hidden">
      <Aside />
      <main className="w-full flex flex-col items-center p-3">
        <DashSearch />
        {children}
      </main>
    </div>
  );
}
