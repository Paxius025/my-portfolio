import SkillsCard from "./cards/SkillsCard";

import myProfileImage from "../assets/images/Nisit_pantong.jpeg";

export default function About() {
  return (
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-2 items-center">
        <div className="flex justify-center md:justify-start">
          <img
            src={myProfileImage}
            alt="Profile"
            className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover shadow-lg"
          />
        </div>
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold">About Me</h2>
            <p className="mt-4 text-slate-700 dark:text-slate-300">
              Motivated and detail-oriented Computer Engineering student with
              hands-on experience in backend development. Eager to apply a
              growth mindset and strong problem-solving skills to a challenging
              backend role, contributing to innovative projects and a
              collaborative development team.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Education</h2>

            <p className="mt-2 text-slate-700 dark:text-slate-300">
              Kasetsart University, Chalermphrakiat Sakon Nakhon Campus
              (Thailand) <br />
              Education Bachelor of Engineering in Computer Engineering <br />
              Current GPA: 3.64 (Expected Graduation: 2026)
            </p>
          </div>
          <div className="mt-4 grid sm:grid-cols-2 gap-2">
            <SkillsCard category="Soft Skills" skills={["Team Collaboration", "Adaptability", "Presentation"]} />
            <SkillsCard category="Languages" skills={["Thai (Native)", "English (Intermediate)"]} />
            <SkillsCard category="Programming Languages" skills={["TypeScript", "JavaScript", "HTML", "CSS"]} />
            <SkillsCard category="Frameworks & Libraries" skills={["Node.js", "Express.js", "Prisma ORM", "React.js", "Tailwindcss"]} />
            <SkillsCard category="Databases" skills={["PostgreSQL", "MySQL", "SQLite"]} />
            <SkillsCard category="Tools & Platforms" skills={["Git", "Docker", "Postman", "Vercel", "Railway"]} />
          </div>
          <div>
            <h4 className="font-semibold">Interests</h4>
            <ul className="mt-2 text-sm">
              <li>Backend Development</li>
              <li>API Design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
