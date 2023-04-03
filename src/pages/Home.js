import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const hobbies = [
  "training Muay Thai",
  "being dragged on difficult hikes by my friends",
  "trying to survive the stock market",
  "working on and flying my drones",
  "finding twisty roads to drive",
  "sabre fencing",
  "overanalyzing fantasy baseball",
  "chasing sunsets",
  "surfing in Tofino"
];

// const space = [
//   "corner",
//   "fragment",
//   "sliver",
//   "pocket",
//   "section",
//   "node",
//   "slice",
//   "shard",
//   "bit",
//   "piece",
//   "string",
// ];

function useWordCycle(words) {
  const [currentWord, setCurrentWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );

  const handleClick = () => {
    const currentIndex = words.indexOf(currentWord);
    const nextIndex = (currentIndex + 1) % words.length;
    setCurrentWord(words[nextIndex]);
  };

  return [currentWord, handleClick];
}

function Home() {
  useEffect(() => {
    document.title = "jason's home";
  }, []);

  const [currentHobby, handleHobbyClick] = useWordCycle(hobbies);
  // const [currentSpace, handleSpaceClick] = useWordCycle(space);

  return (
    <div>
      <h2>hi, i'm jason!</h2>
      <p>
        welcome to my little nook of the internet!
      </p>
      <p>
        i'm a student at the University of British Columbia in beautiful Vancouver, Canada, 
        where i'm finishing up my degree in Engineering Physics and specializing in controls.
        When i'm not massively lost in theoretical physics, you can most likely find me{" "}
        <a class="clickable" id="hobbies" onClick={handleHobbyClick}>
          {currentHobby}
        </a>
        .
      </p>
      <p>
        i'm always down for an interesting conversation, reach out to 
        me any time at{" "}
        <a href="mailto:jasonzhou0404@gmail.com" class="clickable">
          jasonzhou0404@gmail.com
        </a>
      </p>
    </div>
  );
}

export default Home;
