import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import VideogameDetail from "../../components/VideogameDetail/VideogameDetail";
import { Videogame } from "../../interfaces/Videogame";
import { RootState } from "../../redux/store";
import { loadVideogameThunk } from "../../redux/thunks/videogamesThunk";

export const VideogameDetailPageStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const VideogameDetailPage = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.usersReducer);
  const videogame = useSelector(
    (state: RootState) => state.videogameDetailReducer
  );

  useEffect(() => {
    dispatch(loadVideogameThunk(id as string));
  }, [dispatch, id]);
  interface VideogameDetail {
    videogame: Videogame;
  }
  return (
    <>
      {(videogame as unknown as VideogameDetail).videogame ? (
        <VideogameDetailPageStyle>
          <VideogameDetail
            user={user}
            videogame={(videogame as unknown as VideogameDetail).videogame}
          />
        </VideogameDetailPageStyle>
      ) : (
        <></>
      )}
    </>
  );
};

export default VideogameDetailPage;
