import { CharacterResponse } from "@types";
import Image from "next/image";
import { useRouter } from "next/router";
export const CharacterPage = (props: CharacterResponse) => {
  const router = useRouter();
  return (
    <>
      <h2>Characters</h2>
      <ul>
        {props.results.map((character) => {
          return (
            <li key={character.id}>
              <a onClick={() => router.push(`/character/${character.id}`)}>
                <figure>
                  <figcaption>
                    <h3>{character.name}</h3>
                    <p>Date of creation: {character.created}</p>
                    <p>Species: {character.species}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Status: {character.status}</p>
                  </figcaption>
                  <Image
                    alt={character.name}
                    src={character.image}
                    width={200}
                    height={200}
                  />
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
  const res = await fetch("https://rickandmortyapi.com/api/character");
  /* const res = await fetch("https://rickandmortyapi.com/api/location");
    const res = await fetch("https://rickandmortyapi.com/api/episode"); */
  const characters: CharacterResponse = await res.json();
  return { props: characters };
};
export default CharacterPage;
