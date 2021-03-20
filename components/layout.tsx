import Head from 'next/head';

export default function Layout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="layout">
			<Head>
				<link rel="icon" href="/favicon.ico"/>
				<meta name="og:title" content="Vampire Companion"/>
			</Head>
			<main>{ children }</main>
		</div>
	);
};