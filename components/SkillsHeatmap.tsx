export default function SkillsHeatmap() {
	const skills = [
		"TypeScript",
		"JavaScript",
		"React",
		"Vue",
		"Next.js",
		"Node.js",
		"Python",
		"GraphQL",
		"SQL",
		"NoSQL",
		"PostgreSQL",
		"Docker",
		"CI/CD",
		"Accessibility",
		"Mentorship",
		"AI/ML",
	];

	const categories = [
		{
			name: "Frontend",
			skills: {
				TypeScript: "Expert",
				JavaScript: "Expert",
				React: "Expert",
				Vue: "Expert",
				"Next.js": "Advanced",
				GraphQL: "Advanced",
				Accessibility: "Expert",
				Mentorship: "Advanced",
			},
		},
		{
			name: "Backend",
			skills: {
				"Node.js": "Expert",
				Python: "Advanced",
				GraphQL: "Advanced",
				SQL: "Proficient",
				NoSQL: "Proficient",
				PostgreSQL: "Advanced",
				Docker: "Proficient",
				"CI/CD": "Proficient",
				"AI/ML": "Exploring",
			},
		},
		{
			name: "Infra & Leadership",
			skills: {
				Docker: "Advanced",
				"CI/CD": "Advanced",
				Mentorship: "Expert",
			},
		},
	];

	const getLevelStyle = (level: string | undefined) => {
		switch (level) {
			case "Expert":
				return "bg-blueprint-accent text-blueprint-bg font-bold";
			case "Advanced":
				return "bg-blueprint-accent/70 text-blueprint-bg";
			case "Proficient":
				return "bg-blueprint-accent/50 text-blueprint-text";
			case "Exploring":
				return "bg-blueprint-accent/30 text-blueprint-text";
			default:
				return "bg-blueprint-bg-light/50 text-blueprint-text-dim";
		}
	};

	return (
		<section className="py-16 px-4">
			<div className="max-w-6xl mx-auto">
				<h3 className="text-3xl font-sketch mb-8 text-center ">
					Skill Blueprint
				</h3>

				<div className="overflow-x-auto blueprint-card">
					<table className="w-full text-sm text-center border-collapse">
						<thead>
							<tr className="border-b-2 border-dashed border-blueprint-text-dim">
								<th className="p-3 text-left sticky left-0 bg-blueprint-bg-light/80 backdrop-blur-sm z-10 font-sketch text-blueprint-accent">
									Category
								</th>
								{skills.map((skill) => (
									<th
										key={skill}
										className="p-3 font-mono text-blueprint-text-dim text-xs whitespace-nowrap"
									>
										{skill}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{categories.map((category, i) => (
								<tr
									key={category.name}
									className={
										i < categories.length - 1
											? "border-b border-dashed border-blueprint-grid"
											: ""
									}
								>
									<td className="p-3 font-sketch text-left sticky left-0 bg-blueprint-bg-light/80 backdrop-blur-sm z-10 text-blueprint-text">
										{category.name}
									</td>
									{skills.map((skill) => {
										const level =
											category.skills[
												skill as keyof typeof category.skills
											];
										return (
											<td
												key={skill}
												className={`p-3 text-xs transition-all duration-300 hover: ${getLevelStyle(level)}`}
											>
												{level || "—"}
											</td>
										);
									})}
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<div className="flex justify-center gap-6 mt-6 text-xs font-mono">
					<span className="flex items-center gap-2">
						<span className="w-4 h-4 bg-blueprint-accent rounded" /> Expert
					</span>
					<span className="flex items-center gap-2">
						<span className="w-4 h-4 bg-blueprint-accent/70 rounded" />{" "}
						Advanced
					</span>
					<span className="flex items-center gap-2">
						<span className="w-4 h-4 bg-blueprint-accent/50 rounded" />{" "}
						Proficient
					</span>
					<span className="flex items-center gap-2">
						<span className="w-4 h-4 bg-blueprint-accent/30 rounded" />{" "}
						Exploring
					</span>
				</div>
			</div>
		</section>
	);
}
