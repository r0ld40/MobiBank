interface ButtonProps {
  children: string
  className?: string
}

export default function Button({children, className}: ButtonProps) {
  return <button className={`bg-[#4FACFE] p-2 px-6 rounded-full font-semibold text-white hover:bg-white hover:text-black transition ${className}`}>{children}</button>
}
