import { Title } from "solid-start";
import Balances from "~/components/balances.jsx";
import { useParams } from "solid-start";
export default function Home() {
  const params = useParams();
  return (
    <>
      <Title>{params.org} | onHCB</Title>
      <main>
        <h1>{params.org}</h1>
        <Balances slug={params.org}/>
      </main>
    </>
  );
}
