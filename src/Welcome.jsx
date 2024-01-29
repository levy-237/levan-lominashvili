import React, { useState, useEffect } from "react";
import portImg2 from "./images/portImg2.avif";
import { IconContext } from "react-icons";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const letter = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1, // Adjust duration for smoother appearance
    },
  },
};

const description = {
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.5,
    },
  },
};

export default function Welcome() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 10);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Full stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="welcome" id="home">
      <div className="welcome-personal">
        <h1>
          Hi! I'm Levan,{" "}
          <span
            className="txt-rotate"
            dataperio="1000"
            data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
          >
            <span className="wrap">{text}</span>
          </span>
        </h1>
        <section className="welcome-socials">
          <Link target="_blank" to="https://github.com/levy-237">
            <IconContext.Provider value={{ size: "40px" }}>
              <FaGithub />
            </IconContext.Provider>
          </Link>
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/levan-lominashvili-92b770220/"
          >
            <IconContext.Provider value={{ size: "40px", color: "#0077b5" }}>
              <FaLinkedin />
            </IconContext.Provider>
          </Link>
        </section>
        <motion.p
          variants={description}
          initial="hidden"
          animate="visible"
          className="description"
        >
          <motion.span variants={letter}>
            I'm a skilled Developer who thrives on turning creative visions into
            beautifully designed, user-friendly websites.
          </motion.span>
          <motion.span variants={letter}>
            <motion.span variants={letter}>
              With a strong focus on crafting seamless user experiences,
            </motion.span>
            Dive into my portfolio to discover how I transform ideas into
            captivating online realities
          </motion.span>
        </motion.p>
        <HashLink></HashLink>
      </div>
      <div className="welcomeImg-wrapper">
        <motion.div
          style={{ backgroundImage: `url(${portImg2})` }}
          className="welcome-img"
          dragConstraints={{ right: 0 }}
          drag
        ></motion.div>
      </div>
    </section>
  );
}
