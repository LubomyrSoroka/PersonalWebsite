import React from 'react'
import ProjectCard from './ProjectCard'

import { FaReact, FaDocker, FaAndroid, FaJava, FaFigma, FaFirefoxBrowser, FaFileExcel, FaPython } from 'react-icons/fa';
import { SiSqlite, SiFlask, SiFirebase, SiTypescript, SiAmazonec2 } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";

export default function Projects() {

return (<div className="bg-white text-black">
        <section id="projects"
          className="relative flex flex-col max-w-screen-xl mx-auto ">
          <h2 className="absolute top-6 left-0 text-3xl font-semibold tracking-widest">PROJECTS</h2>
          <ul className="mt-24">
            <ProjectCard
              title="Task Manager Web App"
              description="This is a web app that allows you organize any tasks that you are facing in work or life into lists and boards. It is inspired by the popular tool Trello. It has been ddeployed on an AWS EC2 server instance, using a CI/CD pipeline (GitHub Actions) for automated deployment. For the database, it uses an AWS RDS instance with Postgres. The app is fully authenticated. The frontend was programmed in Typescript and React, whereas the backend was made with C# and ASP.NET Core."
              imageUrl="/taskmanager-demo-screen.png"
              githubUrl="https://github.com/LubomyrSoroka/trello-clone"
              extraLinks={[
                { label: 'Live demo', url: 'http://18.219.52.3/' },
              ]}
              techIcons={[RiTailwindCssFill, FaReact, DiPostgresql, SiTypescript, FaDocker, SiAmazonec2]} /*Add C#, ASP.NET, Typescript, tailwind css, AWS EC2, AWS RDS, Postgres */
            />
            <ProjectCard
              title="Student Learning Companion Tool"
              description="I made this project for CMPUT 401 - Software Process and Product Management at the University of Alberta. This project is a chatbot web application to be used by students of the Faculty of Medicine and Dentistry at the University of Alberta. It allows..."
              imageUrl="/screenshot.png"
              githubUrl="https://github.com/UAlberta-CMPUT401/w24project-fomd_chat"
              extraLinks={[
                { label: 'More Info', url: 'https://cmput401.ca/projects/ae52f15e-adae-44ef-aca1-dccb0086d794' },
                { label: 'Documentation', url: 'https://ualberta-cmput401.github.io/w24project-fomd_chat/' }
              ]}
              techIcons={[FaReact, SiSqlite, FaDocker, SiFlask, FaFigma]}
            />
            <ProjectCard
              title="Household Inventory Manager"
              description="I made this project for CMPUT 301 - Introduction to Software Engineering at the University of Alberta. This is an Android app that allows you to keep track of items and valuables that are laying around in your house or that belong to you."
              imageUrl="/InventoryManagerPic.png"
              githubUrl="https://github.com/CMPUT301F23T31/LetsGoGolfing"
              techIcons={[FaAndroid, FaJava, SiFirebase, FaFigma]}
            />
            <ProjectCard
              title="Indeed Skill Scraper"
              description="This tool scrapes jobs on Indeed to see the most in-demand skills that employers are looking for. It functions as a Firefox extension that communicates with a backend that is written in Python using Flask. The backend takes the data generated from the extension and stores it in an Excel file. This project contains a Python file that takes the data from the Excel spreadsheet and outputs the most in-demand skills in another worksheet within the same workbook. It also outputs the most common n-skill combinations. "
              imageUrl="/IndeedSkillScraper.png"
              githubUrl="https://github.com/LubomyrSoroka/IndeedSkillScraper"
              extraLinks={[
                {label: "Example Excel File", url: "https://github.com/LubomyrSoroka/IndeedSkillScraper/raw/refs/heads/main/skill_counts.xlsx"}
              ]}
              techIcons={[FaFirefoxBrowser, IoLogoJavascript, FaFileExcel, SiFlask, FaPython]}
            />
            <ProjectCard
              title="Artificial Intelligence Capstone Project"
              description="I made this project for CMPUT 469 - Artificial Intelligence Capstone at the University of Alberta. It is about an area of artificial intelligence called Reinforcement Learning. Reinforcement learning is when agents learn how to act in an environment by interacting with it. Specifically, it examines streaming-reinforcement learning, an approach to reinforcement learning for resource contrained devices, in the partially obserable context."
              imageUrl="/RL.jpg"
              githubUrl="https://github.com/CMPUT-469-iRL/iRL"
            />

            <ProjectCard
              title="Team Fortress 2: Independent Project"
              description="This tool allows you to perform certain in-game movement mechanics automatically."
              imageUrl="/rocketjump.png"
              githubUrl="https://github.com/LubomyrSoroka/VideoGameAssistTool"
            />

          </ul>
        </section>
      </div>);
}