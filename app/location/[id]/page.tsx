import Header from 'app/components/Header';
import RootLayout from 'app/layout';
import { Location as LocationData, Character } from 'app/types';
import { Location } from './location-page';

export const metadata = {
	title: 'My Page Title',
};

export const getLocation = async (id: number) => {
	const res = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
	/* const 	res = await fetch("https://rickandmortyapi.com/api/location");
  const res = await fetch("https://rickandmortyapi.com/api/episode"); */
	const locationData: LocationData = await res.json();

	const { residents } = locationData;

	const characters = await Promise.all(
		residents.map(async (resident) => {
			const res = await fetch(
				`https://rickandmortyapi.com/api/character/${resident.slice(-2)}`,
			);
			const character: Character = await res.json();
			return character;
		}),
	);
	const uniqueCharacters = characters.filter(
		(character, index, self) =>
			index === self.findIndex((char) => char.id === character.id),
	);

	return { locationData, uniqueCharacters };
};

const Page = async ({
	params: { id },
}: {
	params: { id: number };
}): Promise<JSX.Element> => {
	const { locationData, uniqueCharacters } = await getLocation(id);
	return (
		<RootLayout>
			<Header />
			<Location locationData={locationData} characters={uniqueCharacters} />;
		</RootLayout>
	);
};

export default Page;
