const jobs = [
	{
		title: "Software Engineer",
		company: "Pressed Juicery",
		dates: "Jul 2023 - Aug 2025",
		location: "Clovis, CA",
		points: [
			"Developed and scaled customer-facing apps with TypeScript, Vue, REST, and GraphQL.",
			"Built internal tools reducing manual workflows by 30%.",
			"Co-created npm component libraries cutting delivery time by 25%.",
			"Resolved 50+ accessibility audit issues, ensuring WCAG compliance.",
		],
	},
	{
		title: "Lead Software Developer",
		company: "Bitwise Industries",
		dates: "Sep 2021 - Jun 2023",
		location: "Fresno, CA",
		points: [
			"Migrated Angular apps to React and Next.js for maintainability.",
			"Led and mentored 6 junior and apprentice developers.",
			"Increased test coverage by 45% with automated testing.",
			"Implemented CI/CD pipelines, reducing deployment bottlenecks.",
		],
	},
	{
		title: "Course Instructor",
		company: "Bitwise Industries",
		dates: "May 2022 - Jan 2023",
		location: "Fresno, CA",
		points: [
			"Taught React, SQL, NoSQL, TypeScript, and Unit Testing.",
			"Facilitated group discussions to build problem-solving skills.",
		],
	},
	{
		title: "Software Developer",
		company: "Ordrslip",
		dates: "Apr 2020 - Sep 2021",
		location: "Fresno, CA",
		points: [
			"Developed apps with React, Python, and CSS for scalable solutions.",
			"Built APIs and integrated external services to enhance UX.",
			"Created internal tools for sales metrics to drive marketing decisions.",
			"Maintained a SaaS app ensuring uptime, performance, and usability.",
		],
	},
];

export default function WorkExperiences() {
	return (
		<section id="experience" className="py-16 px-4">
			<div className="max-w-5xl mx-auto">
				<h3 className="text-3xl font-sketch mb-12 text-center ">
					Work Experience
				</h3>

				<div className="relative">
					{/* Timeline line */}
					<div className="hidden md:block absolute inset-y-0 left-1/2 w-0.5 border-l-2 border-dashed border-blueprint-accent -translate-x-1/2" />

					{jobs.map((job, i) => (
						<div key={i} className="relative mb-12 md:mb-16">
							{/* Timeline dot */}
							<span className="hidden md:flex absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-blueprint-accent rounded-full ring-4 ring-blueprint-bg  items-center justify-center">
								<span className="w-2 h-2 bg-blueprint-bg rounded-full" />
							</span>

							{/* Card */}
							<div
								className={`blueprint-card md:w-[calc(50%-2rem)] ${
									i % 2 === 0
										? "md:mr-auto md:pr-8"
										: "md:ml-auto md:pl-8"
								}`}
							>
								<h4 className="text-xl font-sketch text-blueprint-accent">
									{job.title}
								</h4>
								<p className="text-blueprint-text font-mono">
									{job.company}
								</p>
								<p className="text-sm text-blueprint-text-dim font-mono mt-1">
									{job.dates} | {job.location}
								</p>

								<ul className="list-none mt-4 space-y-2 text-blueprint-text-dim text-sm">
									{job.points.map((point, j) => (
										<li key={j} className="flex gap-2">
											<span className="text-blueprint-accent shrink-0">
												→
											</span>
											<span>{point}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
