
import { Button, Menu } from "semantic-ui-react";

export const SignOutMenu = ({ setAuthentication }) => (
    <Menu.Item position="right">
        <Button basic inverted content="Login" onClick={() => setAuthentication(true)} />
        <Button basic inverted content="Register" style={{ 'marginLeft': '.5rem' }} />
    </Menu.Item>
)