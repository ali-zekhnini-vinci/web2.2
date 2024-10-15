const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const  Name = "UGC DeBrouckère";
  const  Movie1Title = "Film 1 - DeBrouckère";
  const  Movie1Director = "Director A";
  const  Movie2Title = "Film 2 - DeBrouckère";
  const  Movie2Director = "Director B";

  const cinema2Name = "UGC Toison d'Or";
  const cinema2Movie1Title = "Film 1 - Toison d'Or";
  const cinema2Movie1Director = "Director C";
  const cinema2Movie2Title = "Film 2 - Toison d'Or";
  const cinema2Movie2Director = "Director D";

  return (
    <div>
        <PageTitle 
          title={pageTitle}> 
        </PageTitle>

        <Cinema 
          name={Name}
          Movie1Title={Movie1Title} 
          Movie1Director={Movie1Director} 
          Movie2Title={Movie2Title} 
          Movie2Director={Movie2Director}>
        </Cinema>

        <Cinema 
          name={cinema2Name}
          Movie1Title={cinema2Movie1Title} 
          Movie1Director={cinema2Movie1Director} 
          Movie2Title={cinema2Movie2Title} 
          Movie2Director={cinema2Movie2Director}>
        </Cinema>

    </div>
  );
};

interface Cinema {
  name: string;
  Movie1Title: string;
  Movie1Director: string;
  Movie2Title: string;
  Movie2Director: string;
}

const Cinema = (props: Cinema): JSX.Element => {
  return (
      <div className="Cinema">
        <h2>{props.name}</h2>

        <div className="listMovie">
        <ul>
          <li>
            <strong>{props.Movie1Title}</strong> - Réalisateur :{" "}
            {props.Movie1Director}
          </li>
          <li>
            <strong>{props.Movie2Title}</strong> - Réalisateur :{" "}
            {props.Movie2Director}
          </li>
        </ul>
        </div>
      </div>
  );
};

interface Title {
  title: string;
}

const PageTitle = (props: Title) => {
  return (
    <h2>{props.title}</h2>
  );
};


export default App;
