import React from "react";
import Head from "./components/Head";
import Button from "./components/Button";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Head title="Now with type support!" isActive={true}></Head>
        <Button
          onClick={value => {
            console.log(value);
          }}
          text="From props"
        />
      </header>
    </div>
  );
};

export default App;
