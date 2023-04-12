'use client';

import { useRouter } from 'next/navigation';
import CharacterCard from 'app/components/CharacterCard';
import { Character, Episode } from 'app/types';

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
			{starringEpisodes.map((starringEpisode) => (
				<li key={starringEpisode.id}>
					<a
						onClick={() =>
							router.push(`/episode/${starringEpisode.url.slice(-2)}`)
						}
					>
						<h4>{starringEpisode.name}</h4>
					</a>
				</li>
			))}
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
