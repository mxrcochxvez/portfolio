export type WorkExperience = {
	company: string
	role?: string
	start: string
	end: string
	bullets: string[]
}

export function useWorkExperiences(): WorkExperience[] {
	return [
		{
			company: 'Pressed Juicery',
			role: 'Software Engineer',
			start: 'Jul 2023',
			end: 'Aug 2025',
			bullets: [
				'Develop robust web applications using JavaScript, TypeScript, and Vue, ensuring high-quality code and performance.',
				'Champion accessibility by commiting to WCAG standards and practices.',
				'Collaborate with cross-functional teams in Agile environments to drive project success and iterative improvements.',
				'Integrate and optimize APIs for seamless backend communication and data management with REST and GraphQL.',
				'Accomplish marketing goals by developing new applications for internal tooling.',
				'Migrate company data through PostgreSQL.',
				'Collaborated on multiple component libraries so we could share code across mobile apps and website using package workspaces.'
			]
		},
		{
			company: 'Bitwise Industries',
			role: 'Lead Software Developer',
			start: 'Apr 2022',
			end: 'Jun 2023',
			bullets: [
				'Developed and executed automated unit tests to ensure high-quality code delivery within project deadlines.',
				'Monitored and maintained production environments, proactively identifying and resolving issues to minimize downtime.',
				'Partnered with project managers to create detailed project plans with timelines, deliverables, and resource requirements.',
				'Mentored junior developers in TypeScript and JavaScript to foster skill growth and team productivity.',
				'Implemented best practices to improve development processes, enhancing efficiency and code reliability.',
				'Authored comprehensive documentation across the SDLC.',
				'Designed and built cross-platform web apps using React, Node.js, SQL, NoSQL, and Python.',
				'Advised teams on coding standards and architecture for scalable, maintainable solutions.'
			]
		},
		{
			company: 'Bitwise Industries',
			role: 'Course Instructor',
			start: 'May 2022',
			end: 'Jan 2023',
			bullets: [
				'Collaborated with colleagues to refine teaching strategies and optimize delivery.',
				'Organized and facilitated group discussions to encourage critical thinking and problem-solving.',
				'Delivered instruction in React, SQL, NoSQL, TypeScript, JavaScript, and unit testing tailored to diverse learning needs.'
			]
		},
		{
			company: 'Bitwise Industries',
			role: 'Software Developer',
			start: 'Sep 2021',
			end: 'Apr 2022',
			bullets: [
				'Partnered with developers to design, develop, and test applications aligned with requirements.',
				'Delivered web-based applications meeting performance, usability, and scalability standards.',
				'Collaborated with stakeholders to define requirements and drive successful delivery.',
				'Applied OOP principles and design patterns for clean, reusable code.',
				'Built and integrated APIs with external services to expand functionality.',
				'Utilized Git for version control to support collaboration and project history tracking.',
				'Worked cross-functionally to design and implement new features that enhanced product value.'
			]
		},
		{
			company: 'Ordrslip',
			role: 'Software Developer',
			start: 'Apr 2020',
			end: 'Sep 2021',
			bullets: [
				'Developed applications using React, Python, and CSS.',
				'Collaborated on design, development, and testing to meet project goals.',
				'Designed and implemented new features and enhanced existing software.',
				'Optimized code for performance, scalability, reliability, security, and maintainability.',
				'Used Git for version control to support collaboration.',
				'Participated in technical discussions to guide development decisions.',
				'Built and integrated APIs with external services.',
				'Created internal tools to track sales metrics for data-driven marketing.',
				'Maintained and improved a scalable SaaS application for consistent performance and availability.',
				'Produced well-structured, testable code to support long-term maintainability.'
			]
		}
	]
}
