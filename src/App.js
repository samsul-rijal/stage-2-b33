import React from "react";
import Header from "./components/header";

// Create a new component here
const Content = () => {
  return (
    <div>
      <h2>Content Component</h2>
    </div>
  )
}

function App() {
  return (
    // Code Here
    <div>
      <Header />
      <p>Selamat datang</p>
      <Content />
    </div>
  );
}

export default App;