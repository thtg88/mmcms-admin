import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import { get } from '../../../../../helpers/formResources';

const ResourceListGroupItemBody = ({
    columns,
    entity,
    keyField,
    nameField,
}) => (
    <Row>
        {
            columns.map((column, idx) => {
                if(
                    column.dataField === keyField
                    || column.dataField === nameField
                ) {
                    return null;
                }

                const value = get(entity, column.dataField);
                const content = column.formatter
                    ? column.formatter(value)
                    : value;
                const key = 'entity_'+entity[keyField]+'_'+column.dataField+'_'+idx;

                return (
                    <Col className={column.className} key={key}>
                        {
                            column.text
                                ? <strong>{`${column.text}: `}</strong>
                                : null
                        }
                        {content}
                    </Col>
                );
            })
        }
    </Row>
);

ResourceListGroupItemBody.propTypes = {
    columns: PropTypes.array,
    entity: PropTypes.object,
    keyField: PropTypes.string,
    nameField: PropTypes.string,
};

export default ResourceListGroupItemBody;
