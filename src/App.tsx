import React from "react";
import Head from "./components/Head";
import Button from "./components/Button";
import Input from "./components/Input";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Head title="Now with type support!" isActive={true}></Head>
        <Input />
        <Button
          onClick={e => {
            e.preventDefault();
            console.log(e);
          }}
        >
          {/* <div>
            <h3>THIS IS BAD PRACTICE BUT THIS WORKS BC IT'S A CHILD</h3>
          </div> */}
          Robust Button Text
        </Button>
      </header>
    </div>
  );
};

export default App;
