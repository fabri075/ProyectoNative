import * as FileSystem from "expo-file-system";
import { fetchPublication, insertPublication } from "../../../db";
export const SELECTED_PUBLICATION = "SELECTED_PUBLICATION";
export const ADD_PUBLICATION = "ADD_PUBLICATION";
export const LOAD_PUBLICATIONS = "LOAD_PUBLICATIONS";

export const selectedPublication = (id) => ({
  type: SELECTED_PUBLICATION,
  publicationId: id,
});

export const addPublication = (id, title, description, image, autor, fecha) => {
  return async (dispatch) => {
    const fileName = image.split("/").pop();
    const Path = FileSystem.documentDirectory + fileName;
    try {
      FileSystem.moveAsync({
        from: image,
        to: Path,
      });

      const result = await insertPublication(
        id,
        title,
        description, 
        image, 
        autor,
        fecha
      );
    } catch (error) {
      throw error;
    }
    dispatch({ type: ADD_PUBLICATION, payload: { id, title, description, image: Path, autor, fecha } });
  };
};

export const loadPublication = () => {
  return async (dispatch) => {
    try {
      const result = await fetchPublication();
      dispatch({type: LOAD_PUBLICATIONS, publications: result.rows._array})
    } catch (error) {
      throw error;
    }
  }
}
