import React from "react";
import Head from "./components/Head";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Head title="Now with type support!" isActive={true}></Head>
      </header>
    </div>
  );
};

export default App;
