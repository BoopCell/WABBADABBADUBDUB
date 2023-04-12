import Locations from './locations-page';
import { Location, LocationResponse } from 'app/types';
import RootLayout from 'app/layout';
import Header from 'app/components/Header';

export const metadata = {
	title: 'Location page',
};

const getLocations = async (): Promise<LocationResponse> => {
	const res = await fetch('https://rickandmortyapi.com/api/location');
	const result = await res.json();
	return result;
};

export const Page = async () => {
	const { results } = await getLocations();
	return (
		<RootLayout>
			<Header />
			<Locations locations={results} />
		</RootLayout>
	);
};

export default Page;
