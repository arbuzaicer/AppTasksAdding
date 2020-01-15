import {HeaderComponent} from "../components/header.component";
import {NavigationComponent} from "../components/navigation.component";
import {PostsComponent} from "../components/posts.component";
import {CreateComponent} from "../components/create.component";
import {FavoriteComponent} from "../components/favorite.component";

const header = new HeaderComponent('header');

/*Navigation section*/
const navigation = new NavigationComponent('navigation');
const posts = new PostsComponent('posts');
const create = new CreateComponent('create');
const favorite = new FavoriteComponent('favorite');

const tabsList = [
    {name: 'create', attribute: create},
    {name: 'posts', attribute: posts},
    {name: 'favorite', attribute: favorite}
];

navigation.switchTabs(tabsList);