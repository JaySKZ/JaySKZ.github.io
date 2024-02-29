import { useState, useEffect } from "react";

function Resume() {
  useEffect(() => {
    document.title = "jason's resume";
  }, []);

  return (
    <div>
      <p>here's my resume!</p>
      <hr class="dashed" />

      <iframe
        src="https://drive.google.com/file/d/14Hn5vuS4j-cDcd9Lx28-W_wnJmRRtKr7/view?usp=sharing"
        width="640"
        height="825"
        allow="autoplay"
      ></iframe>

      <a
        href="/Zhou_ShengKun_Resume.pdf"
        download="Zhou_ShengKun_Resume.pdf"
        class="clickable"
      >
        download
      </a>
    </div>
  );
}

export default Resume;
