import Navbar from "../components/Navbar";
import Paynet from "../components/Card/Paynet";
import Card from "../components/Card";
import Header from "../components/Header";
import Content from "../components/Content";
import Ekonika from "../components/Ekonika";
import Head from "../components/Head";
import Ekonikas from "../components/Ekonikas";
import KidsItems from "../components/KidsItems";
import KidsProducts from "../components/KidsProducts";
import Footer from "../components/Footer";
// import Login from "./components/Login";

function Homepage() {
  return (
    <>
      <Navbar />
      <Header />
      <Card />
      <Head />
      {/* <Ekonika /> */}
      <Content />
      {/* <Ekonikas /> */}
      <KidsItems />
      <KidsProducts />
      <Paynet />
      <Footer />
    </>
  );
}

export default Homepage;
