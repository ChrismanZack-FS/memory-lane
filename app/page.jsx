import Link from "next/link";
import { getPosts } from "@/lib/posts";
import "@/app/globals.css";

export default function Home() {
	const posts = getPosts();

	return (
		<main className="min-h-screen bg-background text-text p-6">
			<h1 className="text-4xl font-bold text-secondary mb-6 text-center">
				My Blog
			</h1>
			<ul className="max-w-2xl mx-auto space-y-4">
				{posts.map((post) => (
					<li key={post.slug} className="border-l-4 border-secondary pl-4">
						<Link
							href={`/blog/${post.slug}`}
							className="text-lg font-semibold text-primary hover:text-secondary transition-colors"
						>
							{post.title}
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
