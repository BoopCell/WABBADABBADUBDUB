import { Character as CharacterResponse } from "@types";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

const Character = (characterData: CharacterResponse): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <figure>
        <figcaption>
          <h1>{characterData.name}</h1>
          <h2>Date of creation: {characterData.created}</h2>
          <h3>Species: {characterData.species}</h3>
          <h3>Gender: {characterData.gender}</h3>
          <h3>Status: {characterData.status}</h3>
        </figcaption>
        <Image
          alt={characterData.name}
          src={characterData.image}
          width={200}
          height={200}
        />
      </figure>
      {characterData.episode.map((url) => (
        <li key={url}>
          <a onClick={() => router.push(`../episodes/${url.slice(-2)}`)}>
            {url}
          </a>
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

export const getServerSideProps: GetServerSideProps<CharacterResponse> = async (
  context
) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${context.params?.id}`
  );
  /* const res = await fetch("https://rickandmortyapi.com/api/location");
  const res = await fetch("https://rickandmortyapi.com/api/episode"); */
  const characterData: CharacterResponse = await res.json();
  return { props: characterData };
};

export default Character;
