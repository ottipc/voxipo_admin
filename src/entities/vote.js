import {
    Create,
    Datagrid,
    Edit,
    EditButton,
    ImageField,
    List,
    Pagination,
    SimpleForm,
    TextField,
    TextInput
} from 'react-admin';
import {Card, CardBody, CardHeader, GridContainer, GridItem} from "../comp/Comp";
import {makeStyles} from "@material-ui/core/styles";

const VotePagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />;
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


export const VoteList = (props, basePath, data,) => {
    return (
        <List
            {...props}
            sort={{field: 'id', order: 'DESC'}}
            pagination={<VotePagination/>}
        >
            <div>
                <Datagrid>
                    <TextField source="id"/>
                    <TextField source="continent"/>
                    <TextField source="sub_continent"/>
                    <TextField source="country"/>
                    <TextField source="state"/>
                    <TextField source="local"/>
                    <TextField source="political_leaders"/>
                    <TextField source="political_position"/>
                    <TextField source="thumbnail"/>
                    <TextField source="picture_link"/>
                    <TextField source="licence_text"/>
                    <ImageField source="thumbnail" title="Pic"/>

                    <EditButton/>
                </Datagrid>
            </div>
        </List>
    );
};


export const VoteEdit = (props) => {
const classes = useStyles();
return(
<Edit  {...props}>
        <SimpleForm>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                <Card>
                        <CardHeader fullWidth={true} color="info">
                            <h4 className={classes.cardTitleWhite}>Vote</h4>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <TextInput source="continent"/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={5}>
                                    <TextInput source="sub_continent"/>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <TextInput source="country"/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <TextInput source="state"/>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <TextInput source="local"/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={5}>
                                    <TextInput source="political_position"/>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <TextInput fullWidth={true}  source="political_leaders"/>
                                </GridContainer>
                            <GridContainer>
                                    <TextInput fullWidth={true} source="picture_link"/>
                            </GridContainer>
                            <GridContainer>
                            <TextInput fullWidth={true} source="licence_text"/>
                            </GridContainer>
                            <GridContainer>
                                <TextInput fullWidth={true} source="thumbnail"/>
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




export const VoteCreate = (props) => (
    <Create title="Create a Vote" {...props}>
        <SimpleForm>
            <TextInput source="continent"/>
            <TextInput source="sub_continent"/>
            <TextInput source="country"/>
            <TextInput source="state"/>
            <TextInput source="local"/>
            <TextInput source="political_leaders"/>
            <TextInput source="political_position"/>
            <TextInput source="thumbnail"/>
            <TextInput source="picture_link"/>
            <TextInput source="licence_text"/>
            <ImageField source="thumbnail" title="Pic"/>

        </SimpleForm>
    </Create>
);
