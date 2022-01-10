import{
    CARGAR_TRABAJOS,
    AGREGAR_ROL_FILTRO,
    ACTUALIZAR_TRABAJOS_FILTRADOS,
    LIMPIAR_TRABAJOS,
    REMOVER_FILTRO
} from '../types';

//Listar trabajos
export function loadJobsAction(data){
    return (dispatch) => {
        dispatch(loadJobs(data));

     
    }
}

const loadJobs = (dataJobs) => ({
    type: CARGAR_TRABAJOS,
    payload: dataJobs
});


//Agregar una caracteristica al filtro de trabajos
export function addFilterJobFeatureAction(feature){
    return (dispatch) => {
        dispatch(addFilterJobFeature(feature))
    }
}
const addFilterJobFeature = (feature) => ({
    type: AGREGAR_ROL_FILTRO,
    payload: feature
});


//Actualizar la lista de trabajos segun los filtros
export function updateJobsFeatureAction(feature){
    return (dispatch) => {
        dispatch(updateJobsFeature(feature))
    }
}
const updateJobsFeature = (feature) => ({
    type: ACTUALIZAR_TRABAJOS_FILTRADOS,
    payload: feature
});


//Limpiar los trabajos filtrados 
export function clearJobsFilterAction(){
    return(dispatch) => {
        dispatch(clearJobsFilter())
    }
}
const clearJobsFilter = () => ({
    type: LIMPIAR_TRABAJOS
});

//Remover 1 item del filtro
export function removeFilterAction(feature){
    return(dispatch) => {
        dispatch(removeFilter(feature))
    }
}
const removeFilter = (feature) => ({
    type: REMOVER_FILTRO,
    payload:feature

});
