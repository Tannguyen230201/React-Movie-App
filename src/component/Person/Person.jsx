import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Person/Person.scss";
import Content from "../Content/Content";
import LoadingIcon from "../Loading/Loading";

// const style = {
// //   width: "100%",
//   maxWidth: "1250px",
//   padding: "0 0 0px 0",
// };

const Person = () => {
  const [person, setPerson] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US`
      )
        .then((res) => res.json())
        .then((data) => setPerson(data));
      setLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
  }, [id]);
  return loading ? (
    <LoadingIcon />
  ) : (
    <div className="wrap_person">
      <div className="wrap1">
        <div className="img_person">
          <img
            src={`https://image.tmdb.org/t/p/original/${person?.profile_path}`}
            alt="img"
          />
        </div>
        <div className="paragraph">
          <h2>{person?.name} ({person?.birthday}) </h2>        
          <p>{person?.biography}</p>
        </div>
      </div>
      <div className="grap2">
        <Content movie='person' link="movie" id={id} typeName="movie_credits" name="MEDIAS" />
      </div>
    </div>
  );
};

export default Person;
