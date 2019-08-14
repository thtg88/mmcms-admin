import { getActions } from '../base/actions';
import { reducerName } from './variables';

const actions = getActions(reducerName);

// action creators
export const changePageResources = payload => ({
    type: actions.CHANGE_PAGE_RESOURCES,
	payload,
});

export const clearMetadataResourceCreate = payload => ({
    type: actions.CLEAR_METADATA_RESOURCE_CREATE,
});

export const clearMetadataResourceEdit = payload => ({
    type: actions.CLEAR_METADATA_RESOURCE_EDIT,
});

export const clearMetadataResourceGenerateVariants = payload => ({
    type: actions.CLEAR_METADATA_RESOURCE_GENERATE_VARIANTS,
});

export const clearMetadataResources = payload => ({
    type: actions.CLEAR_METADATA_RESOURCES,
    payload,
});

export const createResource = payload => ({
    type: actions.CREATE_RESOURCE_REQUEST,
    payload,
});

export const destroyResource = payload => ({
    type: actions.DESTROY_RESOURCE_REQUEST,
    payload,
});

export const findResource = payload => ({
    type: actions.FIND_RESOURCE_REQUEST,
    payload,
});

export const generateVariants = payload => ({
    type: actions.GENERATE_VARIANTS_RESOURCE_REQUEST,
    payload,
});

export const getAllResources = payload => ({
    type: actions.GET_ALL_RESOURCES_REQUEST,
    payload,
});

export const getPaginatedResources = payload => ({
    type: actions.GET_PAGINATED_RESOURCES_REQUEST,
    payload,
});

export const getClubOrderLines = payload => ({
    type: actions.GET_CLUB_ORDER_LINES_REQUEST,
    payload,
});

export const publishResource = payload => ({
    type: actions.PUBLISH_RESOURCE_REQUEST,
    payload,
});

export const recoverResource = payload => ({
    type: actions.RECOVER_RESOURCE_REQUEST,
    payload,
});

export const searchResources = payload => ({
    type: actions.SEARCH_RESOURCES_REQUEST,
    payload,
});

export const setRelationshipItem = payload => ({
    type: actions.SET_RELATIONSHIP_ITEM_RESOURCE,
    payload,
});

export const unpublishResource = payload => ({
    type: actions.UNPUBLISH_RESOURCE_REQUEST,
    payload,
});

export const unsetRelationshipItem = payload => ({
    type: actions.UNSET_RELATIONSHIP_ITEM_RESOURCE,
    payload,
});

export const updateResource = payload => ({
    type: actions.UPDATE_RESOURCE_REQUEST,
    payload,
});

export default actions;