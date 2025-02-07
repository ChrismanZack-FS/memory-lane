import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from "react";
import Markdown from "react-markdown";

const POSTS_DIR = path.join(process.cwd(), "posts");

export async function generateStaticParams() {
	const files = fs.readdirSync(POSTS_DIR);

	return files.map((file) => ({
		slug: file.replace(".md", ""),
	}));
}

async function getPostData(slug) {
	const filePath = path.join(POSTS_DIR, `${slug}.md`);
	const fileContent = fs.readFileSync(filePath, "utf8");
	const { content } = matter(fileContent);
	return { content };
}

export default async function BlogPost({ params }) {
	const { slug } = params;
	const post = await getPostData(slug);

	return (
		<article className="prose bg-gray-900 text-green-400 p-6 rounded-lg shadow-md">
			<h1 className="text-2xl font-bold">{slug}</h1>
			<Markdown>{post.content}</Markdown>
		</article>
	);
}
