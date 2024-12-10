interface ButtonProps {
  children: string;
  className?: string;
  back?: string;
  text?: string;
}

export default function Button({
  children,
  className = 'p-2 px-6 rounded-full',
  back = 'bg-[#4FACFE]',
  text = 'text-white hover:bg-white hover:text-black',
}: ButtonProps) {
  return <button className={`${back} ${text} font-semibold transition ${className}`}>{children}</button>;
}
