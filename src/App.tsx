import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useKorapay from "lib/useKorapay";

function App() {
  const [initialKora] = useKorapay({
    key: "pk_test_e97f2034f2b37610ff2a2422f73c38f10c47dfa0",
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
      </header>
    </div>
  );
}

export default App;
