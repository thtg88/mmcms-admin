import React from 'react';
import { Redirect } from 'react-router-dom';
import EditResource from '../../../components/Resources/EditResource';
import withEditResource from '../../../components/Resources/EditResource/withEditResource';
import reducerRegistry from '../../../redux/reducerRegistry';
import sagaRegistry from '../../../redux/sagaRegistry';
import {
    clearMetadataResourceEdit,
    destroyResource,
    findResource,
    getPaginatedResources,
    reducerName,
    updateResource,
} from '../../../redux/roles/actions';
import reducer from '../../../redux/roles/reducers';
import sagas from '../../../redux/roles/sagas';
import schema from '../../../redux/roles/schema';
import { pageSize } from './tableConfig';

reducerRegistry.register(reducerName, reducer);
sagaRegistry.register(reducerName, sagas);

const canDestroy = true;
const attributesToShow = [
    'display_name',
    'name',
    'priority',
];

export const Edit = ({
    destroyed,
    destroying_resource,
    errors,
    getting_resource,
    handleDestroyResource,
    handleUpdateResource,
    is_modal_open,
    resource,
    resource_unchanged,
    toggleDestroyResourceModal,
    updateInputValue,
    updating_resource,
}) => {
    let actions = [];
    if(canDestroy === true) {
        actions.push({
            className: 'btn-danger',
            disabled: getting_resource,
            iconClassName: 'fa fa-trash',
            onClick: toggleDestroyResourceModal,
            title: 'Remove Resource',
            type: 'button',
        });
    }

    if(destroyed === true) {
        return <Redirect to={`/${reducerName}`} />;
    }

    return (
        <EditResource
            actions={actions}
            canDestroy={canDestroy}
            destroyingResource={destroying_resource}
            errors={errors}
            gettingResource={getting_resource}
            handleDestroyResource={handleDestroyResource}
            handleUpdateResource={handleUpdateResource}
            isDestroyResourceModalOpen={is_modal_open}
            resource={resource}
            resourceUnchanged={resource_unchanged}
            toggleDestroyResourceModal={toggleDestroyResourceModal}
            updateInputValue={updateInputValue}
            updatingResource={updating_resource}
        />
    );
};

export default withEditResource({
    attributesToShow,
    clearMetadataResourceEdit,
    destroyResource,
    findResource,
    getPaginatedResources,
    pageSize,
    schema,
    updateResource,
    subStateName: reducerName,
})(Edit);
