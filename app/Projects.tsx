'use client';
import React from 'react'
import ProjectCard from './ProjectCard'

import { FaReact, FaDocker, FaAndroid, FaJava, FaFigma, FaFirefoxBrowser, FaFileExcel, FaPython, FaWordpress, FaHtml5, FaCss3Alt, FaVuejs } from 'react-icons/fa';
import { SiSqlite, SiFlask, SiFirebase, SiTypescript, SiAmazonec2, SiQt, SiGooglecloud, SiPhp, SiDotnet, SiOpenai, SiAwslambda } from "react-icons/si";
import { RiTailwindCssFill, RiGeminiLine } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";

export default function Projects() {
  return (<div className="bg-white text-black">
    <section id="projects"
      className="relative flex flex-col max-w-screen-xl mx-auto">
      <h2 className="absolute top-6 left-0 text-3xl font-semibold tracking-widest">PROJECTS</h2>
      <ul className="mt-24 mb-24">
        <ProjectCard
          title="JobAggregator Web App"
          description={`JobAggregator is a web app that amalgamates job postings from various job boards into a single, searchable interface. The user creates their own APIs or web scrapers for the job boards they want and the scraping is done through their frontend. Users can publish and share their scrapers for others to use. The app uses the OpenAI API and other NLP techniques to allow users to find missing data from the APIs. E.g., the API may not list the salary range or the years of experience required, but an LLM may be able to find it from the job description. 
            \nOne can view common stats from their job search: e.g. bar charts displaying the years of experience, salaries or the most frequent key words of the jobs.
            \n The frontend is made with Vue.js. The app stores most data locally apart from the published scrapers which are held on Supabase.
            \n An extension was also created to bypass the CORS (Cross-Origin Resource Sharing) policy to allow fetching content from various job boards.`}
          imageUrls={["/JobAggregator.png"]}
          githubUrl="https://github.com/LubomyrSoroka/JobAggregator"
          extraLinks={[{ label: "Live Demo", url: "https://lubomyrsoroka.github.io/JobAggregator/" }]}
          techIcons={[FaVuejs, SiTypescript, SiOpenai]}
        />
        <ProjectCard
          title="WordPress Developer - Songs From the Prairies"
          description="I maintained and extended a WordPress website using Elementor, implementing custom HTML, CSS, and JavaScript to build functional components like an interactive search bar. I also scraped and transformed archival content from a legacy site into structured CSV datasets. Additionally, I developed custom WordPress plugins for bulk data imports and integrated GCP and the Google Drive API to programmatically manage remote assets."
          imageUrls={["/WordPress1.png", "/WordPress2.png", "/WordPress3.png"]}
          techIcons={[FaWordpress, SiPhp, IoLogoJavascript, FaHtml5, FaCss3Alt, SiGooglecloud, FaFileExcel]}
        />
        <ProjectCard
          title="Kanban Board Web App"
          description="This is a web app that allows you organize any tasks that you are facing in work or life into lists and boards. It is inspired by the popular tool Trello. It was deployed on an AWS EC2 server instance, using a CI/CD pipeline (GitHub Actions) for automated deployment. For the database, it used an AWS RDS instance with Postgres. After my AWS free trial ended, I migrated to a single GCP Compute Engine instance. The app is fully authenticated. The frontend is programmed in Typescript and React, whereas the backend is programmed in C# and ASP.NET Core. The app is fully dockerized."
          imageUrls={["/taskmanager-demo-screen-new.png", "/taskmanager-allboards.png", "/taskmanager-login.png"]}
          githubUrl="https://github.com/LubomyrSoroka/Kanban-Board"
          // extraLinks={[
          //   { label: 'Live demo', url: 'http://104.197.109.252/' },
          // ]}
          techIcons={[TbBrandCSharp, SiDotnet, RiTailwindCssFill, FaReact, DiPostgresql, SiTypescript, FaDocker, SiAmazonec2]}
        />
        <ProjectCard
          title="Student Learning Companion Tool"
          description="I made this project for CMPUT 401 - Software Process and Product Management at the University of Alberta. This project is a chatbot web application to be used by students of the Faculty of Medicine and Dentistry at the University of Alberta. It allows students to quickly perform common operations through the chatbot such as getting their schedule, sending emails to their designated proferssors and reporting absences. The app also contains an admin interface if the need ever arises for a student to speak to an admin staff member."
          imageUrls={["/screenshot.png"]}
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
          imageUrls={["/InventoryManagerPic.png"]}
          githubUrl="https://github.com/CMPUT301F23T31/LetsGoGolfing"
          techIcons={[FaAndroid, FaJava, SiFirebase, FaFigma]}
        />
        <ProjectCard
          title="KrossWordz: Crossword Solver"
          description="This is a desktop app that allows you to play .ipuz crossword puzzles. It was made with Qt for Python. It allows for standard clue and puzzle navigation, checking and revealing, pencil mode, entering rebuses, pausing and resuming, and saving and loading. A highlight of the app is that it allows the user to explain a clue and crossword pair using a free Gemini API key. It also allows the user to look up a definition of a word."
          imageUrls={["/KrossWordz.png"]}
          githubUrl='https://github.com/LubomyrSoroka/KrossWordz'
          techIcons={[SiQt, FaPython, RiGeminiLine]}
        />
        {/* <ProjectCard
          title="Indeed Skill Scraper"
          description="This tool scrapes jobs on Indeed to see the most in-demand skills that employers are looking for. It functions as a Firefox extension that communicates with a backend that is written in Python using Flask. The backend takes the data generated from the extension and stores it in an Excel file. This project contains a Python file that takes the data from the Excel spreadsheet and outputs the most in-demand skills in another worksheet within the same workbook. It also outputs the most common n-skill combinations. "
          imageUrls={["/IndeedSkillScraper.png"]}
          githubUrl="https://github.com/LubomyrSoroka/IndeedSkillScraper"
          extraLinks={[
            { label: "Example Excel File", url: "https://github.com/LubomyrSoroka/IndeedSkillScraper/raw/refs/heads/main/skill_counts.xlsx" }
          ]}
          techIcons={[FaFirefoxBrowser, IoLogoJavascript, FaFileExcel, SiFlask, FaPython]}
        /> */}
        <ProjectCard
          title="Artificial Intelligence Capstone Project"
          description="I made this project for CMPUT 469 - Artificial Intelligence Capstone at the University of Alberta. It is about an area of artificial intelligence called Reinforcement Learning. Reinforcement learning is when agents learn how to act in an environment by interacting with it. Specifically, it examines streaming-reinforcement learning, an approach to reinforcement learning for resource contrained devices, in the partially obserable context."
          imageUrls={["/RL.jpg"]}
          githubUrl="https://github.com/CMPUT-469-iRL/iRL"
        />

        <ProjectCard
          title="Team Fortress 2: Independent Project"
          description="This tool allows you to perform certain in-game movement mechanics automatically."
          imageUrls={["/rocketjump.png"]}
          githubUrl="https://github.com/LubomyrSoroka/VideoGameAssistTool"
        />
        <ProjectCard
          title="Portfolio Website"
          description="This is a portfolio website that showcases my projects and skills. It is made with Next.js and Typescript. An AWS Lambda function is used to send me an email when someone contacts me."
          imageUrls={[]}
          githubUrl="https://github.com/LubomyrSoroka/my-portfolio"
          extraLinks={[]}
          techIcons={[FaReact, SiTypescript, SiAwslambda]}
        />
      </ul>
    </section>
  </div>);
}