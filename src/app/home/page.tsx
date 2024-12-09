import Banner from "./banner";
import Benefits from "./benefits";
import Card from "./card-div";
import Kids from "./kids";
import Services from "./services";

export default function Home() {
  return(
    <div>
      <Banner />
      <div className="p-8">
        <Card />
      </div>
      <Services />
      <Kids />
      <Benefits />
    </div>
  );
}
