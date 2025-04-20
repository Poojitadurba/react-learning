import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import JSXRules from "./components/JSXRules";
import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";
import Lists from "./components/Lists";
import UserList from "./components/UserList";
const App = () => {
  return (
    <section>
      <Header />
      <Main />
      <Footer />
      <JSXRules />
      <Greeting />
      <ProductInfo />
      <Lists />
      <UserList />
    </section>
  );
};

export default App;
