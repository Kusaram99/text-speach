import React from "react";
import Nav from "./components/nav/Nav";
import GeneratorBox from "./components/sections/generatorbox/GeneratorBox";
import TextToVoiceProvider from "./components/sections/TextToVoiceProvider";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <TextToVoiceProvider>
        <Nav />
        <GeneratorBox />
        <Footer/>
      </TextToVoiceProvider>
    </>
  );
}

export default App;
