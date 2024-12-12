'use client';

import Banner from './banner';
import Benefits from './benefits';
import Card from './card-div';
import FormDiv from './formDiv';
import Kids from './kids';
import Services from './services';
import Time from './timeDiv';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Banner />
      <div className="w-full p-8">
        <Card />
      </div>
      <Services />
      <Kids />
      <Benefits />
      <FormDiv />
      <Time />
    </div>
  );
}
