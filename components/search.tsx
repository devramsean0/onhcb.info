import { SearchStatic } from "@/lib/search_static";
import Icon from "@hackclub/icons";
import { Button, Card, Grid, Input } from "theme-ui";

export function Search(props: { textboxID: string }) {
    const onclick = () => {
        const textBoxValue = (document.getElementById(props.textboxID) as HTMLInputElement).value;
        window.location.href = `/${textBoxValue}`;
    }
    return (
        <Card variant="sunken">
            <Grid columns={[1, 0.5, 2]}>
                <Input sx={{height: SearchStatic.HEIGHT, width: SearchStatic.WIDTH}} placeholder="Search" id={props.textboxID}/>
                <Button sx={{height: SearchStatic.HEIGHT, width: SearchStatic.WIDTH}}onClick={onclick}>
                    <Icon glyph="search" size={32} />
                </Button>
            </Grid>
        </Card>
    )
}