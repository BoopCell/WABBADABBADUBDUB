import CardGrid from 'app/components/CardGrid';
import CharacterCardLarge from 'app/components/CharacterCardLarge';
import { Character } from 'app/types';

const CharacterPage = ({ characters }: { characters: Character[] }) => (
	<>
		<h1>Characters</h1>
		<CardGrid>
			{characters.map(
				({
					id,
					name,
					species,
					created,
					gender,
					status,
					image,
					type,
					episode,
					origin,
					location,
					url,
				}) => (
					<a href={`/character/${id}`} key={id}>
						<CharacterCardLarge
							id={id}
							name={name}
							status={status}
							species={species}
							type={type}
							gender={gender}
							origin={origin}
							location={location}
							episode={episode}
							image={image}
							url={url}
							created={created}
						/>
					</a>
				),
			)}
		</CardGrid>
	</>
);
export default CharacterPage;
