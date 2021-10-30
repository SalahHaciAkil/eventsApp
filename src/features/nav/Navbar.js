import { Button, Container, Menu } from "semantic-ui-react";
import { NavLink, useHistory } from "react-router-dom"
import LogoImage from '../../assets/logo.png'
import { SignInMenu } from "./SignInMenu";
import { SignOutMenu } from "./SignOutMenu";
import { useState } from "react";
export const Navbar = ({ handleFormOpen }) => {
    const [authentication, setAuthentication] = useState(false);
    const history = useHistory();

    function handleSignOut() {
        setAuthentication(false);
        history.push("/")
    }

    return (
        <Menu inverted fixed="top">

            <Container>
                <Menu.Item as={NavLink} exact to="/">
                    <img src={LogoImage} alt="logo.png" style={{ 'marginRight': '.5rem' }} />
                    Re-vents
                </Menu.Item>
                <Menu.Item as={NavLink} to="/Events" name="Events" />
                {authentication && <Menu.Item>
                    <Button as={NavLink} to="/createEvent" positive inverted content="Create Event"></Button>
                </Menu.Item>
                }

                {authentication ?
                    <SignInMenu handleSignOut={handleSignOut} /> : <SignOutMenu setAuthentication={setAuthentication} />}





            </Container>



        </Menu>



    )

}



