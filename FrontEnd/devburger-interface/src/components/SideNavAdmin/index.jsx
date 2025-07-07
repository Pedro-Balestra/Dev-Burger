import { SignOut } from '@phosphor-icons/react';
import Logo from '../../assets/logo.svg';
import { useUser } from '../../hooks/UserContext';
import { navLinks } from './navLinks';
import { Container, Footer, NavLink, NavLinkContainer } from './styles';

export function SideNavAdmin() {
    const { logout } = useUser();
    return (
        <Container>
            <img src={Logo} alt="Hamburger logo"></img>
            <NavLinkContainer>
                {navLinks.map(link => (
                    <NavLink key={link.id} to={link.path}>
                        {link.icon}
                        <span>{link.label}</span>
                    </NavLink>
                ))}
            </NavLinkContainer>
            <Footer>
                <NavLink to='/login' onClick={logout}>
                    <SignOut />
                    <span>Sair</span>
                </NavLink>
            </Footer>
        </Container>

    );
}