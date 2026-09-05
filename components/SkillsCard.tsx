interface SkillsCardProps {
  title: string;
  skills: string[];
}

export default function SkillsCard({ title, skills }: SkillsCardProps) {
  return (
    <section className="mt-8 p-6 bg-gray-100 rounded-lg shadow">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>

      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
