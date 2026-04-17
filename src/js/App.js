import React from "react";
import { Suspense, lazy } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { initializeScroll } from "./utils/scroll";

const basename = process.env.REACT_APP_BASENAME || "/";
const HomePage = lazy(() => import("./components/HomePage"));

const routes = [
  ["/", HomePage],
  ["/index.html", HomePage],
  ["/kf", lazy(() => import("./components/KfPage"))],
  ["/ecole42", lazy(() => import("./components/Ecole42Page"))],
  ["/aef", lazy(() => import("./components/AefPage"))],
  ["/ansharonline", lazy(() => import("./components/AnsharonlinePage"))],
  ["/baudata", lazy(() => import("./components/BaudataPage"))],
  ["/bmeia", lazy(() => import("./components/BmeiaPage"))],
  ["/deathlap", lazy(() => import("./components/DeathLapPage"))],
  ["/doka", lazy(() => import("./components/DokaPage"))],
  ["/eames", lazy(() => import("./components/EamesPage"))],
  ["/fireplace", lazy(() => import("./components/FireplacePage"))],
  ["/lightscape", lazy(() => import("./components/LightscapePage"))],
  ["/machine", lazy(() => import("./components/MachinePage"))],
  ["/metec", lazy(() => import("./components/MetecPage"))],
  ["/mons", lazy(() => import("./components/MonsPage"))],
  ["/onceUponATale", lazy(() => import("./components/OnceUponATalePage"))],
  ["/saltmine", lazy(() => import("./components/SaltminePage"))],
  ["/skater", lazy(() => import("./components/SkaterPage"))],
  ["/spinny", lazy(() => import("./components/SpinnyPage"))],
  ["/spymuseum", lazy(() => import("./components/SpymuseumPage"))],
  ["/tabakFabrik", lazy(() => import("./components/TabakFabricPage"))],
  ["/vaudoise", lazy(() => import("./components/VaudoisePage"))],
];

const App = () => {
  React.useEffect(() => {
    initializeScroll();
  }, []);

  return (
    <Router basename={basename}>
      <Suspense fallback={null}>
        <Routes>
          {routes.map(([path, Page]) => (
            <Route key={path} path={path} element={<Page />} />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
};

createRoot(document.getElementById("root")).render(<App />);

export default App;
