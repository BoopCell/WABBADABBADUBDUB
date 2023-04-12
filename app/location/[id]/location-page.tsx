'use client';

import { Location as LocationData, Character } from 'app/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const metadata = {
	title: 'My Page Title',
};

export const Location = ({
	locationData,
	characters,
}: {
	locationData: LocationData;
	characters: Character[];
}): JSX.Element => {
	const router = useRouter();
	return (
		<>
			<h1>{locationData.name}</h1>
			{locationData.dimension !== 'unknown' ? (
				<h3>{locationData.dimension}</h3>
			) : null}

			{characters.map((character) => (
				<li key={`${character.name}, image :${character.image} `}>
					<h4>{character.name}</h4>
					<Image
						alt={character.image}
						src={character.image}
						width={50}
						height={50}
					/>
				</li>
			))}
			<button
				type="button"
				title="Go back"
				role="link"
				onClick={() => router.back()}
			>
				Back
			</button>
		</>
	);
};
