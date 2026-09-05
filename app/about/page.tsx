import SkillsCard from "@/components/SkillsCard";

export default function About() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js"];

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>

      <p className="text-lg text-gray-700">
        I&apos;m Morrison Eli, a software development student and aspiring
        full-stack developer. I&apos;m passionate about building useful
        applications and continuously improving my skills in web development.
      </p>

      <SkillsCard title="My Technical Skills" skills={skills} />
    </main>
  );
}
