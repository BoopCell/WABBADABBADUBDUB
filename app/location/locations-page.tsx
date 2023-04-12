'use client';

import { useRouter } from 'next/navigation';
import { Location } from 'app/types';

export const metadata = {
	title: 'Location page',
};

const Locations = ({ locations }: { locations: Location[] }) => {
	const router = useRouter();
	return (
		<>
			<h1>Worlds</h1>
			<ul>
				{locations.map((location) => {
					return (
						<li key={location.id}>
							<a onClick={() => router.push(`/location/${location.id}`)}>
								<figure>
									<figcaption>
										<h1>{location.name}</h1>
										{location.dimension !== 'unknown' ? (
											<h3>{location.dimension}</h3>
										) : null}
									</figcaption>
								</figure>
							</a>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Locations;
