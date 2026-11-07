import React from "react";
import ProjectCaseStudy from "./project/ProjectCaseStudy";
import TabakFabrikPlayer from "./project/TabakFabrikPlayer";
import tabakFabrikCaseStudy from "../content/tabakFabrikCaseStudy";

export default function TabakFabricPage() {
  return (
    <ProjectCaseStudy project={tabakFabrikCaseStudy}>
      <TabakFabrikPlayer />
    </ProjectCaseStudy>
  );
}
