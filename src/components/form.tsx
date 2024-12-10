import Button from './button';

export default function Form() {
  return (
    <form action="" className="w-[25rem] h-[25rem] flex flex-col justify-between bg-black p-4 rounded-xl">
      <div className="flex flex-col">
        <label htmlFor="name" className="text-[#00F2FE] text-sm">
          Nome Completo
        </label>
        <input id="name" type="text" className="bg-transparent p-1 border-[#4FACFE] border-b-[1px] outline-none" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-[#00F2FE] text-sm">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          placeholder="seu-email@exemplo.com"
          className="bg-transparent p-1 border-[#4FACFE] border-b-[1px] outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="cpf" className="text-[#00F2FE] text-sm">
          CPF
        </label>
        <input
          id="cpf"
          type="text"
          placeholder="xxx-xxx-xxx-xx"
          className="bg-transparent p-1 border-[#4FACFE] border-b-[1px] outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="whatsapp" className="text-[#00F2FE] text-sm">
          WhatsApp
        </label>
        <input
          id="whatsapp"
          type="text"
          placeholder="(xx) xxxxx-xxxx"
          className="bg-transparent p-1 border-[#4FACFE] border-b-[1px] outline-none"
        />
      </div>
      <Button>Enviar</Button>
      <span className="text-[#C4C4C4] text-sm">Ao enviar, você está permitindo que o Mobibank entre em contato</span>
    </form>
  );
}
