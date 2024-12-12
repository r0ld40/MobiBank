import Button from '@/components/button';
import TimerRel from '@/components/timer';

export default function Time() {
  return (
    <div className="w-full flex flex-col items-center justify-center p-16 gap-8">
      <h2 className="text-xl md:text-3xl font-bold">
        RECEBA A NOTIFICAÇÃO DE <strong className="text-[#4FACFE]">LANÇAMENTO</strong> NO SEU EMAIL
      </h2>
      <TimerRel tempoInicial={500000} />
      <Button className="w-[15rem] h-[4rem] p-2 px-6 rounded-lg border-2 border-[#4FACFE]">Saiba mais</Button>
    </div>
  );
}
