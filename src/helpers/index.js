import {BiSearch} from 'react-icons/bi'
import {FaFacebook, FaInstagram, FaLinkedin, FaTelegramPlane, FaTiktok, FaTwitter, FaYoutube} from 'react-icons/fa'
export const navbarList = [
    {
        path:"/",
        name:"Главная"
    },
    {
        path:"/movies",
        name:"Фильмы"
    },
    {
        path:"/series",
        name:"Сериалы"
    },
    {
        path:"/search",
        name:<BiSearch />
    },
]
export const footerList = [
    {
        path:"#",
        name:<FaTelegramPlane />
    },
    {
        path:"#",
        name:<FaFacebook />
    },
    {
        path:"#",
        name:<FaInstagram />
    },
    {
        path:"#",
        name:<FaTiktok/>
    },
    {
        path:"#",
        name:<FaYoutube />
    },
    {
        path:"#",
        name:<FaTwitter />
    },
    {
        path:"#",
        name:<FaLinkedin />
    },
]