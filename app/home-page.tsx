import RatioNextImage from './components/RatioNextImage';
import NavigationButton from './components/NavigationButton';
import styles from './home-page.module.css';

export const Home = () => {
	return (
		<section className={styles.section}>
			<div className={styles.navigationWrapper}>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					className={styles.image}
					alt="episodes"
					src="/71kNX3FS2SL._AC_UF894,1000_QL80_.jpg"
				/>
				<NavigationButton path={'/episode'}>Episodes</NavigationButton>
			</div>
			<div className={styles.navigationWrapper}>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					className={styles.image}
					alt="character"
					src="/9786ec883756c755df35a331ff902f3b.png"
				/>
				<NavigationButton path={'/character'}>Characters</NavigationButton>
			</div>
			<div className={styles.navigationWrapper}>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img className={styles.image} alt="worlds" src="/pmwrvhpak9741.jpeg" />
				<NavigationButton path={'/location'}>Worlds</NavigationButton>
			</div>
		</section>
	);
};
