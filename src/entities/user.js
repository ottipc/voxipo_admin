import React, {Component} from 'react';

import {
    Create,
    Datagrid,
    ReferenceField,
    Edit,
    EditButton,
    ImageField,
    List,
    Pagination,
    BooleanField,
    SimpleForm,
    TextField,
    TextInput,
    BooleanInput,
    Filter
} from 'react-admin';
import {Card, CardBody, CardHeader, GridContainer, GridItem} from "../comp/Comp";
import {makeStyles} from "@material-ui/core/styles";

const UserPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />;

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput id='p_search' label="ID" source="id"/>
        <TextInput id='p_search' label="Email" source="email" alwaysOn/>
    </Filter>
);

/*
"id": 102,
    "vote_id": 1532,
    "user_id": 3,
    "answer": "false",
    "location
*/




export const UserList = (props, basePath, data) => {
    return (
        <List
            {...props}
            pagination={<UserPagination/>}
            filters={<UserFilter/>}
        >
            <div>
                <Datagrid>s
                    <TextField label="ID" source="id" />
                    <TextField source="email" />
                    <TextField source="created" />
                </Datagrid>
            </div>
        </List>
    );
};


