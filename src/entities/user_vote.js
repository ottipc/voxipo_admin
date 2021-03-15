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

const UserVotePagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />;

/**
 *git
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const UserVoteFilter = (props) => (
    <Filter {...props}>
        <TextInput id='p_search' label="User" source="user_id"/>
        <TextInput id='p_search' label="Vote ID" source="vote_id" alwaysOn/>
        <TextInput id='p_search' label="User ID" source="user_id" alwaysOn/>
        <TextInput id='p_search' label="Location" source="location" alwaysOn/>
        <BooleanInput id='p_search' label="Answer" source="answer" alwaysOn/>


    </Filter>
);

/*
"id": 102,
    "vote_id": 1532,
    "user_id": 3,
    "answer": "false",
    "location
*/




export const UserVoteList = (props, basePath, data) => {
    return (
        <List
            {...props}
            pagination={<UserVotePagination/>}
            filters={<UserVoteFilter/>}
        >
            <div>
                <Datagrid>s
                    <TextField label="ID" source="id" />
                    <ReferenceField label="Vote" source="vote_id" reference="vote">
                        <TextField source="political_leaders" />
                    </ReferenceField>
                    <ReferenceField label="Email" source="user_id" reference="user">
                        <TextField source="email" />
                    </ReferenceField>
                    <TextField source="user_id" />

                    <TextField source="answer" />
                    <TextField source="location" />

                </Datagrid>
            </div>
        </List>
    );
};


