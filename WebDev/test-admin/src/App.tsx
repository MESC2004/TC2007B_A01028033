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
import { PostList } from "./posts";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="users" list = {UserList} show = {ShowGuesser}/>
    <Resource name="posts" list = {PostList} show = {ShowGuesser}/>
  </Admin>
);
