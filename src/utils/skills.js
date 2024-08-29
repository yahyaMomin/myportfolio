import html from "../assets/skills/html.svg";
import css from "../assets/skills/css.svg";
import js from "../assets/skills/js.svg";
import react from "../assets/skills/react.svg";
import nodejs from "../assets/skills/node.svg";
import express from "../assets/skills/express.svg";
import mongodb from "../assets/skills/mongodb.svg";
import tailwindCss from "../assets/skills/tailwind.svg";
import reactQuery from "../assets/skills/react-query.svg";
import redux from "../assets/skills/redux.svg";
import reactHookForm from "../assets/skills/react-hook-form.svg";
import vite from "../assets/skills/vite.svg";
import npm from "../assets/skills/npm.svg";
import git from "../assets/skills/git.svg";
import github from "../assets/skills/github.svg";

const skills = [
   {
      name: "html",
      color: ["#e34f26", "#ef652a"],
      logo: html,
      description:
         "The standard markup language for creating web pages. Defines the structure of a webpage using elements like headings, paragraphs, links, images, etc.",
   },
   {
      name: "css",
      color: ["#1572b6", "#33A9DC"],
      logo: css,
      description:
         "Controls the layout, colors, fonts, and overall visual appearance of a webpage.",
   },
   {
      name: "tailwind css",
      color: ["#38bdf8", "#38bdf8"],
      logo: tailwindCss,
      description:
         "Tailwind CSS is a utility-first CSS framework that allows developers to build custom designs without writing any CSS by hand. It provides a set of low-level utility classes that you can combine to create unique designs directly in your HTML.",
   },
   {
      name: "javascript",
      color: ["#f7df1e", "#f7df1e"],
      logo: js,
      description:
         "Adds dynamic behavior to web pages, such as form validation, animations, and interactivity.",
   },
   {
      name: "react js",
      color: ["#61dafa", "#61dafa"],
      logo: react,
      description:
         " Allows developers to create large web applications that can update and render efficiently in response to data changes.",
   },
   {
      name: "node js",
      color: ["#41873f", "#418B3D", "#3FA92D", "#539E43"],
      logo: nodejs,
      description:
         "Allows developers to use JavaScript on the server-side to build scalable network applications.",
   },
   {
      name: "express js",
      color: ["#cbc6c2", "#cbc6c2"],
      logo: express,
      description:
         "Simplifies the process of building web applications and APIs by providing robust features such as routing and middleware support.",
   },
   {
      name: "mongodb",
      color: ["#599636", "#6cac48"],
      logo: mongodb,
      description:
         "Allows developers to store data in a more scalable way compared to traditional SQL databases. It’s often used in modern web applications to handle large volumes of unstructured data.",
   },
   {
      name: "react query",
      color: ["#ff4154", "#FFD94C"],
      logo: reactQuery,
      description:
         "React Query is a library for fetching, caching, synchronizing, and updating server state in React applications. It focuses on data fetching and synchronization, making it easier to manage server-side data in your React components.",
   },
   {
      name: "react redux",
      color: ["#764abc", "#764abc"],
      logo: redux,
      description:
         "Redux is a state management library that is often used with React. It helps you manage the state of your application in a predictable way. Redux is particularly useful in large applications where you have a lot of components that need to share and update the same state.",
   },
   {
      name: "react hook form",
      color: ["#ec5990", "#ec5990"],
      logo: reactHookForm,
      description:
         "React Hook Form is a popular library for handling forms in React applications. It leverages React's hooks API to manage form state and validation in an efficient and simple way.",
   },
   {
      name: "vite",
      color: ["#41D1FF", "#BD34FE", "#FFEA83", "#FFDD35", "#FFA800"],
      logo: vite,
      description:
         "Vite is a modern front-end build tool that provides a fast development environment and optimized production builds. It is especially popular for React and other JavaScript frameworks because of its:",
   },
   {
      name: "node package manager (NPM)",
      color: ["#cb3837", "#cb3837"],
      logo: npm,
      description:
         "npm stands for Node Package Manager. It is the default package manager for Node.js and is used to install, manage, and share JavaScript packages or libraries. Developers use npm to install packages like React Hook Form, manage dependencies in a project, and run scripts (e.g., building or starting a development server).",
   },
   {
      name: "git",
      color: ["#DE4C36", "#DE4C36"],
      logo: git,
      description:
         "Git is a distributed version control system that allows developers to track changes in their code over time. It helps manage and coordinate work on projects that involve multiple contributors by keeping a history of every change made to the codebase.",
   },
   {
      name: "github",
      color: ["#161614", "#161614"],
      logo: github,
      description:
         "GitHub is a web-based platform that hosts Git repositories. It provides a cloud-based environment for storing and managing Git repositories.",
   },
];

export default skills;
