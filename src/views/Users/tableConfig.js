// import createdAtFormatter from './createdAtFormatter';

export const columns = [
    {
        dataField: 'id',
        text: 'ID',
        className: 'col-sm-12',
        sort: true
    },
    {
        dataField: 'name',
        text: 'Name',
        className: 'col-sm-5',
        sort: true
    },
    {
        dataField: 'email',
        text: 'Email',
        className: 'col-sm-5',
        sort: true
    },
    {
        dataField: 'role.display_name',
        text: 'Role',
        className: 'col-sm-2',
        editable: false
    },
    {
        dataField: 'created_at',
        text: 'Registered',
        className: 'col-sm-12',
        editable: false,
        // formatter: createdAtFormatter,
    }
];

// const selectRow = {
//     mode: 'checkbox',
//     clickToSelect: false
// };

const defaultSorted = [
    {
        dataField: 'id',
        order: 'desc'
    }
];

export const cellEditProps = {
    mode: 'click'
};

export const pageSize = 10;

const tableConfig = {
    striped: true,
    hover: true,
    bordered: false,
    bootstrap4: true,
    remote: {
        filter: false,
        pagination: true,
        sort: false,
        // cellEdit: true
    },
    keyField: "id",
    columns,
    defaultSorted
    // ,
    // selectRow
};

export default tableConfig;
