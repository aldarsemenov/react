import logo from './logo.svg';
import './App.css';

function App() {

  let menu2 = [

    {
      name: "Поджарка",
      ing: [
        "potato",
        "farsh",
        "onion"
      ],
      cost: 150

    },
    {
      name: "Лагман",
      ing: [
        "makaron",
        "potato",
        "beef"
      ],
      cost: 200
    },
    {
      name: "Пицца",
      ing: [
        "cheese",
        "chicken",
        "onion",
        "testo"
      ],
      cost: 300
    },
    {
      name: "Овощной салат",
      ing: [
        "tomato",
        "cucumber"
      ],
      cost: 60
    },
    {
      name: "Капустные котлеты",
      ing: [
        "cabbage",
        "onion"
      ],
      cost: 90
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        {menu2.map((item) => (
          <h1> Наименование : {item.name}  <br></br>  Цена = { item.cost} </h1>
          
        ))}

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
