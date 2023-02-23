import {FaHotjar} from 'react-icons/fa';
import {BsInfoCircleFill, BsFillChatFill} from'react-icons/bs';
import {MdLibraryMusic} from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import {ImFolderUpload, ImExit} from 'react-icons/im'


export const MENU_ITEMS = [
    {title: "Latest Uploads", icon: {type: "icon", icon: <FaHotjar />}, base_url: "/songs/latest-uploads"},
    {title: "Most Popular", icon: {type: "icon", icon: <MdLibraryMusic />}, base_url: "/songs/most-popular"},
    {title: "Bhojpuri Songs", icon: {type: "image", url: "/img/khesari.jpg"}, base_url: "/songs/bhojpuri-songs"},
    {title: "Hindi Songs", icon: {type: "image", url: "/img/arijit.jpeg"}, base_url: "/songs/hindi-songs"},
    {title: "Old Hindi Songs", icon: {type: "image", url: "/img/lata.jpeg"}, base_url: "/songs/old-hindi-songs"},
    {title: "Punjabi Songs", icon: {type: "image", url: "/img/diljit.jpeg"}, base_url: "/songs/hindi-songs"},
    {title: "Contact Us", icon: {type: "icon", icon: <BsFillChatFill />}, base_url: "/contact-us"},
    {title: "About Us", icon: {type: "icon", icon: <BsInfoCircleFill />}, base_url: "/about-us"},
]

export const AdminMenuItems = [
    {title: "Uploads", icon: {type: "icon", icon: <ImFolderUpload />}, base_url: "/admin/uploads"},
    {title: "Users", icon: {type: "icon", icon: <FaUsers />}, base_url: "/admin/users"},
    {title: "Logout", icon: {type: "icon", icon: <ImExit />}, base_url: "#"},
]