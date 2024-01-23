import { Scroll,Timer } from "@phosphor-icons/react"
import { HeaderContainer } from "./styles"
import { NavLink } from "react-router-dom"
import Logo from '../../assets/Logo.svg'
export function Header(){
    return (
        <HeaderContainer>
            <span>
                <img src={Logo} />
            </span>
            <nav>
                <NavLink to='/' title="Timer">
                    <Timer size={24}/>
                </NavLink>
                <NavLink to='/history' title="Historico">
                    <Scroll size={24}/>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}