import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPosts() {
	const filenames = fs.readdirSync(postsDirectory);

	return filenames.map((filename) => {
		const filePath = path.join(postsDirectory, filename);
		const fileContents = fs.readFileSync(filePath, "utf8");
		const { data } = matter(fileContents);

		return {
			slug: filename.replace(".md", ""),
			...data,
		};
	});
}

export function getPostBySlug(slug) {
	const filePath = path.join(postsDirectory, `${slug}.md`);
	const fileContents = fs.readFileSync(filePath, "utf8");
	const { data, content } = matter(fileContents);

	return { slug, ...data, content };
}
