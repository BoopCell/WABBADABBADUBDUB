import NavigationLink from '../NavigationLink';
import styles from './EntryCard.module.css';
import Image from 'next/image';

type Props = {
	path: string;
	alt: string;
	src: string;
	heading: string;
};

const EntryCard: React.FC<Props> = ({ path, alt, src, heading }) => (
	<NavigationLink path={path}>
		<div className={styles.wrapper}>
			<Image
				width={300}
				height={450}
				className={styles.image}
				alt={alt} //"episodes"
				src={src} //"/poster.png"
			/>
			<div className={styles.overlay}>
				<h1 className={styles.heading}>{heading}</h1>
			</div>
		</div>
	</NavigationLink>
);

export default EntryCard;
