import ChartComponent from './chart';

export default function OverChart() {
  return (
    <div className="w-full h-fit flex flex-col gap-5 items-center border-2 p-5 rounded-lg bg-white">
      <div className="w-[1000px] h-[500px]">
        <ChartComponent />
      </div>
    </div>
  );
}
