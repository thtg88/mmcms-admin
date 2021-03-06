import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import CreateForm from './CreateForm';
import Table from './Table';
import ApiErrorCard from '../../../Cards/ApiErrorCard';
import { getApiErrorMessages } from '../../../../helpers/apiMessages';

const PivotTabContent = ({
    childAttributesSequenceToShow,
    childNameField,
    childResourceBaseRoute,
    childSchema,
    createChildResource,
    destinationBaseRoute,
    destinationRelationshipName,
    destroyResource,
    errors,
    parentResource,
    reducerName,
    relationshipName,
    relationshipParentIdColumn,
    resourceDisplayName,
    setRelationshipItem,
    setResource,
    unsetRelationshipItem,
}) => {
    if(
        ! parentResource
        || ! parentResource[relationshipName]
    ) {
        return null;
    }

    return (
        <>
            <Row>
                <Col className="col-md-12">
                    <ApiErrorCard errors={errors} />
                </Col>
            </Row>
            <Row className="mb-4">
                <Col className="col-md-12">
                    <Table
                        destinationBaseRoute={destinationBaseRoute}
                        destinationRelationshipName={destinationRelationshipName}
                        destroyResource={destroyResource}
                        parentResource={parentResource}
                        reducerName={reducerName}
                        relationshipName={relationshipName}
                        resourceDisplayName={resourceDisplayName}
                        setResource={setResource}
                        unsetRelationshipItem={unsetRelationshipItem}
                    />
                </Col>
            </Row>
            <hr />
            <Row className="mb-4">
                <Col className="col-md-12">
                    <CreateForm
                        childAttributesSequenceToShow={childAttributesSequenceToShow}
                        childNameField={childNameField}
                        childResourceBaseRoute={childResourceBaseRoute}
                        childSchema={childSchema}
                        createChildResource={createChildResource}
                        parentResource={parentResource}
                        reducerName={reducerName}
                        relationshipName={relationshipName}
                        relationshipParentIdColumn={relationshipParentIdColumn}
                        setRelationshipItem={setRelationshipItem}
                    />
                </Col>
            </Row>
        </>
    );
};

const mapStateToProps = (state, ownProps) => {
    const { error } = state[ownProps.reducerName];
    const errors = getApiErrorMessages(error);

    return {
        errors,
    };
};

export default connect(mapStateToProps)(PivotTabContent);
