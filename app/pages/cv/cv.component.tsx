'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { cvData } from './cv.data';

interface Project {
  name: string;
  description: string;
  year: string;
  stack?: string[];
}

interface Job {
  company: string;
  url?: string;
  position: string;
  year: string;
  logo?: string;
  projects?: Project[];
}

interface Education {
  school: string;
  logo?: string;
  degree: string;
  major: string;
  year: string;
}

interface Inspiration {
  name: string;
  url: string;
}

export interface CVData {
  header: {
    name: string;
    avatar: string;
    email: string;
    phone: string;
    address: string;
  };
  profile: {
    meta: {
      title: string;
    };
    content: string[];
    inspirations?: {
      prefix: string;
      items: Inspiration[];
      suffix: string;
    };
    footer?: string;
  };
  work: {
    meta: {
      title: string;
    };
    timeline: Job[];
  };
  education: {
    meta: {
      title: string;
    };
    timeline: Education[];
  };
}

export function CVContent({ lang = 'en' }: { lang?: 'en' | 'zh' }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [expandedJobs, setExpandedJobs] = useState<Set<number>>(new Set([0]));
  const data = cvData[lang] as CVData;
  const switchPath = lang === 'en' ? '/zh-CN/pages/cv' : '/pages/cv';
  const isDark = theme === 'dark';

  // Detect system theme preference on mount
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  const toggleJob = (index: number) => {
    setExpandedJobs(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const toggleAll = () => {
    if (expandedJobs.size === data.work.timeline.length) {
      setExpandedJobs(new Set());
    } else {
      setExpandedJobs(new Set(data.work.timeline.map((_, i) => i)));
    }
  };

  const allExpanded = expandedJobs.size === data.work.timeline.length;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto p-6 relative">
        {/* Controls */}
        <div className="absolute top-6 right-6 flex gap-2">
          <Link 
            href={switchPath}
            className={`px-3 py-2 rounded-md transition-colors text-sm font-medium ${
              isDark 
                ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            {lang === 'en' ? '中' : 'EN'}
          </Link>
          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={`p-2 rounded-md transition-colors ${
              isDark 
                ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>

        {/* Header Section */}
        <div className="flex items-center gap-6 mb-8">
          <div 
            className={`w-[100px] h-[100px] overflow-hidden shrink-0 ${
              isDark ? 'bg-gray-800' : 'bg-gray-100'
            }`}
            style={{ 
              borderRadius: '24%',  /* fallback for older browsers */
              /* Squircle (superellipse n≈5) mask - iOS style continuous corners */
              maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M0,50 C0,10 10,0 50,0 C90,0 100,10 100,50 C100,90 90,100 50,100 C10,100 0,90 0,50' fill='black'/%3E%3C/svg%3E")`,
              WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M0,50 C0,10 10,0 50,0 C90,0 100,10 100,50 C100,90 90,100 50,100 C10,100 0,90 0,50' fill='black'/%3E%3C/svg%3E")`,
              maskSize: 'cover',
              WebkitMaskSize: 'cover',
            }}
          >
            <img 
              className="w-full h-full object-cover"
              style={isDark ? { filter: 'brightness(0.9) contrast(1.1)' } : {}}
              src={data.header.avatar} 
              alt={data.header.name} 
            />
          </div>
          <div>
            <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {data.header.name}
            </h1>
            <div className={`mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <p>
                <a href={`mailto:${data.header.email}`} className={`hover:underline ${isDark ? 'hover:text-gray-200' : 'hover:text-gray-900'}`}>
                  {data.header.email}
                </a>
              </p>
              <p>
                <a href={`tel:${data.header.phone.replace(/\s/g, '')}`} className={`hover:underline ${isDark ? 'hover:text-gray-200' : 'hover:text-gray-900'}`}>
                  {data.header.phone}
                </a>
              </p>
              <p>{data.header.address}</p>
            </div>
          </div>
        </div>

        {/* Profile */}
        <section className={`mb-8 pb-8 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {/* {data.profile.meta.title} */}
          </h2>
          <div className="space-y-2">
            {data.profile.content.map((item, index) => (
              <p key={index} className={`italic ${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                "{item}"
              </p>
            ))}
            {data.profile.inspirations && (
              <p className={`italic ${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                "{data.profile.inspirations.prefix}{' '}
                {data.profile.inspirations.items.map((item, i) => (
                  <span key={item.name}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`underline not-italic ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}
                    >
                      {item.name}
                    </a>
                    {i < data.profile.inspirations!.items.length - 1 && (lang === 'zh' ? '、' : ', ')}
                  </span>
                ))}
                {data.profile.inspirations.suffix}"
              </p>
            )}
          </div>
          {data.profile.footer && (
            <p className={`mt-4 text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              {data.profile.footer.includes('→') ? (
                <>
                  {data.profile.footer.split('→')[0]}→{' '}
                  <a 
                    href="https://medium.com/@vowsole" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`underline ${isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    {data.profile.footer.split('→')[1].trim()}
                  </a>
                </>
              ) : data.profile.footer}
            </p>
          )}
        </section>

        {/* Work Experience */}
        <section className={`mb-8 pb-8 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {data.work.meta.title}
            </h2>
            <button
              onClick={toggleAll}
              className={`text-xs px-2 py-1 rounded transition-colors ${
                isDark 
                  ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              {allExpanded ? (lang === 'zh' ? '收起全部' : 'Collapse All') : (lang === 'zh' ? '展开全部' : 'Expand All')}
            </button>
          </div>
          {data.work?.timeline.map((job, index) => {
            const isExpanded = expandedJobs.has(index);
            return (
              <div key={index} className="mb-6">
                <div 
                  className={`flex justify-between items-center cursor-pointer -mx-3 px-3 py-2 rounded-lg transition-colors ${
                    isDark ? 'hover:bg-white/5' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => toggleJob(index)}
                >
                  <div className="flex items-center gap-3">
                    {/* Logo container */}
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden shrink-0 ${
                      isDark ? 'bg-white/10' : 'bg-gray-100'
                    }`}>
                      {job.logo ? (
                        <img 
                          src={job.logo} 
                          alt={`${job.company} logo`} 
                          className="w-7 h-7 object-contain rounded-sm"
                        />
                      ) : (
                        <span className={`text-lg font-bold ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          {job.company.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <h3 className={`text-xl font-semibold flex items-center gap-1.5 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {job.company}
                        {job.url && (
                          <a 
                            href={job.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className={`p-1 rounded transition-colors ${
                              isDark 
                                ? 'text-gray-600 hover:text-gray-300 hover:bg-white/10' 
                                : 'text-gray-400 hover:text-gray-600 hover:bg-gray-200'
                            }`}
                          >
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                          </a>
                        )}
                      </h3>
                      {!isExpanded && (
                        <span className={`hidden sm:inline text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                          · {job.position}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>{job.year}</span>
                    <svg 
                      className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90' : ''} ${isDark ? 'text-gray-600' : 'text-gray-300'}`} 
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                {/* Collapsible content */}
                <div className={`overflow-hidden transition-all duration-200 ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className={`mb-2 ml-[52px] mt-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{job.position}</p>
                  {job.projects?.map((project, pIndex) => (
                    <div key={pIndex} className="ml-[52px] mt-3">
                      <p className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{project.name}</p>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                      {project.stack && project.stack.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {project.stack.map((tech) => (
                            <span 
                              key={tech} 
                              className={`text-xs px-2 py-0.5 rounded ${
                                isDark 
                                  ? 'bg-gray-800 text-gray-400' 
                                  : 'bg-gray-100 text-gray-600'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* Education */}
        <section>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {data.education.meta.title}
          </h2>
          {data.education.timeline.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {/* Logo container */}
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden shrink-0 ${
                    isDark ? 'bg-white/10' : 'bg-gray-100'
                  }`}>
                    {edu.logo ? (
                      <img 
                        src={edu.logo} 
                        alt={`${edu.school} logo`} 
                        className="w-7 h-7 object-contain"
                      />
                    ) : (
                      <span className={`text-lg font-bold ${isDark ? 'text-gray-600' : 'text-gray-500'}`}>
                        {edu.school.charAt(0)}
                      </span>
                    )}
                  </div>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {edu.school}
                  </h3>
                </div>
                <span className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>{edu.year}</span>
              </div>
              <p className={`ml-[52px] ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{edu.degree} - {edu.major}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
