import { Title } from "solid-start";
import Balances from "~/components/balances.jsx";
import { useParams } from "solid-start";
import Transactions from "~/components/transactions.jsx";
import ProjectMenu from "~/components/projectMenu.jsx";
export default function Org() {
  const params = useParams();
  return (
    <>
      <Title>{params.org} | onHCB</Title>
      <main>
          <ProjectMenu slug={params.org} />
          <Balances slug={params.org}/>
          <Transactions slug={params.org} />
      </main>
    </>
  );
}
