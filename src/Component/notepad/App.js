import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [block, setBlock] = React.useState(true);
  const Toggle = ()=>{
    setBlock(!block)
}

  return (
    <>
      <div className="main">
        <Header Toggle={Toggle}/>
        <Home block ={block}/>
      </div>
      <Footer />
    </>
  );
};

export default App;
