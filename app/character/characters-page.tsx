'use client';

import CardGrid from 'app/components/CardGrid';
import Header from 'app/components/Header/Header';
import { Character } from 'app/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CharacterPage = ({ characters }: { characters: Character[] }) => {
	const router = useRouter();
	return (
		<>
			<h1>Characters</h1>
			{characters.map(
				({ id, name, species, created, gender, status, image }) => {
					return (
						<CardGrid key={id}>
							<a onClick={() => router.push(`/character/${id}`)}>
								<figure>
									<figcaption>
										<h3>{name}</h3>
										<p>Date of creation: {created}</p>
										<p>Species: {species}</p>
										<p>Gender: {gender}</p>
										<p>Status: {status}</p>
									</figcaption>
									<Image alt={name} src={image} width={200} height={200} />
								</figure>
							</a>
						</CardGrid>
					);
				},
			)}
		</>
	);
};
export default CharacterPage;
