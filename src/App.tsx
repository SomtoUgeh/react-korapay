import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useKorapay from "lib/useKorapay";

function App() {
  const [initialKora] = useKorapay({
    key: "",
    amount: 10,
    customer: {
      name: "Somto",
      email: "smugeh@gmail.com"
    },
    narration: "Testing korapay react-wrapper"
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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

      <section>
        <h1>Testing Korapay react-wrapper</h1>
        <div>
          <button
            onClick={() => {
              initialKora({
                onClose: () => null,
                onSuccess: (res: any) => console.log(res)
              });
            }}
          >
            Test payment now!
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
