'use client';

import OverChart from './over-chart';
import OverLast from './over-last';
import CardClient from './over-walet';

export default function OverView() {
  return (
    <div className="w-full h-fit flex gap-3 overflow-x-hidden">
      <CardClient />
      <div className="w-full h-fit flex flex-col gap-3">
        <OverChart />
        <OverLast />
      </div>
    </div>
  );
}
