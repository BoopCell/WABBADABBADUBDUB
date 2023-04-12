'use client';
import { useRouter } from 'next/navigation';

export const Home = () => {
	const router = useRouter();
	return (
		<section>
			<button type="button" onClick={() => router.push('/episode')}>
				Episodes
			</button>
			<button type="button" onClick={() => router.push('/character')}>
				Characters
			</button>
			<button type="button" onClick={() => router.push('/location')}>
				Worlds
			</button>
		</section>
	);
};
