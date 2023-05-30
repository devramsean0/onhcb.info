import { Grid } from "theme-ui";
import ColorSwitcher from "./colour-switcher";
import { Search } from "./search";
import Link from "next/link";

export function Navbar() {
    return (
        <Grid columns={[1, null, 3]}>
            <Link href="/"><h1>onhcb.info</h1></Link>
            <Search textboxID="inNavbarSearch" />
            <ColorSwitcher />
        </Grid>
    )
}