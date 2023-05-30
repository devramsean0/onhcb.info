import { Card } from "theme-ui";

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <Card>
            <center>
                <h2>&copy; Sean Outram {year}</h2>
            </center>
        </Card>
    )
}