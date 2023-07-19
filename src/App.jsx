import { Container, Typography, Box } from "@mui/material";
import Character from "./components/Character";
import CharacterSkeleton from "./components/CharacterSkeleton";
import { useEffect, useState } from "react";

const fakePromise = () => new Promise((resolve) => setTimeout(resolve, 2500));

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      await fakePromise();
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      console.log(data);
      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Typography
        variant="h3"
        textAlign={"center"}
        sx={{ mt: 5, mb: 3, color: "white" }}
      >
        Rick & Morty
      </Typography>
      <Box sx={{ display: "grid", gap: 2, maxWidth: 250, margin: "auto" }}>
        {loading
          ? Array.from(Array(20).keys()).map((key) => (
              <CharacterSkeleton key={key} />
            ))
          : characters.map((character) => (
              <Character
                key={character.id}
                character={character}
                name={character.name}
                image={character.image}
              />
            ))}
      </Box>
    </Container>
  );
}
