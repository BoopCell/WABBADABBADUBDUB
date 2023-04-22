'use client';

import styles from './NavigationLink.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type Props = {
	children: React.ReactNode;
	path: any;
};
const NavigationLink: React.FC<Props> = ({ children, path }) => {
	return <Link href={path}>{children}</Link>;
};

export default NavigationLink;
