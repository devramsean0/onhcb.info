import { Grid } from "theme-ui";
import ColorSwitcher from "./colour-switcher";

export function Navbar() {
    return (
        <Grid columns={[1, null, 2]}>
            <h1>onhcb.info</h1>
            <ColorSwitcher />
        </Grid>
    )
}