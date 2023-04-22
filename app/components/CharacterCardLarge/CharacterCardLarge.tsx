import { Character } from 'app/types';
import Image from 'next/image';
import styles from './CharacterCardLarge.module.css';
import { MaleIcon } from '../MaleIcon';
import { FemaleIcon } from '../FemaleIcon';

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
			<figure className={styles.card}>
				<h3 className={styles.h3}>{species}</h3>
				<Image
					className={styles.image}
					alt={name}
					src={image}
					width={200}
					height={200}
				/>
				<figcaption className={styles.textContainer}>
					<h1 className={styles.h1}>{name}</h1>
					{gender === 'Male' && <MaleIcon fillColor={`white`} />}
					{gender === 'Female' && <FemaleIcon fillColor={`white`} />}
					<h2>Spawned {created.substring(0, 10)}</h2>
					<h3>Status: {status}</h3>
				</figcaption>
			</figure>
		</>
	);
};

export default CharacterCard;
