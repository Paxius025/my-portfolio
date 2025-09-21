export default function SkillsCard(details: { category: string, skills: string[] }) {
  return (
    <div className="mb-2">
      <h4 className="font-semibold">{details.category}</h4>
      <ul className="mt-2 text-sm">
        <li>{details.skills.join(", ")}</li>
      </ul>
    </div>
  );
};