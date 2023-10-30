import "./reset.css";
import "./main.css";

import Banner from "./Sections/Banner";
import About from "./Sections/About";
import How from "./Sections/How";
import Why from "./Sections/Why";
import QAndA from "./Sections/QAndA";
import Rescheduling from "./Sections/Rescheduling";
import CallBack from "./Sections/CallBack";

function App() {
  return (
    <>
      <Banner></Banner>
      <About></About>
      <How></How>
      <Why></Why>
      <QAndA></QAndA>
      <Rescheduling />
      <CallBack />
    </>
  );
}

export default App;
