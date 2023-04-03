import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Projects() {
  useEffect(() => {
    document.title = "jason's projects";
  }, []);

  return (
    <div>
      <p>
        some projects I've been a part of, please reach out for for information!
      </p>
      <hr class="dashed" />
      <p>
        <NavLink to="/drones" class="clickable">
          <u>
            <b>Autonomous drone builds</b>
          </u>
        </NavLink>{" "}
        <br />
        watch me try to fly things and hope they don't fall
      </p>
      {/* <p>
        <NavLink to="/" class="clickable">
          <u>
            <b>personal website</b>
          </u>
        </NavLink>{" "}
        <br />
        what you're looking at right now :)
      </p> */}
      <p>
        <a
          href="https://github.com/JaySKZ/2021CitadelDataOpenFinals"
          class="clickable"
          target="_blank"
        >
          <b>2021 Citadel Global Data Open</b>
        </a>{" "}
        <br />3rd place of the 2021 Citadel Data Open grand finals!
      </p>
      <p>
        <a
          href="https://github.com/JaySKZ/2021CitadelSpringDataOpen"
          class="clickable"
          target="_blank"
        >
          <b>2021 Citadel West Coast Data Open</b>
        </a>{" "}
        <br />
        winners of the 2021 Citadel West Coast Data Open, and $10,000!
      </p>
      <p>
        <NavLink to="/robotsummer" class="clickable">
          <u>
            <b>Ramenboi</b>
          </u>
        </NavLink>{" "}
        <br />
        an autonomous robot we spent 200+ hours building over a summer for school
      </p>
      <p>
        <a
          href="https://github.com/JaySKZ/StonkBot"
          class="clickable"
          target="_blank"
        >
          <b>StonkBot</b>
        </a>{" "}
        <br />
        public version of my stock indicator bot that reminds me to stop making bad trades
      </p>
      <p>
        <a
          href="https://github.com/JaySKZ/FantasyBaseball"
          class="clickable"
          target="_blank"
        >
          <b>Fantasy Baseball draft picker</b>
        </a>{" "}
        <br />
        picks fantasy team based on projected z-score, is the reason my friends' league no longer allows bots
      </p>
      <p>
        <i>(this page is a work in progress, details will be continually updated!)</i>
      </p>
    </div>
  );
}

export default Projects;
