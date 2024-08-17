import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    TextInput,
    Create
} from "react-admin";

export const AlbumList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users" />
            <TextField source="title" />
            <EditButton/>
        </Datagrid>
    </List>
);


export const AlbumEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" InputProps={{ disabled: true }} />
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <EditButton/>
        </SimpleForm>
    </Edit>
);


export const AlbumCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
        </SimpleForm>
    </Create>
);

