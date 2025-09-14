'use client'

import { cvData } from './cv.data';
import { useState } from 'react';

interface Project {
  name: string;
  description: string;
  year: string;
}

interface Job {
  company: string;
  position: string;
  year: string;
  logo?: string;
  projects?: Project[];
}

interface Education {
  school: string;
  degree: string;
  major: string;
  year: string;
}

interface CVData {
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

function CVContent() {
  const [lang, setLang] = useState<'en' | 'zh'>('en');
  const data = cvData[lang] as CVData;

  return (
    <div className="max-w-4xl mx-auto p-6 relative">
      <button 
        onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
        className="absolute top-6 right-6 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
      >
        {lang === 'en' ? '中文' : 'English'}
      </button>

      {/* Header Section */}
      <div className="flex items-center gap-6 mb-8">
        <img className="size-[100px] rounded-full" src={data.header.avatar} alt={data.header.name} />
        <div>
          <h1 className="text-3xl font-bold">{data.header.name}</h1>
          <div className="text-gray-600 mt-2">
            <p>{data.header.email}</p>
            <p>{data.header.phone}</p>
            <p>{data.header.address}</p>
          </div>
        </div>
      </div>

      {/* Profile */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{data.profile.meta.title}</h2>
        <ul className="list-disc list-inside">
          {data.profile.content.map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
          ))}
        </ul>
      </section>

      {/* Work Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{data.work.meta.title}</h2>
        {data.work?.timeline.map((job, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between items-baseline">
              <div className="flex items-center gap-3">
                {job.logo && (
                  <img 
                    src={job.logo} 
                    alt={`${job.company} logo`} 
                    className="size-8 object-contain"
                  />
                )}
                <h3 className="text-xl font-semibold">{job.company}</h3>
              </div>
              <span className="text-gray-600">{job.year}</span>
            </div>
            <p className="text-gray-700 mb-2">{job.position}</p>
            {job.projects?.map((project, pIndex) => (
              <div key={pIndex} className="ml-4 mt-2">
                <p className="font-medium">{project.name}</p>
                <p className="text-gray-600">{project.description}</p>
                <p className="text-sm text-gray-500">{project.year}</p>
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-bold mb-4">{data.education.meta.title}</h2>
        {data.education.timeline.map((edu, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="text-xl font-semibold">{edu.school}</h3>
              <span className="text-gray-600">{edu.year}</span>
            </div>
            <p className="text-gray-700">{edu.degree} - {edu.major}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default function CV() {
  return <CVContent />;
}