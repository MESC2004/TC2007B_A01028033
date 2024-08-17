import {
  Admin,
  Resource,
  ListGuesser,
  ShowGuesser,
  EditGuesser,
} from "react-admin";

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import CommentIcon from "@mui/icons-material/Comment"
import CollectionsIcon from "@mui/icons-material/Collections";
import {Dashboard} from './Dashboard';
import { authProvider } from './authProvider';
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { UserList, UserEdit, UserCreate } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";
import { CommentList, CommentEdit, CommentCreate} from "./comments";
import { AlbumList, AlbumEdit, AlbumCreate } from "./albums"

export const App = () => (
  <Admin layout={Layout} authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource name="users" list = {UserList} edit = {UserEdit} create = {UserCreate} icon={UserIcon}/>
    <Resource name="posts" list = {PostList} edit = {PostEdit} create = {PostCreate} icon={PostIcon}/>
    <Resource name="comments" list = {CommentList} edit = {CommentEdit} create = {CommentCreate} icon={CommentIcon} />
    <Resource name="albums" list = {AlbumList} edit = {AlbumEdit} create = {AlbumCreate} icon={CollectionsIcon}/>

  </Admin>
);

