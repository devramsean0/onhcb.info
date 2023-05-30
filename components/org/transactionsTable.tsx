import { HCB_Transaction } from "@/types/hcb";
import { Transaction } from "./transaction";
import { useState } from "react";
import { Button, Grid } from "theme-ui";
import { fetch } from "@sapphire/fetch";
import { HCBStatic } from "@/lib/hcb_static";

export function TransactionsTable(props: {transactions: HCB_Transaction[], orgSlug: string}) {
    const [transactions, setTransactions] = useState(props.transactions)
    const [transactionPageOffset, setTransactionPageOffset] = useState(2)
    console.log("Transaction page offset: ", transactionPageOffset)
    // Expand more records hook
    const loadMoreRecords = async () => {
        setTransactionPageOffset(transactionPageOffset + 1)
        console.log("Transaction page offset: ", transactionPageOffset)
        const moreTransactions = await fetch<HCB_Transaction[]>(`https://bank.hackclub.com/api/v3/organizations/${props.orgSlug}/transactions?per_page=${HCBStatic.TRANSACTIONS_PER_PAGE}&page=${transactionPageOffset}`);
        console.log("Transaction page offset: ", transactionPageOffset)
        const updatedTransactions = transactions.concat(moreTransactions);
        // Logging
        console.log("Transactions: ", transactions.length)
        console.log("Updated transactions: ", updatedTransactions.length)
        // Sort them
        setTransactions(updatedTransactions.sort((a: any ,b: any) => {
            const aDate = new Date(a.date).getTime();
            const bDate = new Date(b.date).getTime();
            return bDate - aDate;
        }));
        alert(`Loaded ${HCBStatic.TRANSACTIONS_PER_PAGE} more records`)
    }
    return (
        <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Memo</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => {
                        return <Transaction transaction={transaction} key={index} />
                    })}
                </tbody>
            </table>
            <br />
            <Button variant="outline" onClick={loadMoreRecords}>Load more records</Button>
        </>
    )
}