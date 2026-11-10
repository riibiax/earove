import { projectPath } from "./sitePaths";

export const homeRoute = { path: "/", load: () => import("./components/HomePage") };

const projectRoutes = [
  ["/evoka", () => import("./components/EvokaPage")],
  ["/ant", () => import("./components/AntPage")],
  ["/kf", () => import("./components/KfPage")],
  ["/ecole42", () => import("./components/Ecole42Page")],
  ["/aef", () => import("./components/AefPage")],
  ["/ansharonline", () => import("./components/AnsharonlinePage")],
  ["/baudata", () => import("./components/BaudataPage")],
  ["/bmeia", () => import("./components/BmeiaPage")],
  ["/deathlap", () => import("./components/DeathLapPage")],
  ["/doka", () => import("./components/DokaPage")],
  ["/eames", () => import("./components/EamesPage")],
  ["/fireplace", () => import("./components/FireplacePage")],
  ["/lightscape", () => import("./components/LightscapePage")],
  ["/machine", () => import("./components/MachinePage")],
  ["/metec", () => import("./components/MetecPage")],
  ["/mons", () => import("./components/MonsPage")],
  ["/onceUponATale", () => import("./components/OnceUponATalePage")],
  ["/saltmine", () => import("./components/SaltminePage")],
  ["/skater", () => import("./components/SkaterPage")],
  ["/spinny", () => import("./components/SpinnyPage")],
  ["/spymuseum", () => import("./components/SpymuseumPage")],
  ["/tabakFabrik", () => import("./components/TabakFabricPage")],
  ["/vaudoise", () => import("./components/VaudoisePage")],
];

export const pageRoutes = [homeRoute, ...projectRoutes.map(([project, load]) => ({
  project, path: projectPath(project), load,
}))];

export function findPage(path) {
  const route = path.replace(/\/(?:index\.html)?$/i, "").toLowerCase();
  if (!route) return homeRoute;
  return pageRoutes.find(({ project, path }) =>
    route === project?.toLowerCase() || `${route}/` === path);
}
