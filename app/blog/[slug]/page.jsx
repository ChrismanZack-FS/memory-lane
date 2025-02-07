import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from "react";
import ReactMarkdown from "react-markdown";

const POSTS_DIR = path.join(process.cwd(), "posts"); // Ensure "posts" directory is correct

// Generates dynamic paths for each blog post
export async function generateStaticParams() {
	const files = fs.readdirSync(POSTS_DIR);

	return files.map((file) => ({
		slug: file.replace(".md", ""),
	}));
}

// Fetches the content of a specific post based on the slug
async function getPostData(slug) {
	const filePath = path.join(POSTS_DIR, `${slug}.md`);
	const fileContent = fs.readFileSync(filePath, "utf8");
	const { content } = matter(fileContent);
	return { content };
}

export default async function BlogPost({ params }) {
	const { slug } = params; // Get slug from dynamic route
	const post = await getPostData(slug); // Fetch post data based on slug

	return (
		<article className="prose bg-gray-900 text-green-400 p-6 rounded-lg shadow-md">
			<h1 className="text-2xl font-bold mb-4">{slug}</h1>
			{/* Render markdown content */}
			<ReactMarkdown>{post.content}</ReactMarkdown>
		</article>
	);
}
