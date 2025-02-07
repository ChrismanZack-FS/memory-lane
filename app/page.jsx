import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default function Home() {
	const posts = getPosts();

	return (
		<main className="max-w-2xl mx-auto p-6 bg-background text-text font-sans">
			<h1 className="text-2xl font-bold mb-4">My Blog</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.slug} className="mb-2">
						<Link href={`/blog/${post.slug}`} className="text-blue-500">
							{post.title}
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
