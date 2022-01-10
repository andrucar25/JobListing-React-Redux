import{
    CARGAR_TRABAJOS,
    AGREGAR_ROL_FILTRO,
    ACTUALIZAR_TRABAJOS_FILTRADOS,
    LIMPIAR_TRABAJOS,
    REMOVER_FILTRO
} from '../types';

//cada reducer tiene su propio state
const initialState = {
    jobs: [],
    filters: []
}

export default function(state = initialState, action) {
    switch(action.type){

        case CARGAR_TRABAJOS:
            return {
                ...state,
                jobs: action.payload
            }
        case AGREGAR_ROL_FILTRO:
            return{
                ...state,
                filters:[...state.filters, action.payload]
            }
        case ACTUALIZAR_TRABAJOS_FILTRADOS:
            return{
                ...state,
                jobs: state.jobs.filter(listing => [...listing.languages, ...listing.tools, listing.role, listing.level].includes(action.payload))
            }
        case LIMPIAR_TRABAJOS:
            return{
                ...state,
                filters: []
            }
        case REMOVER_FILTRO:
            return{
                ...state,
                filters: state.filters.filter( item => item !== action.payload )
            }
        default:
            return state;
    }
}