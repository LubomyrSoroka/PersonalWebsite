// components/ProjectCard.tsx
'use client';

import { useState } from 'react';
import { IconType } from 'react-icons';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrls: string[];
  githubUrl?: string;
  extraLinks?: { url: string; label: string }[];
  techIcons?: IconType[];
};

export default function ProjectCard({
  title,
  description,
  imageUrls,
  githubUrl,
  extraLinks = [],
  techIcons = []
}: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageUrls.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + imageUrls.length) % imageUrls.length);
  };

  return (
    <li className="mb-24 last:mb-0">
      <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
        {/* Text Section */}
        <div className="flex-1 flex flex-col">
          <div className="text-3xl font-bold text-gray-900">{title}</div>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-2xl">{description}</p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            {/* GitHub link */}
            {githubUrl &&
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="bg-black text-white hover:bg-gray-800 transition-colors text-sm font-medium px-6 py-2.5 rounded-full inline-flex items-center gap-2"
              >
                <FaGithub className="w-4 h-4" /> GitHub
              </a>
            }

            {/* Optional Extra Links */}
            {extraLinks.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {extraLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 border border-blue-600 hover:bg-blue-50 transition-all text-sm font-medium px-6 py-2.5 rounded-full inline-flex items-center gap-2"
                  >
                    {link.label}
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Skills section */}
          {techIcons.length > 0 && (
            <div className="mt-8">
              <div className="text-xs font-uppercase tracking-widest text-gray-400 mb-4 font-bold">BUILT WITH</div>
              <div className="flex flex-wrap gap-4 text-3xl text-gray-700">
                {techIcons.map((Icon, index) => (
                  <div key={index} className="hover:text-black transition-colors cursor-default" title={Icon.name}>
                    <Icon />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Carousel Image Section */}
        <div className="flex-1 w-full max-w-2xl group">
          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl bg-gray-900">
            {/* Images */}
            <div
              className="flex transition-transform duration-500 ease-out h-full"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {imageUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`${title} preview ${index + 1}`}
                  className="w-full h-full object-contain flex-shrink-0"
                />
              ))}
            </div>

            {/* Carousel Controls */}
            {imageUrls.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0"
                  aria-label="Previous image"
                >
                  <FiChevronLeft className="w-6 h-6 text-black" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0"
                  aria-label="Next image"
                >
                  <FiChevronRight className="w-6 h-6 text-black" />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {imageUrls.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${currentImageIndex === index ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                        }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}