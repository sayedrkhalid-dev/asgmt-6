import Banner from "../components/Banner/Banner";
import Stats from "../components/Stats/Stats";
import Pricing from "./Pricing";
import Products from "./Products";

const Home = ({ productsPromise, pricesPromise }) => {
  return (
    <>
      <Banner />
      <Stats />
      <Products productsPromise={productsPromise} />
      <Pricing pricesPromise={pricesPromise} />
    </>
  );
};

export default Home;
