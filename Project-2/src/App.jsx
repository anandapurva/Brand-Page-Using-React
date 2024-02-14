import "./App.css";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Form from "./components/Form/Form";
import Navigation from "./components/Navigation/Navigation";
const App = () => {
  // when we write any function name in capital etter then it becomw component in react.
  return (
    <div>
      <Navigation />
      <div className="main_container">
        <ContactHeader />
        <Form />
      </div>
    </div>
  );
};

export default App;
