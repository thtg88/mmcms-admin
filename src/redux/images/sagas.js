import { all, fork } from 'redux-saga/effects';
import actions from './actions';
import {
    createResource,
    destroyResource,
    findResource,
    getPaginatedResources,
    regenerateThumbnails,
    updateResource,
} from './helper';
import {
    createResourceRequestBase,
    destroyResourceRequestBase,
    findResourceRequestBase,
    getPaginatedResourcesRequestBase,
    // recoverResourceRequestBase,
    regenerateThumbnailsRequestBase,
    updateResourceRequestBase,
} from '../base/sagas';

export const createResourceRequest = createResourceRequestBase(actions, createResource);

export const destroyResourceRequest = destroyResourceRequestBase(actions, destroyResource);

export const findResourceRequest = findResourceRequestBase(actions, findResource);

export const getPaginatedResourcesRequest = getPaginatedResourcesRequestBase(actions, getPaginatedResources);

// export const recoverResourceRequest = recoverResourceRequestBase(actions, recoverResource);

export const regenerateThumbnailsRequest = regenerateThumbnailsRequestBase(actions, regenerateThumbnails);

export const updateResourceRequest = updateResourceRequestBase(actions, updateResource);

export default function* rootSaga() {
    yield all([
        fork(createResourceRequest),
        fork(destroyResourceRequest),
        fork(findResourceRequest),
        fork(getPaginatedResourcesRequest),
        fork(regenerateThumbnailsRequest),
        fork(updateResourceRequest),
    ]);
}
