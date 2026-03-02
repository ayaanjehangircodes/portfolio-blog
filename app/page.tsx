export default function Home() {
  return (
    <div className="text-center">
      <section className="py-20">
        <h1 className="text-5xl font-bold mb-4">
          Hi, My name is Ayaan Jehangir 👋
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Frontend Developer | Data Annotator | Future Software Engineer
        </p>
        <p className="text-gray-600 max-w-xl mx-auto">
          Welcome to my personal portfolio and blog. Explore my projects, read
          my blog posts, and learn more about my work as a developer.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "React",
            "HTML",
            "CSS",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
