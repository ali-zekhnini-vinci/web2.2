type Movie = {
  title: string;
  director: string;
};

type PageTitleProps = {
  title: string;
};

type CinemaProps = {
  name: string;
  movie1: Movie;
  movie2: Movie;
};

const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";
  const movie1: Movie = {
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
  };
  const movie2: Movie = {
    title: "GOODBYE JULIA",
    director: "Mohamed Kordofani",
  };

  const cinema2Name = "UGC Toison d'Or";
  const movie3: Movie = {
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
  };
  const movie4: Movie = {
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
  };

  return (
    <div>
      <PageTitle title={pageTitle} />
      <Cinema name={cinema1Name} movie1={movie1} movie2={movie2} />
      <Cinema name={cinema2Name} movie1={movie3} movie2={movie4} />
    </div>
  );
};

const Cinema = (props: CinemaProps): JSX.Element => {
  return (
    <div className="Cinema">
      <h2>{props.name}</h2>
      <div className="listMovie">
        <ul>
          <li>
            <strong>{props.movie1.title}</strong> - Réalisateur :{" "}
            {props.movie1.director}
          </li>
          <li>
            <strong>{props.movie2.title}</strong> - Réalisateur :{" "}
            {props.movie2.director}
          </li>
        </ul>
      </div>
    </div>
  );
};

const PageTitle = (props: PageTitleProps) => {
  return <h2>{props.title}</h2>;
};

export default App;
