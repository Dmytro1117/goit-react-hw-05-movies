import { Route, Routes } from "react-router-dom";
import { Container, Logo, Header, Link } from "./App.styled";
import { lazy, Suspense} from 'react';

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movie/Movie"));
const MovieDetails = lazy(() => import("../pages/MovieDetalis/MovieDetails"));
const Credits = lazy(() => import("./Credits/Credits"));
const Reviews = lazy(() => import("./Reviews"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const App = () => {
  return (
    <Container>   
      <Header>
        <Logo>
          <span role="img" aria-label="glyphicon glyphicon-facetime-video">
            💻
          </span>{" "}
          Home cinema
        </Logo>
        <nav>
          <Link to="/" end>Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Credits />} />
            <Route path="reviews" element={<Reviews />} />
          <Route path="*" element={<NotFound />} />
          </Route>
      </Routes>
      </Suspense>
    </Container>
  );
};
