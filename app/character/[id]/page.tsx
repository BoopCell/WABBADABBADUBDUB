import Header from 'app/components/Header';
import RootLayout from 'app/layout';
import { Character, Episode } from 'app/types';
import CharacterPage from './character-page';

const getCharacter = async (id: number) => {
	const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
	const characterData: Character = await res.json();
	const { episode } = characterData;
	const starringEpisodes: Episode[] = await Promise.all(
		episode.map(async (starringEpisode) => {
			const res = await fetch(
				`https://rickandmortyapi.com/api/episode/${starringEpisode.slice(-2)}`,
			);
			const episode: any = await res.json();
			return episode;
		}),
	);
	return { characterData, starringEpisodes };
};

const Page = async ({ params: { id } }: { params: { id: number } }) => {
	const { characterData, starringEpisodes } = await getCharacter(id);
	return (
		<RootLayout>
			<Header />
			{characterData && starringEpisodes ? (
				<CharacterPage
					characterData={characterData}
					starringEpisodes={starringEpisodes}
				/>
			) : (
				<div>Character not found</div>
			)}
		</RootLayout>
	);
};

export default Page;
