//import logo from './logo.svg';
import './App.css';
import List from "./components/List";
// import './src/components/Card';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className="header">
          <div className="header-inner">header</div>
        </header>

        <div className="content">
          <div className="container">
            <div className="content-inner">
              <h1 className="content-inner__title">Counters</h1>
              <p className="container-inner__subtitle">Cards</p>
              <div className="content-inner__cards cards-inner">
                <List />
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">footer</footer>
      </div>
    </div>
  );
}

export default App;