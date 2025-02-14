import Link from "next/link";
import { getPosts } from "@/lib/posts";
import "../styles/globals.scss";

export default function Home() {
	const posts = getPosts();

	return (
		<main>
			<h1>My Blog</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.slug} className="mb-2">
						<Link href={`/blog/${post.slug}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
