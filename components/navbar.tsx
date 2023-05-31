import { Grid } from "theme-ui";
import ColorSwitcher from "./colour-switcher";
import { Search } from "./search";
import Link from "next/link";
import Icon from "@hackclub/icons";

export function Navbar() {
    return (
        <Grid columns={[1, null, 4]}>
            <Link href="/"><h1>onhcb.info</h1></Link>
            <Search textboxID="inNavbarSearch" />
            <ColorSwitcher />
            <Link href="https://github.com/devramsean0/onhcb.info"><Icon glyph="github" size={32} /></Link>
        </Grid>
    )
}