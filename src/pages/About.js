import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "jason's life";
  }, []);

  return (
    <div>
      <img src="/me.jpg" alt="adventurin!" width="300" height="auto" />

      <hr class="dashed" />

      <p>
        hi, glad you came to visit!
        
        i'm a tech lover, i dabble in finance, and i'm usually overly caffeinated
        as a result my brain peaking at 3am.
      </p>

      <p> </p>

      <p>
        <b>currently</b>
      </p>
      <p>
        i'm in the first year of my master's at {" "}
        <a href="https://www.aa.washington.edu/" target="_blank" class="clickable">
          the department of aeronautics and astronautics at the university of washington
        </a>
        ,specializing in controls. my research focuses on the design of robust controllers
        for quadcopters in complex aerodynamic conditions, and efficient trajectory optimization
        algorithms for drone swarms. 
        <br />
        <br />
        my interest is spurred by my belief in the possibilites that drones and uavs can unlock, and 
        that robust and trustworthy controls is the main facilitator of this technology.
        {/* <br />
        <br />
        i will be graduating in May, and i'm actively seeking full-time or temporary software
        integration, validation, or similar roles! */}
      </p>

      <p> </p>

      {/* <p> </p>

      <p>
        <b>currently</b>
      </p>
      <p>
        i'm in my final semester of{" "}
        <a href="https://www.engphys.ubc.ca/" target="_blank" class="clickable">
          Engineering Physics at UBC
        </a>
        ,currently taking coursework in stat mech and advanced optics, while building
        a wirelessly powered drone for my senior capstone.
        <br />
        <br />
        i'm interested in robotics, controls, and any area that includes coding, soldering,
        building and testing something physical and cool.
        <br />
        <br />
        i will be graduating in May, and i'm actively seeking full-time or temporary software
        integration, validation, or similar roles!
      </p>

      <p> </p> */}

      <p>
        <b>previously</b>
      </p>
      <p> i graduated with distinction from the {" "}
        <a href="https://www.engphys.ubc.ca/" target="_blank" class="clickable">
          department of engineering physics at ubc
        </a>
        ,where i took extensive coursework in mechatronics engineering, advanced physics,
        and advanced mathematics, as well as electives in algorithms, controls, and machine learning.
        I also was able to experience some incredible internships:</p>
      <ul>
        <li>
          integrating steering software at {" "}
          <a
            href="https://www.tesla.com/"
            class="clickable"
            target="_blank"
          >
            Tesla
          </a>
          , which included limit driving in the coolest cars
        </li>
        <li>
          helped build predictive agriculture algorithms for {" "}
          <a
            href="https://www.verdiag.com/"
            class="clickable"
            target="_blank"
          >
            Verdi AG
          </a>
        </li>
        <li>
          design electronics for next-gen ultrasound transducers at {" "}
          <a
            href="https://sonusmicrosystems.com/"
            class="clickable"
            target="_blank"
          >
            Sonus Microsystems
          </a>
        </li>
        <li>
          wrote control code and designed electronics at {" "}
          <a
            href="https://www.precisionnanosystems.com/"
            class="clickable"
            target="_blank"
          >
            PNI
          </a>
          , which ended up in mRNA vaccine producing machines!
        </li>
      </ul>
      <p></p>
      <p>and did some non-technical gigs:</p>
      <ul>
        <li>
          sold thousands of awesome apparel across campus as the first
          Canadian campus manager of {" "}
          <a
            href="https://www.freshprints.com/"
            target="_blank"
            class="clickable"
          >
            Fresh Prints
          </a>
        </li>
      </ul>
    </div>
  );
}

export default About;
