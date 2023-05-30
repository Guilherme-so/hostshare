import { useState } from "react";
import Container from "../components/Container";
import ListCard from "../components/list/ListCard";
import Loading from "@/components/Loading";
import EmptyState from "@/components/EmptyState";
import Pagination from "@/components/Pagination";
import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home = () => {
  const { data: lista, error, isLoading } = useSWR("/api/staticdata", fetcher);

  const [pageNumber, setPageNumber] = useState(0);
  const [itemsPerPage] = useState(10);

  const currentPage = pageNumber * itemsPerPage;
  const pageCount = Math.ceil(lista?.data.length / itemsPerPage);

  const changePage = ({ selected }: { selected: any }) => {
    setPageNumber(selected);
  };

  return (
    <Container>
      {lista === undefined && isLoading ? (
        <Loading />
      ) : error ? (
        <EmptyState />
      ) : (
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
            .slice(currentPage, currentPage + itemsPerPage)
            .map((item: any, index: number) => {
              return <ListCard key={index} data={item} />;
            })}
        </div>
      )}
      {lista && <Pagination changePage={changePage} pageCount={pageCount} />}
    </Container>
  );
};

export default Home;
