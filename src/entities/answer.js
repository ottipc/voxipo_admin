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
    Filter, ReferenceInput, SelectInput, DateField, NumberInput
} from 'react-admin';
import {Card, CardBody, CardHeader, GridContainer, GridItem} from "../comp/Comp";
import {makeStyles} from "@material-ui/core/styles";
import RichTextInput from "ra-input-rich-text";

const AnswerPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />;

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const AnswerFilter = (props) => (
    <Filter {...props}>
        <TextInput id='p_search' label="ID" source="id" alwaysOn/>
        <TextInput id='p_search' label="answertext" source="answertext" alwaysOn/>
        <TextInput id='p_search' label="order" source="answerorder"/>
        <TextInput id='p_search' label="Question" source="question_id" alwaysOn />
        <DateInput id='p_search' label={props.local} source="created" />
        <BooleanInput id='p_search' label={props.activated} source="activated" alwaysOn/>

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


export const AnswerList = (props, basePath, data) => {
    return (
        <List
            {...props}
            sort={{field: 'id', order: 'DESC'}}
            pagination={<AnswerPagination/>}
            filters={<AnswerFilter/>}
        >
            <div>
                <div><a href={"https://voxipo.com/voxipo-admin/download/app-debug.apk"}><span style={{color: "red"}}>Download Beta App</span></a></div>
                <Datagrid>

                   <TextField id='p_search' label="ID" source="id"/>
                    <TextField id='p_search' label="Answer" source="answertext" alwaysOn/>
                    <TextField id='p_search' label="Order" source="answerorder" alwaysOn/>
                    <TextField id='p_search' label="Question ID" source="question_id" />

                    <ReferenceField label="Question Name" source="question_id" reference="question">
                        <TextField  source="questionname" />
                    </ReferenceField>

                    <TextField id='p_search' label="Language" source="language" />
                    <DateField id='p_search' label={props.local} source="created" />
                    <BooleanField id='p_search' label="Aktiviert" source="activated"/>
\                   <EditButton/>
                </Datagrid>
            </div>
        </List>
    );
};


export const AnswerEdit = (props) => {
const classes = useStyles();
return(
<Edit  {...props}>
        <SimpleForm>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                <Card>
                        <CardHeader fullWidth={true} color="info">
                            <h4 className={classes.cardTitleWhite}>Answer</h4>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <TextInput id='p_search' label="Answer" source="answertext" />
                                    <NumberInput id='p_search' label="Order" source="answerorder" />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={5}>
                                    <ReferenceInput
                                        source="question_id"
                                        reference="question"
                                        allowEmpty
                                    >
                                        <SelectInput optionText="questionname" />
                                    </ReferenceInput>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <TextInput source="language"/>
                                </GridItem>
                            </GridContainer>


                            <GridContainer>
                                <BooleanInput label="activated" fullWidth={true} source="activated"/>
                            </GridContainer>
                            {/*<GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={4}>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                </GridItem>
                            </GridContainer>*/}
                        </CardBody>
                    </Card>
                    <Card>
                    <CardBody>
                    </CardBody>
                </Card>
                </GridItem>
            </GridContainer>
            <ImageField source="thumbnail" title="Pic"/>

        </SimpleForm>
    </Edit>);
};




export const AnswerCreate = (props) => {
    const classes = useStyles();
    return(
<Create title="Create a Answer" {...props}>
        <SimpleForm>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                    <Card>
                        <CardHeader fullWidth={true} color="info">
                            <h4 className={classes.cardTitleWhite}>Answer</h4>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <TextInput id='p_search' label="Answer" source="answertext" />
                                    <NumberInput id='p_search' label="Order" source="answerorder" />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={5}>
                                    <ReferenceInput
                                        source="question_id"
                                        reference="question"
                                        allowEmpty
                                    >
                                        <SelectInput optionText="questionname" />
                                    </ReferenceInput>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <TextInput source="language"/>
                                </GridItem>
                            </GridContainer>

                            <GridContainer>
                                <BooleanInput label="activated" fullWidth={true} source="activated"/>
                            </GridContainer>
                            {/*<GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={4}>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                </GridItem>
                            </GridContainer>*/}
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
            <ImageField source="thumbnail" title="Pic"/>


        </SimpleForm>
    </Create>);
};
