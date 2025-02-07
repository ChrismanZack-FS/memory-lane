import "@/app/globals.css";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body className="bg-background text-text font-sans">
				<header className="p-4 bg-primary text-white"></header>
				<main className="p-6">{children}</main>
				<footer className="p-4 bg-primary text-white text-center"></footer>
			</body>
		</html>
	);
}
