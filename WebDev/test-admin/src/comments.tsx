import { List, SimpleList, Datagrid, TextField, EmailField, EditButton, required, TextInput, SimpleForm, Edit, Create, ReferenceField, ReferenceInput } from "react-admin";

export const CommentList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="postId" reference="posts" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="body" />
            <EditButton/>
        </Datagrid>
    </List>
);


export const CommentEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" InputProps={{ disabed: true }}/>
            <ReferenceInput source="postId" reference="posts"  />
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="body" />
            <EditButton/>
        </SimpleForm>
    </Edit>
);


export const CommentCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" InputProps={{ disabed: true }}/>
            <ReferenceInput source="postId" reference="posts"  />
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="body" />
        </SimpleForm>
    </Create>
);
