import { projects, type ProjectType } from "../data/projects";
import HighlightCard from "./cards/HighlightsCard";

const groupBy = (arr: ProjectType[]) => {
  const map = new Map<string, ProjectType[]>();
  for (const p of arr) {
    if (!map.has(p.category)) map.set(p.category, []);
    map.get(p.category)!.push(p);
  }
  return map;
};

export default function HighlightsContainer() {
  const groups = groupBy(projects);

  return (
    <div className="container mx-auto px-6">
      <h2 className="text-2xl font-bold mb-6">Highlights</h2>

      {[...groups.entries()].map(([category, items]) => (
        <div key={category} className="mb-10">
          <h3 className="text-xl font-semibold mb-4">{category}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p) => (
              <HighlightCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
