import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Box, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import Slider from 'react-slick';

interface Movie {
  id: number;
  title: string;
  director: string;
  duration: number;
  image?: string;
  description?: string;
  budget?: number;
}

const defaultMovies: Movie[] = [
  { id: 1, title: "Inception", director: "Christopher Nolan", duration: 148, image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg" },
  { id: 2, title: "The Matrix", director: "Lana Wachowski, Lilly Wachowski", duration: 136, image: "https://image.tmdb.org/t/p/w500/aoiY3X1r9i3p3ep1h9iF0G3t8u.jpg" },
  { id: 3, title: "Interstellar", director: "Christopher Nolan", duration: 169, image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg" },
  { id: 4, title: "The Dark Knight", director: "Christopher Nolan", duration: 152, image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
  { id: 5, title: "Pulp Fiction", director: "Quentin Tarantino", duration: 154, image: "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg" },
];

const StyledCard = styled(Card)({
  borderRadius: '20px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>(defaultMovies);
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState<number | "">("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState<number | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMovie: Movie = {
      id: nextMovieId(movies),
      title,
      director,
      duration: Number(duration),
      image,
      description,
      budget: budget ? Number(budget) : undefined,
    };
    setMovies([...movies, newMovie]);
    setTitle("");
    setDirector("");
    setDuration("");
    setImage("");
    setDescription("");
    setBudget("");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Mes Films Préférés</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Slider {...settings} style={{ width: '80%' }}>
          {movies.map((movie) => (
            <Box key={movie.id} p={2}>
              <StyledCard>
                {movie.image && <CardMedia component="img" height="200" image={movie.image} alt={movie.title} />}
                <CardContent>
                  <Typography variant="h5" component="div">{movie.title}</Typography>
                  <Typography variant="body2" color="text.secondary">Réalisateur: {movie.director}</Typography>
                  <Typography variant="body2" color="text.secondary">Durée: {movie.duration} minutes</Typography>
                  {movie.description && <Typography variant="body2" color="text.secondary">Description: {movie.description}</Typography>}
                  {movie.budget && <Typography variant="body2" color="text.secondary">Budget: {movie.budget} millions</Typography>}
                </CardContent>
              </StyledCard>
            </Box>
          ))}
        </Slider>
      </Box>
      <Typography variant="h4" gutterBottom>Ajouter un Film</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Titre" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <TextField label="Réalisateur" value={director} onChange={(e) => setDirector(e.target.value)} required />
        <TextField label="Durée (minutes)" type="number" value={duration} onChange={(e) => setDuration(e.target.value)} required />
        <TextField label="Image (URL)" value={image} onChange={(e) => setImage(e.target.value)} />
        <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <TextField label="Budget (millions)" type="number" value={budget} onChange={(e) => setBudget(e.target.value)} />
        <Button type="submit" variant="contained" color="primary">Ajouter</Button>
      </Box>
    </Container>
  );
};

const nextMovieId = (movies: Movie[]) => {
  return movies.reduce((maxId, movie) => Math.max(maxId, movie.id), 0) + 1;
};

export default MovieList;
