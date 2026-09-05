import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "FitDash",
    description:
      "A fitness tracker dashboard that allows users to explore products, manage a cart and wishlist, and view product details.",
    technologies: ["JavaScript", "HTML", "CSS", "Vite"],
    link: "https://github.com/Edprime9",
  },
  {
    title: "Chamber of Commerce",
    description:
      "A responsive Chamber of Commerce website that displays local business information, weather data, and community events.",
    technologies: ["JavaScript", "HTML", "CSS", "JSON", "OpenWeatherMap API"],
    link: "https://github.com/Edprime9",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>

        <p className="text-lg text-gray-700">
          I&apos;m a full-stack developer learning Next.js and React. Here are
          some of my recent projects.
        </p>
      </section>

      <ProjectList projects={projects} />
    </main>
  );
}
