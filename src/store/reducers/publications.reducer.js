import { PUBLICATIONS } from "../../data/publications";
import { SELECTED_PUBLICATION, ADD_PUBLICATION, LOAD_PUBLICATIONS } from "../actions/publication.action";
import Publication from "../../models/Publication";

const initialState = {
  publications: PUBLICATIONS,
  selected: null,
};

const PublicationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_PUBLICATION:
      const IndexPub = state.publications.findIndex((pub) => pub.id === action.publicationId);
      if (IndexPub === -1) return state;
      return { ...state, selected: state.publications[IndexPub] };
    case ADD_PUBLICATION:
      const newPublication = new Publication(action.payload.id, action.payload.title, action.payload.description, action.payload.autor, action.payload.image, action.payload.fecha);
      return { ...state, publications: state.publications.concat(newPublication) };
      case LOAD_PUBLICATIONS: 
      //Concateno mis publicaciones de prueba del archivo json con las guardadas en storage
      const actualPublications = state.publications;
      const storagePublications = action.publications.map(item =>
        new Publication(
        item.id.toString(),
        item.title,
        item.description,
        item.autor,
        item.image,
        item.date
      ))
      //Realizo un filtro para que no se vuelvan a guardar en mi state los registros de storage al realizar el metodo nuevamente
      const filteredPublications = storagePublications.filter(
        (stPub) => !actualPublications.some((actualPub) => actualPub.id === stPub.id)
      );
      return { ...state, publications: actualPublications.concat(filteredPublications)};
    default:
      return state;
  }
};

export default PublicationsReducer;
