'use client';

import CardGrid from 'app/components/CardGrid';
import CharacterCardSmall from 'app/components/CharacterCardSmall';
import EpisodeCard from 'app/components/EpisodeCard';
import { Character, Episode as EpisodeProps } from 'app/types';

const Episode = ({
	episodeData,
	starringCharacters,
}: {
	episodeData: EpisodeProps;
	starringCharacters: Character[];
}): JSX.Element => {
	return (
		<>
			<EpisodeCard
				id={episodeData.id}
				name={episodeData.name}
				air_date={episodeData.name}
				episode={episodeData.episode}
				characters={episodeData.characters}
				url={episodeData.url}
				created={episodeData.created}
			/>
			<CardGrid>
				{starringCharacters.map((starringCharacter) => (
					<>
						<a
							title="Go to a character"
							href={`/character/${starringCharacter.url.slice(-2)}`}
						>
							<CharacterCardSmall
								id={starringCharacter.id}
								name={starringCharacter.name}
								status={starringCharacter.status}
								species={starringCharacter.species}
								type={starringCharacter.type}
								gender={starringCharacter.gender}
								origin={starringCharacter.origin}
								location={starringCharacter.location}
								image={starringCharacter.image}
								episode={starringCharacter.episode}
								url={starringCharacter.url}
								created={starringCharacter.created}
							/>
						</a>
					</>
				))}
			</CardGrid>
			<button type="button" title="Go back" role="link">
				Back
			</button>
		</>
	);
};

export default Episode;
