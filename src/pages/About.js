import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "jason's life";
  }, []);

  return (
    <div>
      <img src="/me.jpg" alt="getting the iron ring!" width="300" height="auto" />

      <hr class="dashed" />

      <p>
        hi, glad you came to visit and I'm happy to meet you!
        
        i'm a tech lover, i dabble in finance, and i'm usually overly caffeinated
        as a result my hobby of working really well at 3am. i'm a serial adventurer
        and thrill seeker who loves excitement and novelty. i have an extensive 
        history of competitive sports, and as a result an overflow of energy almost always.
        i believe that the purpose of life lies in the challenge and the exploration,
        and i will forever be chasing that!
      </p>

      <p> </p>

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

      <p> </p>

      <p>
        <b>previously</b>
      </p>
      <p>did some incredible internships:</p>
      <ul>
        <li>
          integrating steering software at
          <a
            href="https://www.tesla.com/"
            class="clickable"
            target="_blank"
          >
            Tesla
          </a>
          which included limit driving in the coolest cars
        </li>
        <li>
          helped build predictive agriculture algorithms for
          <a
            href="https://www.verdiag.com/"
            class="clickable"
            target="_blank"
          >
            Verdi AG
          </a>
        </li>
        <li>
          design electronics for next-gen ultrasound transducers at
          <a
            href="https://sonusmicrosystems.com/"
            class="clickable"
            target="_blank"
          >
            Sonus Microsystems
          </a>
        </li>
        <li>
          wrote control code and designed electronics at 
          <a
            href="https://www.precisionnanosystems.com/"
            class="clickable"
            target="_blank"
          >
            PNI
          </a>
          which ended up in mRNA vaccine producing machines!
        </li>
      </ul>
      <p></p>
      <p>and did some non-technical gigs:</p>
      <ul>
        <li>
          sold thousands of awesome apparel across campus as the first
          Canadian campus manager of
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
