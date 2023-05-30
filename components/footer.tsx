import Icon from "@hackclub/icons";
import { Card, Link } from "theme-ui";

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <Card>
            <center>
                <h2>&copy; Sean Outram {year}</h2>
            </center>
            <Link href="https://github.com/devramsean0/onhcb.info"><Icon glyph="github"/></Link>
        </Card>
    )
}