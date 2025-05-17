import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import JSXRules from "./components/JSXRules";
import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";
import Lists from "./components/Lists";
import UserList from "./components/UserList";
import Props from "./components/Props";
import Product from "./components/Product";
import Person from "./components/Person";
import Card from "./components/Card";
import Weather from "./components/Weather";
import UserStatusCheck from "./components/UserStatusCheck";
//import "./index.css";
import { FaCartArrowDown } from "react-icons/fa";
import StyleCard from "./components/StyleCard";
import ProfileCard from "./components/ProfileCard";
import IconComponent from "./components/IconComponent";
import ButtonEvents from "./components/ButtonEvents";

const App = () => {
  return (
    <section>
      <FaCartArrowDown />
      <Header />
      <Main />
      <Footer />
      <JSXRules />
      <Greeting />
      <ProductInfo />
      <Lists />
      <UserList />
      <Props name="Poojita Durba" />
      <Person name="Poojita Durba" age={22} />
      <Product name="Socks" price="$10" />
      <Card>
        <h1>Card Component 1</h1>
        <p>This is a card component.</p>
      </Card>
      <Card>
        <h1>Card Component 2</h1>
        <p>This is a card component.</p>
      </Card>
      <Weather temperature={10} styles />
      <Weather temperature={20} />
      <Weather temperature={30} />
      <UserStatusCheck loggedIn={true} />
      <UserStatusCheck loggedIn={false} />
      <Greeting timeOfDay={"morning"} />
      <Greeting timeOfDay={"afternoon"} />
      <StyleCard />
      <ProfileCard />
      <IconComponent />
      <ButtonEvents />
    </section>
  );
};

export default App;
