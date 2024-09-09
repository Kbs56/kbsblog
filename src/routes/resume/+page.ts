export async function load() {
	try {
		const resume = await import('/src/routes/resume/resume.md');

		return {
			content: resume.default,
			meta: resume.metadata
		};
	} catch (e) {
		console.log(e);
	}
}
