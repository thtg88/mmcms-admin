import React from 'react';
import CreateResource from '../CreateResource';
import withCreateResource from '../withCreateResource';
import reducerRegistry from '../../../redux/reducerRegistry';
import sagaRegistry from '../../../redux/sagaRegistry';
import {
    clearMetadataResourceCreate,
    createResource,
    reducerName,
} from '../../../redux/users/actions';
import reducer from '../../../redux/users/reducers';
import sagas from '../../../redux/users/sagas';
import schema from '../../../redux/users/schema';

reducerRegistry.register(reducerName, reducer);
sagaRegistry.register(reducerName, sagas);

export const Create = ({
    creating_resource,
    errors,
    handleCreateResource,
    resource,
    resource_unchanged,
    updateInputValue,
}) => {
    // console.log('resource', resource);

    return (
        <CreateResource
            creatingResource={creating_resource}
            errors={errors}
            handleCreateResource={handleCreateResource}
            resource={resource}
            resourceUnchanged={resource_unchanged}
            updateInputValue={updateInputValue}
        />
    );
};

export default withCreateResource(
    Create,
    {
        clearMetadataResourceCreate,
        createResource,
        resourceBaseRoute: reducerName,
        schema,
        subStateName: reducerName,
    }
);
