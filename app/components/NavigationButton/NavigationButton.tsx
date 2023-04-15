'use client';

import styles from './NavigationButton.module.css';
import { useRouter } from 'next/navigation';

type Props = {
	children: React.ReactNode;
	path: any;
};
const NavigationButton: React.FC<Props> = ({ children, path }) => {
	const router = useRouter();
	return (
		<button className={styles.button} onClick={() => router.push(path)}>
			{children}
		</button>
	);
};

export default NavigationButton;
