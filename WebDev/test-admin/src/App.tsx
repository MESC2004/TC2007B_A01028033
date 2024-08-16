import {
  Admin,
  Resource,
  ListGuesser,
  ShowGuesser,
  EditGuesser,
} from "react-admin";

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import {Dashboard} from './Dashboard';
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { UserList, UserEdit, UserCreate } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource name="users" list = {UserList} edit = {UserEdit} create = {UserCreate} icon={UserIcon}/>
    <Resource name="posts" list = {PostList} edit = {PostEdit} create = {PostCreate} icon={PostIcon}/>

  </Admin>
);

