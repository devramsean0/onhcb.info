interface IOrganizations {
    id: string;
    object: string;
    href: string;
    slug: string;
    category: string;
    transparent: true;
    demo_mode: false,
    logo: null,
    public_message: null,
    balances: {
        balance_cents: string;
        fee_balance_cents: number;
        incoming_balance_cents: number;
    },
    created_at: string;
    users: IUsers[]
}
interface ITransactions {
    id: string;
    object: string;
    href: string;
    amount_cents: number;
    memo: string;
    date: string;
    type: string;
    pending: boolean;
    reciepts: {
        count: number;
        missing: boolean
    };
    comments: {
        count: number;
    };
    organization: {
        id: string;
        object: string;
        href: string;
    };
    tags: ITags[];
    card_charge: {
        id: string;
        object: string;
        href: string;
    }
}
interface IUsers {
    id: string;
    object: string;
    full_name: string;
    admin: boolean;
    photo: string;
}
interface ITags {
    id: string;
    object: string;
    label: string;
}