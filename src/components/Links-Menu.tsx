import Group from '@/assets/group';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Pix from '@/assets/pix';
import Payments from '@/assets/payments';
import Cel from '@/assets/cel';
import Pay from '@/assets/pay';
import Receive from '@/assets/receive';

export default function Links({
  text,
  link,
  iconName,
  WebRoute,
  first = false,
}: {
  WebRoute: string;
  text: string;
  link: string;
  iconName: string;
  first?: boolean;
}) {
  const route = usePathname();

  const renderIcon = ({ iconName }: { iconName: string }) => {
    switch (iconName) {
      case 'Group':
        return <Group fill={`${route === '/dashboard/overview' || route === '/dashboard' ? '#ffffff' : '#0980B4'}`} />;
      case 'Pix':
        return <Pix fill={`${route === '/dashboard/pix' ? '#ffffff' : '#0980B4'}`} />;
      case 'Payments':
        return <Payments fill={`${route === '/dashboard/payments' ? '#ffffff' : '#0980B4'}`} />;
      case 'Cel':
        return <Cel fill={`${route === '/dashboard/cel' ? '#ffffff' : '#0980B4'}`} />;
      case 'Pay':
        return <Pay stroke={`${route === '/dashboard/transfer' ? '#ffffff' : '#0980B4'}`} />;
      case 'Receive':
        return <Receive stroke={`${route === '/dashboard/receive' ? '#ffffff' : '#0980B4'}`} />;
      default:
        return null;
    }
  };

  return (
    <Link href={link}>
      <li
        className={`flex gap-3 items-center hover:bg-[#888888] hover:text-white transition cursor-pointer p-2 rounded-full ${first ? 'bg-[#0980B4] text-white font-bold' : ''} ${route === WebRoute ? 'bg-[#0980B4] text-white font-bold' : 'text-[#888888]'}`}
      >
        {renderIcon({ iconName: iconName })}
        {text}
      </li>
    </Link>
  );
}
