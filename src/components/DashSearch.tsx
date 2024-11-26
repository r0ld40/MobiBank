import Search from '@/assets/search';

const info = [
  {
    id: 1,
    name: 'João da Silva',
  },
];

export default function DashSearch() {
  return (
    <div className="w-full h-fit flex justify-between gap-5 bg-transparent p-5">
      <div className="flex gap-5 items-center">
        <div className="w-10 h-10 rounded-full bg-black"></div>
        <p className="font-semibold text-xl">Ola, {info[0].name}</p>
      </div>
      <div className="relative w-fit h-fit">
        <input
          type="text"
          placeholder="Pesquisar"
          className="w-[360px] h-10 p-4 rounded-full outline-none focus:bg-black focus:bg-opacity-10 transition border-2 bg-[#F6F6F6]"
        />
        <button className="absolute right-5 top-2">
          <Search width={20} stroke="#7F7F7F" />
        </button>
      </div>
    </div>
  );
}
