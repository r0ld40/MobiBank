import Verified from "@/assets/verified";
import Button from "@/components/button";
import Card from "@/components/card";

const Cards = [
  { id: 1, text: 'Altere seu limite' },
  { id: 2, text: 'Rendimento de 104% (CDI)' },
  { id: 3, text: '100% mobile banking' },
  { id: 4, text: 'lorem' },
]

export default function CardDiv() {
  return(
    <div className="h-fit flex justify-between gap-5 px-[400px]">
      <div className="flex flex-col gap-12">
        <p className="font-semibold text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <div className="grid md:grid-cols-2 gap-2">
          {Cards.map((card) => (
            <div key={card.id} className="flex gap-2 items-center">
              <Verified color="#4FACFE" />
              <p>{card.text}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          <Button className="bg-black text-white border-2 border-black">Reservar Cartão</Button>
          <Button className="border-2 border-black bg-white text-black hover:bg-[#000000] hover:text-white">Saber Mais</Button>
        </div>
      </div>
      <div className="flex items-center">
        <div className="shadow-2xl shadow-[#4FACFE]">
          <Card />
        </div>
      </div>
    </div>
  )
}
