'use client';
import { Location } from 'app/types';
import CardGrid from 'app/components/CardGrid';
import LocationCard from 'app/components/LocationCard';

export const metadata = {
	title: 'Location page',
};

const Locations = ({ locations }: { locations: Location[] }) => {
	return (
		<>
			<h1>Worlds</h1>
			{locations.map((location) => {
				return (
					<CardGrid key={location.id}>
						<LocationCard {...location}></LocationCard>
					</CardGrid>
				);
			})}
		</>
	);
};

export default Locations;
