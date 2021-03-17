import Head from 'next/head';

export default function Layout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="md:container mx-auto">
			<Head>
				<link rel="icon" href="/favicon.ico"/>
				<meta name="og:title" content="Vampire Companion"/>
			</Head>
			<header></header>
			<main>{ children }</main>
		</div>
	);
};