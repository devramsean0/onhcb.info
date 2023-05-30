import { HCB_Transaction } from "@/types/hcb";

export function Transaction(props: {transaction: HCB_Transaction}) {
    const amount = parseInt(String(props.transaction.amount_cents.toString().replace("-", "")), 10)/100;
    // Work out if amount is negative
    let negative: boolean;
    if (props.transaction.amount_cents.toString().startsWith("-")) {
        negative = true;
    } else {
        negative = false;
    }
    // Render
    if (negative == true) {
        return (
            <tr>
                <td>
                    <center>{props.transaction.memo}</center>
                </td>
                <td>
                    <center><span style={{color: "red"}}>-${amount}</span></center>
                </td>
                <td>
                    <center>{props.transaction.date}</center>
                </td>
                <td>
                    <center>{props.transaction.type}</center>
                </td>
            </tr>
        )
    } else {
        return (
            <tr>
                <td>
                    <center>{props.transaction.memo}</center>
                </td>
                <td>
                    <center><span style={{color: "green"}}>${amount}</span></center>
                </td>
                <td>
                    <center>{props.transaction.date}</center>
                </td>
                <td>
                    <center>{props.transaction.type}</center>
                </td>
            </tr>
        )
    }
}