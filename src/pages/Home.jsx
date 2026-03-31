import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Stats from "../components/Stats/Stats";
import Workflow from "../components/Workflow/Workflow";
import Pricing from "./Pricing";
import Products from "./Products";

const Home = ({ productsPromise, pricesPromise }) => {
  return (
    <>
      <Banner />
      <Stats />
      <Products productsPromise={productsPromise} />
      <Pricing pricesPromise={pricesPromise} />
      <Workflow />
      <Footer />
    </>
  );
};

export default Home;
