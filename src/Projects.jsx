import React, { useState } from "react";
import { motion } from "framer-motion";
import furryFitsImg from "./images/furryFits.png";
import jewelryImg from "./images/jewelry.png";
import projTracker from "./images/project-tracker.png";
import movieImg from "./images/movie.png";
import printShopImg from "./images/printshop.png";
import titac from "./images/tac.png";
import chatImg from "./images/ChatAppImg.png";
import furnImg from "./images/FurnitureShopImg.png";
import docEditorImg from "./images/DocEditorImg.png";
import { FaGithub } from "react-icons/fa6";
import { HiCursorClick } from "react-icons/hi";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
export default function Projects() {
  const [imgHovered, setImgHovered] = useState();
  return (
    <div className="project-wrapper" id="projects">
      {projects.map((project, i) => (
        <div
          key={i}
          className="projectDiv"
          onMouseEnter={() => setImgHovered(i)}
          onMouseLeave={() => setImgHovered(null)}
        >
          <Link to={`${project.projectUrl}`} target="_blank">
            <img src={project.image} className="project-img" />
            <motion.div
              className={
                imgHovered == i ? "projectDiv-info" : "projectDiv-info-hidden"
              }
              initial={{ opacity: 0, y: -10 }} // Initial state (hidden and above)
              animate={{
                opacity: imgHovered === i ? 1 : 0, // Show only when hovered
                y: imgHovered === i ? 0 : -10, // Move down when hovered
              }}
              transition={{ duration: 0.4 }}
            >
              <h3>{project.title}</h3>
              <span className="project-desc">{project.description}</span>
              <section className="project-links">
                <span>
                  <Link to={`${project.githubUrl}`} target="_blank">
                    <IconContext.Provider value={{ size: "30px" }}>
                      <FaGithub />
                    </IconContext.Provider>
                  </Link>
                </span>
                <span>
                  <Link to={`${project.projectUrl}`} target="_blank">
                    <IconContext.Provider value={{ size: "30px" }}>
                      <HiCursorClick />
                    </IconContext.Provider>
                  </Link>
                </span>
              </section>
            </motion.div>
          </Link>
        </div>
      ))}
    </div>
  );
}
const projects = [
  {
    title: "Furniture shop",
    description:
      "The furniture shop, built using ReactJS, Express, Node.js, and MongoDB as the database, offers users robust filtering options for reviews, price, categories, availability, and producer companies, managed by the ExpressJS backend. Clients can use a search bar to find specific items, and the shopping list is securely stored in localStorage for data persistence across page refreshes, ensuring a smooth user experience. Overall, the furniture shop provides a user-friendly interface with efficient filtering features, backed by secure data storage mechanisms.",
    image: furnImg,
    projectUrl: "https://furniture-shop-client.vercel.app/",
    githubUrl: "https://github.com/levy-237/furnitureShop-client",
  },
  {
    title: "Chat App",
    description:
      "The chat application is built using React for the frontend and Express with Mongoose for the backend. It enables real-time chatting through WebSockets and stores conversations securely in a MongoDB database. Users can search for others by name and find specific old messages within chats. Authentication is managed using JWT tokens for security. Overall, it's a practical and user-friendly chat app that facilitates seamless communication and message retrieval.",
    image: chatImg,
    projectUrl: "https://blink-chat.vercel.app/",
    githubUrl: "https://github.com/levy-237/chatApp-server",
  },
  {
    title: "Document Editor",
    description:
      "The website emulates a collaborative document editing platform, designed using ReactJS, socket.io, Quill (text editor), and MongoDB. Upon accessing the site, each user is directed to a unique URL generated for authentication purposes, granting them access to edit their files with the help of Quill. Leveraging socket.io, users who share their URL can collaborate in real-time, editing documents simultaneously. Notably, data persistence is maintained even after page refreshes, as documents are securely stored in MongoDB. This project highlights the seamless integration of modern web technologies to enable user-friendly collaborative document editing.",
    image: docEditorImg,
    projectUrl: "https://document-editor-umber.vercel.app/",
    githubUrl: "https://github.com/levy-237/documentEditor-client",
  },
  {
    title: "FurryFits Shop",
    description:
      "FurryFits, a dog Clothing platform, stands as a showcase of technical finesse. Utilizing ReactJS and CSS for the frontend, this platform seamlessly integrates Firebase in the backend, ensuring smooth cart functionality. Notably, the implementation of Framer Motion enriches user interaction through subtle yet engaging animations. Of particular note is the creation of a plain JavaScript carousel, designed to offer an intuitive and authentic browsing experience.",
    image: furryFitsImg,
    projectUrl: "https://furry-fits.vercel.app/",
    githubUrl: "https://github.com/levy-237/FurryFits",
  },
  {
    title: "Jewelry Shop",
    description:
      "Jeweluxe, Created using ReactJS, and CSS, this project offers a nice experience for customers. Browse through curated categories, easily add items to your cart, and proceed to a hassle-free checkout. Immerse yourself in the world of fine craftsmanship and discover the perfect pieces for any occasion. At Jewelry Shop, we combine passion for design with a user-friendly experience, making your jewelry shopping journey delightful and enjoyable.",
    image: jewelryImg,
    projectUrl: "https://jewellery-six.vercel.app/",
    githubUrl: "https://github.com/levy-237/jewellery",
  },
  {
    title: "Project tracker",
    description:
      "Project Tracker, a web application Created with Java, Spring Boot 3 for the backend and React for the frontend. Project Tracker is a full CRUD application, empowering you to efficiently manage your projects with ease. Easily create, read, update, delete and search existing projects, all while adding valuable additional information like project types and more. Whole Project was created by me from scratch, ensuring that the design is responsive and user-friendly, making it an ideal tool for managing your projects.",
    image: projTracker,
    projectUrl: "https://project-tracker-m2e0cd6dr-levy-237.vercel.app/",
    githubUrl: "https://github.com/levy-237/calendarJava",
  },
  {
    title: "Tic Tac Toe",
    description:
      "Play the classic Tic Tac Toe game online! Built using TypeScript and React, our game lets you compete with a friend or challenge the computer. Just take turns clicking on the grid to place your X or O. It's a fun way to test your strategy skills and enjoy a timeless game in a modern way.",
    image: titac,
    projectUrl: "https://tictactoe-ochre-delta.vercel.app/",
    githubUrl: "https://github.com/levy-237/tictactoe",
  },
  {
    title: "Movie Search",
    description:
      "Explore Movies: A dynamic movie search app crafted using JavaScript and ReactJS. Powered by an API, effortlessly discover a vast collection of films, complete with detailed information and captivating visuals.",
    image: movieImg,
    projectUrl: "https://movie-drab-ten.vercel.app/",
    githubUrl: "https://github.com/levy-237/movie",
  },
  {
    title: "Printshop",
    description:
      "Discover Printshop: your ultimate destination for customizable products. With React JavaScript and CSS interface, you can effortlessly browse, personalize, and add items to your cart. Experience a seamless checkout process and responsive design for shopping anywhere.",
    image: printShopImg,
    projectUrl: "https://printshop-nu.vercel.app/",
    githubUrl: "https://github.com/levy-237/printshop",
  },
];
