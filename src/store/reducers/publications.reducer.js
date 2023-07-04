import { PUBLICATIONS } from "../../data/publications";
import { SELECTED_PUBLICATION } from "../actions/publication.action";

const initialState = {
    publications: PUBLICATIONS,
    selected: null,
  };
  
  const PublicationsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SELECTED_PUBLICATION:
        const IndexPub = state.publications.findIndex(
          (pub) => pub.id === action.publicationId
        );
        if (IndexPub === -1) return state;
        return { ...state, selected: state.publications[IndexPub] };
      default:
        return state;
    }
  };
  
  export default PublicationsReducer;