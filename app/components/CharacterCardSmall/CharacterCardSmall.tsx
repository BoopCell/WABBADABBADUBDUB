import { Character } from 'app/types';
import Image from 'next/image';
import styles from './CharacterCardSmall.module.css';
import { MaleIcon } from '../MaleIcon';
import { FemaleIcon } from '../FemaleIcon';

const CharacterCard: React.FC<Character> = ({
	name,
	status,
	species,
	gender,
	image,
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
					width={80}
					height={80}
				/>
				<figcaption className={styles.textContainer}>
					<p className={styles.p}>{name}</p>
					{gender === 'Male' && (
						<MaleIcon fillColor={`white`} height="15px" width="15px" />
					)}
					{gender === 'Female' && (
						<FemaleIcon fillColor={`white`} height="15px" width="15px" />
					)}
					<p className={styles.p}>Spawned {created.substring(0, 10)}</p>
					<p className={styles.p}>Status: {status}</p>
				</figcaption>
			</figure>
		</>
	);
};

export default CharacterCard;
