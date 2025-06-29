import BestSeller from "../Components/BestSeller";
import Hero from "../Components/Hero";
import LatestCollections from "../Components/LatestCollections";
import OurPolicy from "../Components/OurPolicy";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <BestSeller />
      <OurPolicy />
    </div>
  );
};

export default Home;
