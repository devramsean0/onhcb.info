import { fetch } from "@sapphire/fetch";
import { createSignal, For } from "solid-js";

export default function Transactions(props: {slug: string}) {
    const [transactions, setTransactions] = createSignal([{} as ITransactions])
    fetch<ITransactions[]>(`https://bank.hackclub.com/api/v3/organizations/${props.slug}/transactions?expand=all`).then(res => {
        setTransactions(res)
    })
    return (
        // @ts-expect-error
        <table border={1}>
            <thead>
                <tr>
                    <th>Memo</th>
                    <th>Date</th>
                    <th>Pending</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <For each={transactions()}>{(transaction, i) => 
                    <tr>
                        <td>{transaction.memo}</td>
                        <td>{transaction.date}</td>
                        <td>{String(transaction.pending)}</td>
                        <td>{transaction.amount_cents}</td>
                    </tr>
                }
                </For>
            </tbody>
        </table>
    )
}