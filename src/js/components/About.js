import React from 'react';
import "../../css/about.css";

const About = () => {
  return (
    <section id="about" className="columnsContainer">
      <div className="leftColumn">
        <p className="titleParagraph">About</p>
        <p>I am a Creative Coder based in Lausanne, Switzerland, working at the intersection of technology, art, and design.</p>
        <p>My research and projects are focused on Computer Graphics, Virtual Reality, Kinetic-Light installations, A.I., and Web Art.</p>
        <p>Interested in Computational Design, I am collaborating on <a href="http://thebookofshaders.com/" target="_blank" rel="noopener noreferrer">the Book of Shaders</a>, an interactive guide through the abstract and complex universe of Fragment Shaders.</p>
        <p>Previously I worked for Ars Electronica in Linz, Austria, where we created engaging interactive media systems for festivals, museums, and public installations.</p>
        <p>Believing in local projects and in the power of sharing passions, I have founded three social groups in Lausanne:</p>
        <p>The "cinÃ©forum itinÃ©rant", a cycle of meetings in which a debate is followed by the screening of a film.</p>
        <p>The "brunch-drawing", a drawing group to create individually or together around a good brunch.</p>
        <p>The "literature cafÃ©", a monthly meeting to share impressions, thoughts, and insights after reading some Swiss books.</p>
        <p>I taught photography at the <a href="https://www.flickr.com/photos/espacemozaik/" target="_blank" rel="noopener noreferrer">Espace MozaÃ¯k</a>, helping migrants to integrate and to find creative ways to express themselves.</p>
      </div>
      <div className="rightColumn">
        <p className="titleParagraph">Education</p>
        <p>Masterâ€™s Degree in Interaction / Media Design, Haute Ecole dâ€™Art et de Design, Geneva, Switzerland.</p>
        <p>Masterâ€™s Degree in Computer Engineering, Swiss Federal Institute of Technology, Lausanne, and at the  University of Siena, Italy.</p>
        <p>Bachelorâ€™s Degree in Computer Engineering, Politecnico di Milano, Italy.</p>
        <p className="titleParagraph">Research</p>
        <p><a href="docs/the_domestication_of_kinetic_art.pdf">The Domestication of Kinetic Art</a>, 2014, Geneva, Switzerland.</p>
        <p className="titleParagraph">Download CV</p>
        <p> 
          <a href="docs/rovescalli_cv.pdf">English</a> - <a href="docs/rovescalli_cv_ita.pdf">Italiano</a> - <a href="docs/rovescalli_cv_fr.pdf">FranÃ§ais</a>
        </p>
      </div>
    </section>
  );
};

export default About;