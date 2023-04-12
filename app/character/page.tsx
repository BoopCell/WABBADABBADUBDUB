import CharacterPage from './characters-page';
import { CharacterResponse } from 'app/types';
import RootLayout from 'app/layout';
import Header from 'app/components/Header';

const getCharacters = async () => {
	const res = await fetch('https://rickandmortyapi.com/api/character');
	const characters: CharacterResponse = await res.json();
	return characters;
};

const Page = async () => {
	const { results } = await getCharacters();
	return (
		<RootLayout>
			<Header />
			<CharacterPage characters={results} />
		</RootLayout>
	);
};
export default Page;
