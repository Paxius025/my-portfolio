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
            <div className="mb-2">
              <h4 className="font-semibold">Languages</h4>
              <ul className="mt-2 text-sm">
                <li>TypeScript, JavaScript, HTML, CSS</li>
              </ul>
            </div>
            <div className="mb-2">
              <h4 className="font-semibold">Frameworks & Libraries</h4>
              <ul className="mt-2 text-sm">
                <li>Node.js, Express.js, Prisma ORM, React.js, Tailwindcss</li>
              </ul>
            </div>
            <div className="mb-2">
              <h4 className="font-semibold">Database</h4>
              <ul className="mt-2 text-sm">
                <li>PostgreSQL, MySQL, SQLite</li>
              </ul>
            </div>
            <div className="mb-2">
              <h4 className="font-semibold">Tools & Platforms</h4>
              <ul className="mt-2 text-sm">
                <li>Docker, Git, Visual Studio Code, Vercel</li>
              </ul>
            </div>
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
