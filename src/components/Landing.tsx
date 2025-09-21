
export default function Landing() {
  return (
    <div className="container mx-auto px-6">
      <div className="rounded-xl p-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Pantong Sanonok</h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">Welcome to my portfolio</p>
          <div className="mt-8 flex gap-4">
            <a href="#projects" className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-md font-medium">See Projects</a>
            <a href="#contact" className="inline-block border border-white/40 px-6 py-3 rounded-md">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}
