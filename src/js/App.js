import React from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import HomePage from "./components/HomePage";
import KfPage from "./components/KfPage"; 
import Ecole42Page from "./components/Ecole42Page"; 
import AefPage from "./components/AefPage"; 
import AnsharonlinePage from "./components/AnsharonlinePage"; 
import BaudataPage from "./components/BaudataPage"; 
import BmeiaPage from "./components/BmeiaPage"; 
import DeathLapPage from "./components/DeathLapPage"; 
import DokaPage from "./components/DokaPage"; 
import EamesPage from "./components/EamesPage"; 
import FireplacePage from "./components/FireplacePage"; 
import LightscapePage from "./components/LightscapePage"; 
import MachinePage from "./components/MachinePage";
import MetecPage from "./components/MetecPage";
import MonsPage from "./components/MonsPage";
import OnceUponATalePage from "./components/OnceUponATalePage";
import SaltminePage from "./components/SaltminePage";
import SkaterPage from "./components/SkaterPage";
import SpinnyPage from "./components/SpinnyPage";
import SpymuseumPage from "./components/SpymuseumPage";
import TabakFabrikPage from "./components/TabakFabricPage";
import VaudoisePage from "./components/VaudoisePage";
import { initializeScroll } from "./utils/scroll";

const basename = process.env.REACT_APP_BASENAME || "/";

const App = () => {
  React.useEffect(() => {
    initializeScroll();
  }, []);

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/index.html" element={<HomePage />} />
        <Route path="/kf" element={<KfPage />} />
        <Route path="/ecole42" element={<Ecole42Page />} />
        <Route path="/aef" element={<AefPage />} />
        <Route path="/ansharonline" element={<AnsharonlinePage />} />
        <Route path="/baudata" element={<BaudataPage />} />
        <Route path="/bmeia" element={<BmeiaPage />} />
        <Route path="/deathlap" element={<DeathLapPage />} />
        <Route path="/doka" element={<DokaPage />} />
        <Route path="/eames" element={<EamesPage />} />
        <Route path="/fireplace" element={<FireplacePage />} />
        <Route path="/lightscape" element={<LightscapePage />} />
        <Route path="/machine" element={<MachinePage />} />
        <Route path="/metec" element={<MetecPage />} />
        <Route path="/mons" element={<MonsPage />} />
        <Route path="/onceUponATale" element={<OnceUponATalePage />} />
        <Route path="/saltmine" element={<SaltminePage />} />
        <Route path="/skater" element={<SkaterPage />} />
        <Route path="/spinny" element={<SpinnyPage />} />
        <Route path="/spymuseum" element={<SpymuseumPage />} />
        <Route path="/tabakFabrik" element={<TabakFabrikPage />} />
        <Route path="/vaudoise" element={<VaudoisePage />} />
      </Routes>
    </Router>
  );
};

createRoot(document.getElementById("root")).render(<App />);

export default App;
