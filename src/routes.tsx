import HomeComponent from './components/HomeComponent/HomeComponent';
import SettingComponent from './components/SettingComponent/SettingComponent';
import TagXperience from "./components/TagXperience/TagXperience";
import {UserOutlined} from "@ant-design/icons/lib";


const RoutesPath = [
    {
        icon : UserOutlined,
        name: 'Home',
        path: '/',
        exact: true,
        component: HomeComponent
    },
    {
        icon : UserOutlined,
        name: 'Mes cartes',
        path: '/setting',
        component: SettingComponent,
        exact: false,
    },
    {
        icon : UserOutlined,
        name: 'TagXperience',
        path: '/tagxperience',
        component: TagXperience,
        exact: false,
    }

];
export default RoutesPath;
