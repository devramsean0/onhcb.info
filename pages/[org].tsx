import { Navbar } from "@/components/navbar";
import { GetServerSidePropsContext } from "next";
import { fetch } from "@sapphire/fetch";
import { HCB_Org, HCB_Transaction } from "@/types/hcb";
import { Card, Grid } from "theme-ui";
import { Users } from "@/components/org/users";
import Image from "next/image";
import { DemoMode } from "@/components/org/demo";
import { TransactionsTable } from "@/components/org/transactionsTable";

export default function OrgPage(params: { orgData: HCB_Org, transactions: HCB_Transaction[] }) {
    if (!params.orgData.id) {
        return (
            <>
                <Navbar />
                <h1>Experienced an error while fetching</h1>
                <pre>{params.orgData.message}</pre>
            </>
        )
    } else {
        return (
            <>
                <Navbar />
                <Card>
                    <Grid columns={[1, null, 3]}>
                        <Image src={params.orgData.logo} alt={params.orgData.name} width={100} height={100} />
                        <h2>{params.orgData.name}</h2>
                        <h2>/{params.orgData.slug}</h2>
                    </Grid>
                </Card>
                <DemoMode demo={params.orgData.demo_mode} />
                <TransactionsTable transactions={params.transactions} />
            </>
        )
    }
}
export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const org = ctx.params?.org;
    const orgData = await fetch<HCB_Org>(`https://bank.hackclub.com/api/v3/organizations/${org}`);
    const transactions = await fetch<HCB_Transaction[]>(`https://bank.hackclub.com/api/v3/organizations/${org}/transactions`);
    return {
        props: {
            orgData,
            transactions
        }
    }
}