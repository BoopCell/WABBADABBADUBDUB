'use client';

import CardGrid from 'app/components/CardGrid';
import { Character, Episode as EpisodeProps } from 'app/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Episode = ({
	episodeData,
	starringCharacters,
}: {
	episodeData: EpisodeProps;
	starringCharacters: Character[];
}): JSX.Element => {
	const router = useRouter();
	return (
		<>
			<figure>
				<figcaption>
					<h1>{episodeData.name}</h1>
					<h2>Episode: {episodeData.episode}</h2>
					<h3>Air date: {episodeData.air_date}</h3>
					<h3>Creation date: {episodeData.created}</h3>
					<ul>
						{starringCharacters.map((starringCharacter) => (
							<CardGrid key={starringCharacter.id}>
								<a
									onClick={() =>
										router.push(`/character/${starringCharacter.url.slice(-2)}`)
									}
								>
									<h4>{starringCharacter.name}</h4>
									<Image
										alt={starringCharacter.image}
										src={starringCharacter.image}
										width={50}
										height={50}
									/>
								</a>
							</CardGrid>
						))}
					</ul>
				</figcaption>
			</figure>
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

export default Episode;
