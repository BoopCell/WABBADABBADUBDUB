import { useRouter } from 'next/navigation';

import styles from './EpisodeCard.module.css';

const EpisodeCard: React.FC<any> = ({ name, episodeNumber, airDate, id }) => {
	const router = useRouter();
	return (
		<li className={styles.listItem}>
			<a className={styles.link} onClick={() => router.push(`/episode/${id}`)}>
				<div className={styles.episodeTag}>
					<p className={styles.episodeNumber}>{episodeNumber}</p>
				</div>
				<h1 className={styles.name}>{name}</h1>
				<p className={styles.airDate}>{airDate}</p>
			</a>
		</li>
	);
};
export default EpisodeCard;
