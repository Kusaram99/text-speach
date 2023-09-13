import React from "react";
import Nav from "./components/nav/Nav";
import GeneratorBox from "./components/sections/generatorbox/GeneratorBox";
import TextToVoiceProvider from "./components/sections/TextToVoiceProvider";

function App() {
  return (
    <>
      <TextToVoiceProvider>
        <Nav />
        <GeneratorBox />
      </TextToVoiceProvider>
    </>
  );
}

export default App;
