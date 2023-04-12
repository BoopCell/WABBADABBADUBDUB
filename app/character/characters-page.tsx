'use client';

import Header from 'app/components/Header/Header';
import { Character } from 'app/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CharacterPage = ({ characters }: { characters: Character[] }) => {
	const router = useRouter();
	return (
		<>
			<Header />
			<h1>Characters</h1>
			<ul>
				{characters.map(
					({ id, name, species, created, gender, status, image }) => {
						return (
							<li key={id}>
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
							</li>
						);
					},
				)}
			</ul>
		</>
	);
};
export default CharacterPage;
