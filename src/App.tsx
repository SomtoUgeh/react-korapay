import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useKorapay, KorapayButton } from "lib";

const korapayConfig = {
  public_key: "pk_test_**your_public_key**",
  amount: 2000,
  customer: {
    name: "John Doe",
    email: "johnDoe@gmail.com"
  },
  narration: "Testing korapay react-wrapper"
};

function App() {
  const korapayBtnConfig = {
    ...korapayConfig,
    onSuccess: () => null
  };

  const [initialKorapay] = useKorapay(korapayConfig);

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
                initialKorapay({
                  onClose: () => null,
                  onSuccess: () => null
                });
              }}
            >
              Test payment now!
            </button>

            <KorapayButton {...korapayBtnConfig}>
              Testing Korapay btn, Pay now!
            </KorapayButton>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
