import { StaticImages } from "@/lib/static_images";
import { HCB_User } from "@/types/hcb";
import Image from "next/image";
import { Grid } from "theme-ui";

export function Users(props: { users: HCB_User[]}) {
    if (props.users.length > 5) {
        return (
            <Grid columns={[2, null, 5]}>
                {props.users.map((user) => {
                    return (
                        <UserCard user={user}/>
                    )
                })}
            </Grid>
        )
    } else {
    return (
        <Grid columns={[1, null, props.users.length]}>
            {props.users.map((user) => {
                return (
                    <UserCard user={user}/>
                )
            })}
        </Grid>
        )
    }
}
function UserCard(props: {user: HCB_User}) {
    if (typeof(props.user.photo) == "string") {
        return (
            <Image src={props.user.photo} alt={props.user.full_name} width={50} height={50}/>
        )
    } else {
        return (
            <Image src={StaticImages.HCB_LOGO_DARK} alt={props.user.full_name} width={50} height={50}/>
        )
    }
}