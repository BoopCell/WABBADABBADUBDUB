import { Episode } from 'app/types';

import styles from './EpisodeCard.module.css';

const EpisodeCard: React.FC<Episode> = ({ id, name, episode, air_date }) => (
	<li className={styles.listItem}>
		<div className={styles.card}>
			<div className={styles.episodeTag}>
				<p className={styles.episodeNumber}>{episode}</p>
			</div>
			<h1 className={styles.name}>{name}</h1>
			<p className={styles.airDate}>{air_date}</p>
		</div>
	</li>
);
export default EpisodeCard;
