import { Navbar } from "@/components/navbar";
import { GetServerSidePropsContext } from "next";
import { fetch } from "@sapphire/fetch";
import { HCB_Org, HCB_Transaction } from "@/types/hcb";
import { Card, Grid } from "theme-ui";
import Image from "next/image";
import { DemoMode } from "@/components/org/demo";
import { TransactionsTable } from "@/components/org/transactionsTable";
import { HCBStatic } from "@/lib/hcb_static";
import { Balance } from "@/components/org/balance";
import { Footer } from "@/components/footer";

export default function OrgPage(params: { orgData: HCB_Org, transactions: HCB_Transaction[] }) {
    if (!params.orgData.id) {
        return (
            <>
                <Navbar />
                <h1>Experienced an error while fetching</h1>
                <pre>{params.orgData.message}</pre>
                <Footer />
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
                <Balance balance={params.orgData.balances } />
                <Card variant="sunken">
                    <TransactionsTable transactions={params.transactions} orgSlug={params.orgData.slug}/>
                </Card>
                <Footer />
            </>
        )
    }
}
export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const org = ctx.params?.org;
    const orgData = await fetch<HCB_Org>(`https://bank.hackclub.com/api/v3/organizations/${org}`);
    const transactions = await fetch<HCB_Transaction[]>(`https://bank.hackclub.com/api/v3/organizations/${org}/transactions?per_page=${HCBStatic.TRANSACTIONS_PER_PAGE}`);
    const transactionsSorted = transactions.sort((a: any ,b: any) => {
        const aDate = new Date(a.date).getTime();
        const bDate = new Date(b.date).getTime();
        return bDate - aDate;
    })
    return {
        props: {
            orgData,
            transactions: transactionsSorted
        }
    }
}