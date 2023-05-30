import { HCB_Transaction } from "@/types/hcb";
import { Transaction } from "./transaction";

export function TransactionsTable(props: {transactions: HCB_Transaction[]}) {
    return (
        <table border={1}>
            <thead>
                <tr>
                    <th>Memo</th>
                    <th>Amount ($)</th>
                    <th>Date</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {props.transactions.map((transaction, index) => {
                    {/* return (
                        <tr key={index}>
                            <td>
                                <center>{transaction.memo}</center>
                            </td>
                            <td>
                                <center>{parseInt(String(transaction.amount_cents), 10)/100}
                                </center>
                            </td>
                            <td>
                                <center>{transaction.date}</center>
                            </td>
                            <td>
                                <center>{transaction.type}</center>
                            </td>
                        </tr>
                    ) */}
                    return <Transaction transaction={transaction} key={index} />
                })}
            </tbody>
        </table>
    )
}