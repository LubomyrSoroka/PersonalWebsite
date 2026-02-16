'use client';
import { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

import Contact from './Contact'
import Experience from './Experience'
import About from './About'
import Projects from './Projects';

export default function Home() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const visitorLambdaUrl = 'https://y6xxonyz5lqli74ajbupgu6rm40vzvyt.lambda-url.us-east-2.on.aws/';
      fetch(visitorLambdaUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ type: "visitor" }),
      }).catch((err) => console.error('Visitor notification failed:', err));
    }
  }, []);

  return (
    <div>
      <section id="Name"
        className="relative min-h-screen flex items-center justify-center px-8 max-w-screen-xl mx-auto">

        <div className="absolute top-6 left-0 flex gap-16 text-2xl">
          <a href="#about" className="transition-transform duration-300 hover:scale-110 hover:text-blue-600">About</a>
          <a href="#experience" className="transition-transform duration-300 hover:scale-110 hover:text-blue-600">Experience</a>
          <a href="#projects" className="transition-transform duration-300 hover:scale-110 hover:text-blue-600">Projects</a>
        </div>
        <div className="flex flex-col items-start max-w-md mr-12">
          <h1 className="text-4xl text-center font-bold mt-8">Lubomyr Soroka</h1>
          <p className="text-center">Aspiring Software Developer</p>
          <div className="flex space-x-6 text-2xl mt-4">
            <a href="https://github.com/LubomyrSoroka" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/lubomyr-soroka/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#contact" aria-label="Email">
              <FaEnvelope />
            </a>

          </div>
        </div>
        <img
          src="/lubo_headshot_square.png"
          alt="Profile picture"
          className="w-64 h-64 rounded-full mb-6 object-cover ml-12"
        />

      </section>

      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
