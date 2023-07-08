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
      const fechaActual = new Date();
      const anio = fechaActual.getFullYear();
      const mes = fechaActual.getMonth() + 1;
      const dia = fechaActual.getDate();
      const fecha = `${anio}-${mes < 10 ? "0" + mes : mes}-${dia < 10 ? "0" + dia : dia}`;
      const newPublication = new Publication(action.payload.id, action.payload.title, action.payload.description, action.payload.autor, action.payload.image, fecha);
      return { ...state, publications: state.publications.concat(newPublication) };
      // case LOAD_PUBLICATIONS: 
      // return {
      //   ...state, publications: action.publications.map(item => new Publication())
      // }
    default:
      return state;
  }
};

export default PublicationsReducer;
