import { Episode as EpisodeProps } from "@types";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

const Episode = (episodeData: EpisodeProps): JSX.Element => {
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
            {episodeData.characters.map((characterUrl) => (
              <li key={characterUrl}>{characterUrl}</li>
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

export const getServerSideProps: GetServerSideProps<EpisodeProps> = async (
  context
) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/episode/${context.params?.id}`
  );
  const episodeData: EpisodeProps = await res.json();
  console.log("🚀 ~ file: [id].tsx:43 ~ episodeData:", episodeData);
  return { props: episodeData };
};

export default Episode;
