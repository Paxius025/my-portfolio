import React from 'react';

export default function Landing() {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center justify-center text-center py-24">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900 dark:text-slate-100">
          Pantong Sanonok
        </h1>

        <blockquote className="mt-8 text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-200">
          「有志者事竟成」  
          <span className="block mt-2 text-base md:text-lg text-slate-500 dark:text-slate-400">
            Where there's a will, there's a way.
          </span>
        </blockquote>

        <div className="mt-10 flex gap-4">
          <a
            href="#projects"
            className="inline-block px-6 py-3 rounded-md font-medium
                       bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            See Projects
          </a>
          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-md border border-slate-400
                       text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
