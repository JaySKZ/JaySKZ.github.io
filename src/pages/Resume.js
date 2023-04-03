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
        src="https://drive.google.com/file/d/1w_JDy6VEs477dsXtb0uqf0WI1N7_Y6BC/view"
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
