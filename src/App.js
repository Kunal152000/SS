import Card from "./components/Card";
import "./App.css";
import cardData from "./data";
const App = () => {
  return (
    <div className="cards">
      {cardData.map((cardData) => {
        return <Card cardData={cardData} />;
      })}
    </div>
  );
};

export default App;
