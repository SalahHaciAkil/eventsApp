import { Button, Container, Menu, MenuItem } from "semantic-ui-react";
import LogoImage from '../../assets/logo.png'
export const Navbar = ({ setFormOpen }) => (

    <Menu inverted fixed="top">

        <Container>
            <Menu.Item>
                <img src={LogoImage} alt="logo.png" style={{ 'marginRight': '.5rem' }} />
                Re-vents
            </Menu.Item>
            <Menu.Item name="Events" />
            <Menu.Item>
                <Button onClick={() => setFormOpen(true)} positive inverted content="Create Event"></Button>
            </Menu.Item>
            <Menu.Item position="right">
                <Button basic inverted content="Login" />
                <Button basic inverted content="Register" style={{ 'marginLeft': '.5rem' }} />
            </Menu.Item>



        </Container>



    </Menu>



)