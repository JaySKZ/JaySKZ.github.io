import "./footer.css";

function Footer() {
  return (
    <div>
      <hr class="dashed" />
      <p class="links">
        <a
          href="https://www.linkedin.com/in/jskzhou/"
          target="_blank"
          class="fa fa-linkedin fa-lg"
        ></a>
        <a
          href="https://github.com/JaySKZ"
          target="_blank"
          class="fa fa-github fa-lg"
        >
          {" "}
        </a>
        {/* <a
          href="https://twitter.com/qvinnh"
          target="_blank"
          class="fa fa-twitter fa-lg"
        >
          {" "}
        </a> */}
        <a
          href="https://www.instagram.com/jasonzhou11/"
          target="_blank"
          class="fa fa-instagram fa-lg"
        >
          {" "}
        </a>
        {/* <a
          href="https://sesamebagel.substack.com/"
          target="_blank"
          class="fa fa-bookmark fa-lg"
        >
          {" "}
        </a> */}
      </p>
      {/* <p class="credit_p">
        inspired by{" "}
        <a
          href="https://www.tiffanywang.me/"
          target="_blank"
          class="credit"
        >
          tiffany
        </a>
      </p> */}
    </div>
  );
}

export default Footer;
