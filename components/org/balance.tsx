import { HCB_Balance } from "@/types/hcb";
import { Grid } from "theme-ui";

export function Balance(props: { balance: HCB_Balance}) {
    // Work out values
    const balance_cents_amount = parseInt(String(props.balance.balance_cents.toString().replace("-", "")), 10)/100;
    const fee_balance_cents = parseInt(String(props.balance.fee_balance_cents.toString().replace("-", "")), 10)/100;
    const incoming_balance_cents = parseInt(String(props.balance.incoming_balance_cents.toString().replace("-", "")), 10)/100;
    var balance_cents_negative: boolean;
    var fee_balance_cents_negative: boolean;
    var incoming_balance_cents_negative: boolean;
    if (props.balance.balance_cents.toString().startsWith("-")) balance_cents_negative = true; else balance_cents_negative = false;
    if (props.balance.fee_balance_cents.toString().startsWith("-")) fee_balance_cents_negative = true; else fee_balance_cents_negative = false;
    if (props.balance.incoming_balance_cents.toString().startsWith("-")) incoming_balance_cents_negative = true; else incoming_balance_cents_negative = false;
    // Work out display values
    var balance_cents_display: string;
    var fee_balance_cents_display: string;
    var incoming_balance_cents_display: string;
    if (balance_cents_negative) balance_cents_display = "-$" + balance_cents_amount; else balance_cents_display = "$" + balance_cents_amount;
    if (fee_balance_cents_negative) fee_balance_cents_display = "-$" + fee_balance_cents; else fee_balance_cents_display = "$" + fee_balance_cents;
    if (incoming_balance_cents_negative) incoming_balance_cents_display = "-$" + incoming_balance_cents; else incoming_balance_cents_display = "$" + incoming_balance_cents;
    // Render
    return (
        <Grid columns={[1, "1fr", 3]}>
            <div>
                <h2>Balance:</h2>
                <h3>{balance_cents_display}</h3>
            </div>
            <div>
                <h2>Fee Balance:</h2>
                <h3>{fee_balance_cents_display}</h3>
            </div>
            <div>
                <h2>Incoming Balance:</h2>
                <h3>{incoming_balance_cents_display}</h3>
            </div>
        </Grid>
    )
}