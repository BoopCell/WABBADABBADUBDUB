'use client';

import { useRouter } from 'next/navigation';
import CharacterCard from 'app/components/CharacterCardLarge';
import { Character, Episode } from 'app/types';
import EpisodeCard from 'app/components/EpisodeCard';
import CardGrid from 'app/components/CardGrid';

const CharacterPage = ({
	characterData,
	starringEpisodes,
}: {
	characterData: Character;
	starringEpisodes: Episode[];
}) => {
	const router = useRouter();
	const {
		id,
		name,
		status,
		species,
		type,
		gender,
		origin,
		location,
		image,
		episode,
		url,
		created,
	} = characterData;
	return (
		<>
			<CharacterCard
				id={id}
				name={name}
				status={status}
				species={species}
				type={type}
				gender={gender}
				origin={origin}
				location={location}
				image={image}
				episode={episode}
				url={url}
				created={created}
			/>
			<CardGrid>
				{starringEpisodes.map((starringEpisode) => (
					<EpisodeCard
						key={starringEpisode.id}
						id={starringEpisode.id}
						name={starringEpisode.name}
						air_date={starringEpisode.air_date}
						episode={starringEpisode.episode}
						characters={starringEpisode.characters}
						url={starringEpisode.url}
						created={starringEpisode.created}
					/>
				))}
			</CardGrid>
			<button
				type="button"
				title="Go back"
				role="link"
				onClick={() => router.back()}
			>
				Back
			</button>
		</>
	);
};

export default CharacterPage;
