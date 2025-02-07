/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: { unoptimized: true },
	distDir: "out",
	basePath: "/memory-lane",
	trailingSlash: true,
};

export default nextConfig;
