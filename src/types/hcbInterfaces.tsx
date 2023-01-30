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
interface IUsers {
    id: string;
    object: string;
    full_name: string;
    admin: boolean;
    photo: string;
}