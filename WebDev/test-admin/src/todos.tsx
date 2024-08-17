import { List, SimpleList, Datagrid, TextField, EmailField, EditButton, required, TextInput, SimpleForm, Edit, Create, ReferenceField, ReferenceInput, BooleanField, BooleanInput } from "react-admin";


export const TodoList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users" />
            <TextField source="title" />
            <BooleanField source="completed" />
            <EditButton/>
        </Datagrid>
    </List>
);


export const TodoEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" InputProps={{ disabled: true }} />
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <BooleanInput source="completed" />
        </SimpleForm>
    </Edit>
);


export const TodoCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <BooleanInput source="completed" />
        </SimpleForm>
    </Create>
);
