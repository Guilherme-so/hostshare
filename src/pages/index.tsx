import Container from "../components/Container";
import ListCard from "../components/list/ListCard";
import Loading from "@/components/Loading";
import EmptyState from "@/components/EmptyState";
import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home = () => {
  const { data: lista, error, isLoading } = useSWR("/api/staticdata", fetcher);

  if (lista === undefined && isLoading) {
    return <Loading />;
  }

  if (error) <EmptyState />;

  return (
    <Container>
      <div
        className="
          pt-24
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {lista?.data
          ?.filter((it: any, index: number) => index < 20)
          .map((item: any, index: number) => (
            <ListCard key={index} data={item} />
          ))}
      </div>
    </Container>
  );
};

export default Home;
