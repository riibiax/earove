import React from "react";
import Contact from "../Contact";
import Nav from "../Nav";

const ProjectLayout = ({ children }) => (
  <>
    <Nav />
    {children}
    <Contact />
  </>
);

export default ProjectLayout;
