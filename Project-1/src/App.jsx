import "./App.css";
import HeroSection from "./components/Hero";
import Navigation from "./components/Navigation";
const App = () => {
  // when we write any function name in capital etter then it becomw component in react.
  return (
    <div>
      <Navigation />
      <HeroSection />
    </div>
  );
};

export default App;
