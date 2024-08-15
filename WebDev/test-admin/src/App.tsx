import {
  Admin,
  Resource,
  ListGuesser,
  ShowGuesser,
  EditGuesser
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { UserList, UserEdit, UserCreate } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="users" list = {UserList} edit = {UserEdit} create = {UserCreate}/>
    <Resource name="posts" list = {PostList} edit = {PostEdit} create = {PostCreate}/>
  </Admin>
);
