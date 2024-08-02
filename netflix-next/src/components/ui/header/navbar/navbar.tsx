import { MENU } from "./menu.data"
import { NavBarItem } from "./navbarItem/navbar-item"

export const NavBar = () => {

    const linkElements = MENU.map((item, id) => (
        <NavBarItem key={id} id={id} href={item.link} name={item.name} />
    ))

    return (
        <ul className="lg:flex gap-x-4 ml-14 hidden">
            {linkElements}
        </ul>
    )
}