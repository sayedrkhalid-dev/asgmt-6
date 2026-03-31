import Banner from "../components/Banner/Banner";
import Stats from "../components/Stats/Stats";
import Products from "./Products";

const Home = ({ productsPromise }) => {
  return (
    <>
      <Banner />
      <Stats />
      <Products productsPromise={productsPromise} />
    </>
  );
};

export default Home;
