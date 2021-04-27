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
    Filter, ReferenceInput, SelectInput, DateField, AutocompleteInput, RichTextField
} from 'react-admin';
import {Card, CardBody, CardHeader, GridContainer, GridItem} from "../comp/Comp";
import {makeStyles} from "@material-ui/core/styles";
import RichTextInput from "ra-input-rich-text";

const QuestionPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />;

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const QuestionFilter = (props) => (
    <Filter {...props}>
        <TextInput id='p_search' label={props.sub_continent} source="questioname" alwaysOn/>
        <TextInput id='p_search' label={props.country} source="questiontext" alwaysOn/>
        <TextInput id='p_search' label={props.state} source="picturelink" />
        <SelectInput label={props.country} alwaysOn source="language" choices={[
            { id: 'en-US', name: 'US English' },
            { id: 'de-DE', name: 'German' },
            { id: 'ko-KR', name: 'Korean' },
        ]} />
        <DateInput id='p_search' label={props.local} source="created" />
        <BooleanInput id='p_search' label={props.activated} source="activated" alwaysOn/>
        <ReferenceInput
            source="category_id"
            reference="category"
            allowEmpty
            alwaysOn
        >
            <AutocompleteInput  label="Category" optionText="name" />
        </ReferenceInput>
        <SelectInput alwaysOn required={true} source="question_type" choices={[
            { id: 'multichoice', name: 'Mutiply Choice' },
            { id: 'voting', name: 'Vote YES / NO' },
            { id: 'doubleChoice', name: 'Choice from double Answers' },
        ]} />
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
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    },
    questionArea: {
        marginTop: "100px",
        height: "150",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }

};
const useStyles = makeStyles(styles);


export const QuestionList = (props, basePath, data) => {
    return (
        <List
            {...props}
            sort={{field: 'id', order: 'DESC'}}
            pagination={<QuestionPagination/>}
            filters={<QuestionFilter/>}
        >
            <div>
                <div><a href={"https://voxipo.com/voxipo-admin/download/app-debug.apk"}><span style={{color: "red"}}>Download Beta App</span></a></div>
                <Datagrid>
                    <TextField id='p_search' label="ID" source="id" alwaysOn/>
                    <TextField id='p_search' label="Questionname" source="questionname" alwaysOn/>
                    <RichTextField id='p_search' label="Questiontext"source="questiontext" alwaysOn/>
                    <TextField id='p_search' label="Language"source="language"/>
                    <ReferenceField label="Category" source="category_id" reference="category">
                        <TextField source="name" />
                    </ReferenceField>
                    <ImageField source="picture_link" title="Pic"/>
                    <TextField source="question_type" title="Pic"/>
                    <DateField id='p_search' label="created" source="created" />
                    <BooleanField source="activated"/>

                    <EditButton/>
                </Datagrid>
            </div>
        </List>
    );
};


export const QuestionEdit = (props) => {
const classes = useStyles();
return(
<Edit  {...props}>
        <SimpleForm>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                <Card>
                        <CardHeader fullWidth={true} color="info">
                            <h4 className={classes.cardTitleWhite}>Question</h4>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <TextInput required={true} source="questionname"/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <SelectInput required={true} source="language" choices={[
                                        { id: 'en-US', name: 'US English' },
                                        { id: 'de-DE', name: 'German' },
                                        { id: 'ko-KR', name: 'Korean' },
                                    ]} />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <SelectInput required={true} source="question_type" choices={[
                                        { id: 'multichoice', name: 'Mutiply Choice' },
                                        { id: 'voting', name: 'Vote YES / NO' },
                                        { id: 'doubleChoice', name: 'Choice from double Answers' },
                                    ]} />
                                </GridItem>
                                <GridItem xs={50} sm={12} md={6} >
                                    <ReferenceInput required={true}
                                                    source="category_id"
                                                    reference="category"
                                                    allowEmpty
                                    >
                                        <SelectInput optionText="name" />
                                    </ReferenceInput>
                                </GridItem>
                            </GridContainer>

                                <GridContainer>
                                    <TextInput className={classes.questionArea} source="picture_link"/>
                                </GridContainer>
                                <GridContainer>
                                <RichTextInput className={classes.questionArea} source="questiontext"/>

                            </GridContainer>

                            <GridContainer>
                                <GridItem >
                                    <BooleanInput label="activated" fullWidth={true} source="activated"/>
                                </GridItem>

                            </GridContainer>

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




export const QuestionCreate = (props) => {
    const classes = useStyles();
    return(
<Create title="Create a Question" {...props}>
        <SimpleForm>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                    <Card>
                        <CardHeader fullWidth={true} color="info">
                            <h4 className={classes.cardTitleWhite}>Question</h4>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <TextInput required={true} source="questionname"/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <SelectInput required={true} source="language" choices={[
                                        { id: 'en-US', name: 'US English' },
                                        { id: 'de-DE', name: 'German' },
                                        { id: 'ko-KR', name: 'Korean' },
                                    ]} />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <RichTextInput source="questiontext"/>
                            </GridContainer>

                            <GridContainer>
                                <TextInput fullWidth={true} source="picture_link"/>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <SelectInput required={true} source="question_type" choices={[
                                        { id: 'multichoice', name: 'Mutiply Choice' },
                                        { id: 'voting', name: 'Vote YES / NO' },
                                        { id: 'doubleChoice', name: 'Choice from double Answers' },
                                    ]} />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <ReferenceInput
                                        source="category_id"
                                        reference="category"
                                        allowEmpty
                                    >
                                        <SelectInput optionText="name" />
                                    </ReferenceInput>
                                </GridItem>
                            </GridContainer>
                            <BooleanInput label="activated" fullWidth={true} source="activated"/>

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
