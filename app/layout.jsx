import "../styles/globals.scss";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body>
				<header></header>
				<main>{children}</main>
				<footer></footer>
			</body>
		</html>
	);
}
