import RootLayout from 'app/layout';
import Header from './components/Header';
import { Home } from './home-page';

export const metadata = {
	title: 'Rick & Morty - Home',
	width: 'device-width',
};

const Page = () => {
	return (
		<RootLayout>
			<Header />
			<main>
				<Home />
			</main>
		</RootLayout>
	);
};

export default Page;
