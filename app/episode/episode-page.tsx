'use client';

import EpisodeCard from 'app/components/EpisodeCard';
import CardGrid from 'app/components/CardGrid';
import { EpisodeResponse } from 'app/types';

export const EpisodePage = (episodes: EpisodeResponse) => {
	return (
		<>
			<h1>Episodes</h1>
			<CardGrid>
				{episodes.results.map((episode) => (
					<a href={`/episode/${episode.id}`} key={episode.id}>
						<EpisodeCard
							name={episode.name}
							air_date={episode.air_date}
							episode={episode.episode}
							id={episode.id}
							characters={episode.characters}
							url={episode.url}
							created={episode.created}
						></EpisodeCard>
					</a>
				))}
			</CardGrid>
		</>
	);
};

export default EpisodePage;
