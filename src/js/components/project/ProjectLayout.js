import React from "react";
import Contact from "../Contact";
import Nav from "../Nav";

/**
 * Provides the shared frame used by project pages: fixed navigation, page content, and contact row.
 */
const ProjectLayout = ({ children }) => (
  <>
    <Nav />
    {children}
    <Contact />
  </>
);

export default ProjectLayout;
