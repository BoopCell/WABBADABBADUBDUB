import Header from 'app/components/Header';
import RootLayout from 'app/layout';
import { Character, Episode as EpisodeProps } from 'app/types';
import Episode from './episode-page';

const getEpisodes = async (id: number) => {
	const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
	const episodeData: EpisodeProps = await res.json();
	const { characters } = episodeData;
	const starringCharacters = await Promise.all(
		characters.map(async (resident) => {
			const res = await fetch(
				`https://rickandmortyapi.com/api/character/${resident.slice(-2)}`,
			);
			const character: Character = await res.json();
			return character;
		}),
	);
	return { episodeData, starringCharacters };
};

const Page = async ({ params: { id } }: { params: any }) => {
	const { episodeData, starringCharacters } = await getEpisodes(id);
	return (
		<RootLayout>
			<Header />
			<Episode
				episodeData={episodeData}
				starringCharacters={starringCharacters}
			/>
		</RootLayout>
	);
};
export default Page;
