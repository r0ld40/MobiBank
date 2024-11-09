import Aside from '@/components/common/AsideDash';

export default function RootDash({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div suppressHydrationWarning={true}>
      <main className="flex gap-5">
        <Aside />
        {children}
      </main>
    </div>
  );
}
