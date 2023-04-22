import NavigationLink from './components/NavigationLink';
import styles from './home-page.module.css';
import Image from 'next/image';
import EntryCard from './components/EntryCard';

export const Home = () => {
	return (
		<section className={styles.section}>
			<EntryCard
				path="/episode"
				heading="EPISODES"
				alt="episodes"
				src="/poster.png"
			/>
			<EntryCard
				path="/location"
				heading="WORLDS"
				alt="worlds"
				src="/portal.png"
			/>
			<EntryCard
				path="/character"
				heading="CHARACTERS"
				alt="character"
				src="/characters.png"
			/>
		</section>
	);
};
