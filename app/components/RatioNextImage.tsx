import NextImage from 'next/image';
import styles from './RatioNextImage.module.css';

interface Props {
	src: string;
	alt: string;
}

const RatioNextImage = ({ src, alt }: Props) => {
	return (
		<div className={styles.imageWrapper}>
			<NextImage fill src={src} alt={alt} />
		</div>
	);
};
export default RatioNextImage;
