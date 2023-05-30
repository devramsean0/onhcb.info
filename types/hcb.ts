export interface HCB_Org {
    id: string;
    object: string;
    href: string;
    name: string;
    slug: string;
    category: string;
    transparent: boolean;
    demo_mode: boolean;
    logo: string;
    public_message: string;
    balances: HCB_Balance;
    created_at: string;
    users: HCB_User[];
    message?: string;
}
export interface HCB_Balance {
    balance_cents: number;
    fee_balance_cents: number;
    incoming_balance_cents: number;
}
export interface HCB_User {
    id: string;
    object: string;
    full_name: string;
    admin: boolean;
    photo: string;
}
export interface HCB_Transaction {
    id: string;
    object: string;
    href: string;
    amount_cents: number;
    memo: string;
    date: string;
    type: string;
    pending: boolean;
    reciepts: HCB_Receipt;
    commenents: HCB_Comments
    organization: HCB_Org;
    tags: HCB_Tag[];
    card_charge: HCB_CardCharge;
    ach_transfer: HCB_AchTransfer;
    check: HCB_Check;
    donation: HCB_Donation;
    invoice: HCB_Invoice;
    transfer: HCB_Transfer;
}
export interface HCB_Receipt {
    count: number;
    missing: boolean;
}
export interface HCB_Comments {
    count: number;
}
export interface HCB_Tag {
    id: string;
    object: string;
    label: string;
}
export interface HCB_CardCharge {
    id: string;
    object: string;
    href: string;
    memo: string;
    transaction: {};
    organization: HCB_Org;
    amount_cents: number;
    date: string;
    card: HCB_Card;
    user: HCB_User;
}
export interface HCB_Card {
    id: string;
    object: string;
    href: string;
    name: string;
    type: string;
    status: string;
    issued_at: string;
    owner: HCB_User;
    organization: HCB_Org;
}
export interface HCB_AchTransfer {
    id: string;
    object: string;
    href: string;
    memo: string;
    transaction: HCB_Transaction;
    organization: HCB_Org;
    amount_cents: string;
    date: string;
    status: string;
    beneficiary: {
        name: string;
    }
}
export interface HCB_Check {
    id: string;
    object: string;
    href: string;
    memo: string;
    transaction: HCB_Transaction;
    organization: HCB_Org;
    amount_cents: number;
    date: string;
    status: string;
}
export interface HCB_Donation {
    id: string;
    object: string;
    href: string;
    memo: string;
    transaction: HCB_Transaction;
    organization: HCB_Org;
    amount_cents: number;
    donor: {
        name: string;
    }
    date: string;
    status: string;
}
export interface HCB_Invoice {
    id: string;
    object: string;
    href: string;
    memo: string;
    transaction: HCB_Transaction;
    organization: HCB_Org;
    amount_cents: string;
    date: string;
    status: string;
}
export interface HCB_Transfer {
    id: string;
    object: string;
    href: string;
    memo: string;
    transaction: HCB_Transaction;
    organization: HCB_Org;
    amount_cents: string;
    date: string;
    status: string;
}