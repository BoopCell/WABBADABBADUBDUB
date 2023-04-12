'use client';

import EpisodeCard from 'app/components/EpisodeCard';
import CardGrid from 'app/components/CardGrid';
import { EpisodeResponse } from 'app/types';

export const EpisodePage = (episodes: EpisodeResponse) => {
	return (
		<>
			<h1>Episodes</h1>
			<CardGrid>
				{episodes.results.map((episode) => {
					return (
						<EpisodeCard
							key={episode.id}
							name={episode.name}
							airDate={episode.air_date}
							episodeNumber={episode.episode}
							id={episode.id}
						></EpisodeCard>
					);
				})}
			</CardGrid>
		</>
	);
};

export default EpisodePage;
