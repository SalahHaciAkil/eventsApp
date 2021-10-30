
import { Menu, Image, Dropdown } from "semantic-ui-react";
import { Link } from 'react-router-dom'
export const SignInMenu = ({ handleSignOut }) => (
    <>
        <Menu.Item position="right">
            <Image spaced="right" avatar src="../../assets/user.png" />
            <Dropdown pointing="top right" text="Salah">
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/createEvent" text="Create event" icon="plus" />
                    <Dropdown.Item text="My profile" icon="user" />
                    <Dropdown.Item onClick={() => handleSignOut()} text="Sign out" icon="power" />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </>
)