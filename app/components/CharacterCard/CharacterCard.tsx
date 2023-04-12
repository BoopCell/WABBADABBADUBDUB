import { Character } from 'app/types';
import Image from 'next/image';

const CharacterCard: React.FC<Character> = ({
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
}) => {
	return (
		<>
			<figure>
				<figcaption>
					<h1>{name}</h1>
					<h2>Date of creation: {created}</h2>
					<h3>Species: {species}</h3>
					<h3>Gender: {gender}</h3>
					<h3>Status: {status}</h3>
				</figcaption>
				<Image alt={name} src={image} width={200} height={200} />
			</figure>
		</>
	);
};

export default CharacterCard;
