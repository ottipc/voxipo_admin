import React, {Component} from 'react';

import {
    Create,
    Datagrid,
    Edit,
    EditButton,
    ImageField,
    DateInput,
    List,
    Pagination,
    BooleanField,
    SimpleForm,
    TextField,
    TextInput,
    BooleanInput,
    ReferenceField,
    Filter
} from 'react-admin';
import {Card, CardBody, CardHeader, GridContainer, GridItem} from "../comp/Comp";
import {makeStyles} from "@material-ui/core/styles";

const CategoryPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />;

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const CategoryFilter = (props) => (
    <Filter {...props}>
        <TextInput id='p_search' label="ID" source="id" alwaysOn/>
        <TextInput id='p_search' label="Name" source="name" alwaysOn/>

        {/*
        <BooleanInput label={"account"} source="accounts" alwaysOn/>
*/}
    </Filter>
);

export const styles = {
    first_name: {display: 'inline-block'},
    last_name: {display: 'inline-block', marginLeft: -30},
    address: {maxWidth: 544},
    zipcode: {display: 'inline-block'},
    city: {display: 'inline-block', marginLeft: -30},
    pob: {display: 'inline-block'},
    cob: {display: 'inline-block', marginLeft: -30},
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};
const useStyles = makeStyles(styles);


export const CategoryList = (props, basePath, data) => {
    return (
        <List
            {...props}
            sort={{field: 'id', order: 'DESC'}}
            pagination={<CategoryPagination/>}
            filters={<CategoryFilter/>}
        >
            <div>
                <div><a href={"https://voxipo.com/voxipo-admin/download/app-debug.apk"}><span style={{color: "red"}}>Download Beta App</span></a></div>
                <Datagrid>



                    <TextField id='p_search' label="ID" source="id" alwaysOn/>
                    <TextField id='p_search' label="Name" source="name" alwaysOn/>
                    <TextField id='p_search' label="Created" source="created" alwaysOn/>

                    <EditButton/>
                </Datagrid>
            </div>
        </List>
    );
};


export const CategoryEdit = (props) => {
const classes = useStyles();
return(
<Edit  {...props}>
        <SimpleForm>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                <Card>
                        <CardHeader fullWidth={true} color="info">
                            <h4 className={classes.cardTitleWhite}>Category</h4>
                        </CardHeader>
                        <CardBody>
                            <TextField id='p_search' label="ID" source="id" />
                            <TextInput id='p_search' required={true} label="Name" source="name" />
                        </CardBody>
                    </Card>
                    <Card>
                    <CardBody>
                    </CardBody>
                </Card>
                </GridItem>
            </GridContainer>

        </SimpleForm>
    </Edit>);
};




export const CategoryCreate = (props) => {
    const classes = useStyles();
    return(
<Create title="Create a Category" {...props}>
    <SimpleForm>
        <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
                <Card>
                    <CardHeader fullWidth={true} color="info">
                        <h4 className={classes.cardTitleWhite}>Category</h4>
                    </CardHeader>
                    <CardBody>
                        <TextInput required={true} id='p_search' label="Name" source="name" />
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>

        </SimpleForm>
    </Create>);
};
