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
          onClick={e => {
            e.preventDefault();
            console.log(e);
          }}
          text="Button Text"
        />
      </header>
    </div>
  );
};

export default App;
