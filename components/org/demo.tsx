import { Grid } from "theme-ui";

export function DemoMode(props: { demo: boolean}) {
    if (props.demo == true) {
        return (
            <Grid columns={[1, null, 3]}>
                <h1></h1>
                <h2>This org has not been activated!</h2>
                <h1></h1>
            </Grid>
        )
    } else {
        return (
            <></>
        )
    }
}