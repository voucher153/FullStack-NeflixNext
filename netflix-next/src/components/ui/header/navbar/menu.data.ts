import { PAGES } from "@/config/pages-url.config";
import { IMenuItem } from "./menu.interface";

export const MENU: IMenuItem[] = [
    {
        link: PAGES.HOME,
        name: 'Home'
    },
    {
        link: PAGES.MOVIES,
        name: 'Movies'
    },
    {
        link: PAGES.RECENTLY_ADDED,
        name: 'Recently Added'
    },
    {
        link: PAGES.WISH_LIST,
        name: 'Wish List'
    }
]