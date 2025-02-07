import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";

export default async function BlogPost({ params }) {
	const post = getPostBySlug(params.slug);
	if (!post) return notFound();

	const processedContent = await remark().use(html).process(post.content);
	const contentHtml = processedContent.toString();

	return (
		<main className="max-w-2xl mx-auto p-6">
			<h1 className="text-2xl font-bold">{post.title}</h1>
			<p className="text-gray-500">{post.date}</p>
			<div dangerouslySetInnerHTML={{ __html: contentHtml }} className="mt-4" />
		</main>
	);
}
