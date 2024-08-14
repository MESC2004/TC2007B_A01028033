import {
  Admin,
  Resource,
  ListGuesser,
  ShowGuesser,
  EditGuesser
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { UserList } from "./users";
import { PostList, PostEdit } from "./posts";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="users" list = {UserList} edit = {EditGuesser}/>
    <Resource name="posts" list = {PostList} edit = {PostEdit}/>
  </Admin>
);
