import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa6";
import { DiNodejs } from "react-icons/di";
import { RiCss3Fill } from "react-icons/ri";
import { SiTailwindcss, SiJest, SiCypress } from "react-icons/si";
import { FaHtml5, FaGithub, FaJava } from "react-icons/fa";
import { SiExpress, SiSpring, SiTypescript } from "react-icons/si";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
export default function CarouselComp() {
  return (
    <section className="carous-div" id="skills">
      <div className="carous-wrapper">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={20}
          totalSlides={3}
          className="carouselProvider"
        >
          <h1>TECH STACK</h1>
          <p>
            Swipe the the carousel to view all the tech stack i have used in my
            projects{" "}
          </p>
          <Slider>
            <Slide index={0}>
              <div className="carousContainer-div">
                <IconContext.Provider
                  value={{ color: "#f0db4f", size: "6rem" }}
                >
                  <span>
                    <IoLogoJavascript />
                  </span>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "orange", size: "6rem" }}>
                  <span>
                    <FaJava />
                  </span>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ color: "#61dafb", size: "6rem" }}
                >
                  <span>
                    <FaReact />
                  </span>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "green", size: "6rem" }}>
                  <span>
                    <DiNodejs />
                  </span>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "green", size: "6rem" }}>
                  <span>
                    <SiSpring />
                  </span>
                </IconContext.Provider>
              </div>
            </Slide>
            <Slide index={1}>
              <div className="carousContainer-div">
                <IconContext.Provider value={{ color: "white", size: "6rem" }}>
                  <span>
                    <SiExpress />
                  </span>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ color: "#skyblue", size: "6rem" }}
                >
                  <span>
                    <SiTypescript />
                  </span>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "red", size: "6rem" }}>
                  <span>
                    <SiJest />
                  </span>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "green", size: "6rem" }}>
                  <span>
                    <BiLogoMongodb />
                  </span>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "white", size: "6rem" }}>
                  <span>
                    <SiCypress />
                  </span>
                </IconContext.Provider>
              </div>
            </Slide>
            <Slide index={2}>
              <div className="carousContainer-div">
                <IconContext.Provider
                  value={{ color: "skyblue", size: "6rem" }}
                >
                  <span>
                    <BiLogoPostgresql />
                  </span>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ color: "skyblue", size: "6rem" }}
                >
                  <span>
                    <SiTailwindcss />
                  </span>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "orange", size: "6rem" }}>
                  <span>
                    <FaHtml5 />
                  </span>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ color: "skyblue", size: "6rem" }}
                >
                  <span>
                    <RiCss3Fill />
                  </span>
                </IconContext.Provider>

                <IconContext.Provider value={{ color: "white", size: "6rem" }}>
                  <span>
                    <FaGithub />
                  </span>
                </IconContext.Provider>
              </div>
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>
    </section>
  );
}
