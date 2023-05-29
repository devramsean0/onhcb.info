import { createSignal } from "solid-js"
import { fetch } from "@sapphire/fetch";

export default function Balances(props: {slug: string}) {
    // Create signals
    const [balance, setBalance] = createSignal("");
    const [feesBalance, setFeesBalance] = createSignal(0);
    const [incomingBalance, setIncomingBalance] = createSignal(0);
    // Get Balances
    fetch<IOrganizations>(`https://bank.hackclub.com/api/v3/organizations/${props.slug}?expand=balances`).then(res => {
        setBalance(res.balances.balance_cents);
        setFeesBalance(res.balances.fee_balance_cents);
        setIncomingBalance(res.balances.incoming_balance_cents);
    })
    return (
        <div class="div4">
            {/* @ts-expect-error */}
            <table border={1}>
                <thead>
                    <tr>
                        <th>Balance</th>
                        <th>Fee</th>
                        <th>Incoming Balance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{`$${Number(balance()) / 100}`}</td>
                        <td>{`$${Number(feesBalance()) / 100}`}</td>
                        <td>{`$${Number(incomingBalance()) / 100}`}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}