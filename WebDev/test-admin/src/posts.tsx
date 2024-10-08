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

export const PostList = () => (
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
      <List>
          {isSmall ? (
            <SimpleList>
                primaryText={(record) => record.title}
                secondaryText={(record) => record.body}
            </>
          ) : (
          <Datagrid>
              <TextField source="id" />
              <ReferenceField source="userId" reference="users" />
              <TextField source="title" />
              <TextField source="body" />
              <EditButton/>
          </Datagrid>
          )}
      </List>
        );
    );

export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" InputProps={{ disabled: true }} />
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5} />
        </SimpleForm>
    </Edit>
);

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="userId" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Create>
);
