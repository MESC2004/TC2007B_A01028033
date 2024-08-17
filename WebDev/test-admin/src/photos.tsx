import { List, SimpleList, Datagrid, TextField, ImageField, EditButton, required, TextInput, SimpleForm, Edit, Create, ReferenceField, ReferenceInput } from "react-admin";


export const PhotoList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="albumId" reference="albums" />
            <TextField source="title" />
            <ImageField source="url" />
            <ImageField source="thumbnailUrl" />
            <EditButton/>
        </Datagrid>
    </List>
);


export const PhotoEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" InputProps={{ disabled: true }}/>
            <ReferenceField source="albumId" reference="albums" />
            <TextInput source="title" />
            <TextInput source="url" />
            <TextInput source="thumbnailUrl" />
            <EditButton/>
        </SimpleForm>
    </Edit>
);


export const PhotoCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceField source="albumId" reference="albums" />
            <TextInput source="title" />
            <TextInput source="url" />
            <TextInput source="thumbnailUrl" />
        </SimpleForm>
    </Create>
);


