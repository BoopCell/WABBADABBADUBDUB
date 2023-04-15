import { useRouter } from 'next/navigation';
import { Location } from 'app/types';

const LocationCard: React.FC<Location> = ({ name, dimension, id }) => {
	const router = useRouter();
	return (
		<a onClick={() => router.push(`/location/${id}`)}>
			<figure>
				<figcaption>
					<h1>{name}</h1>
					{dimension !== 'unknown' ? <h3>{dimension}</h3> : null}
				</figcaption>
			</figure>
		</a>
	);
};

export default LocationCard;
