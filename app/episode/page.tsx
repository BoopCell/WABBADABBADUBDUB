import Header from 'app/components/Header';
import RootLayout from 'app/layout';
import { EpisodeResponse } from 'app/types';
import EpisodePage from './episode-page';

const getEpisodes = async () => {
	const res = await fetch('https://rickandmortyapi.com/api/episode');
	let episodes: EpisodeResponse = await res.json();
	return episodes;
};

export const Page = async () => {
	const episodes = await getEpisodes();
	return (
		<RootLayout>
			<Header />
			<EpisodePage {...episodes} />;
		</RootLayout>
	);
};

export default Page;
