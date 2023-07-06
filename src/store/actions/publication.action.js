import * as FileSystem from "expo-file-system";
export const SELECTED_PUBLICATION = "SELECTED_PUBLICATION";
export const ADD_PUBLICATION = "ADD_PUBLICATION";

export const selectedPublication = (id) => ({
  type: SELECTED_PUBLICATION,
  publicationId: id,
});

export const addPublication = (id, title, description, image, autor) => {
  return async (dispatch) => {
    const fileName = image.split("/").pop();
    const Path = FileSystem.documentDirectory + fileName;
    try {
      FileSystem.moveAsync({
        from: image,
        to: Path,
      });
    } catch (error) {
      console.log(error.message);
      throw error;
    }
    dispatch({ type: ADD_PUBLICATION, payload: { id, title, description, image: Path, autor } });
  };
};
