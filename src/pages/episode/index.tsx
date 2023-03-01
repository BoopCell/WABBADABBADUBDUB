import { EpisodeResponse } from "@types";
import Image from "next/image";
import { useRouter } from "next/router";
export const EpisodePage = (props: EpisodeResponse) => {
  const router = useRouter();
  return (
    <>
      <h2>Episodes</h2>
      <ul>
        {props.results.map((episode) => {
          return (
            <li key={episode.id}>
              <a onClick={() => router.push(`/episode/${episode.id}`)}>
                <figure>
                  <figcaption>
                    <h1>{episode.name}</h1>
                    <h2>Episode: {episode.episode}</h2>
                    <h3>Air date: {episode.air_date}</h3>
                    <h3>Creation date: {episode.created}</h3>
                    <ul>
                      {episode.characters.map((characterUrl) => (
                        <li key={characterUrl}>{characterUrl}</li>
                      ))}
                    </ul>
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
export const getServerSideProps = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/episode");
  /* const res = await fetch("https://rickandmortyapi.com/api/location");
    const res = await fetch("https://rickandmortyapi.com/api/episode"); */
  const Episodes: EpisodeResponse = await res.json();
  return { props: Episodes };
};
export default EpisodePage;
