import { useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import ListCard from "../components/list/ListCard";
import dynamic from "next/dynamic";
import EmptyState from "../components/EmptyState";
import useSWR from "swr";
import Loading from "@/components/Loading";
import Pagination from "@/components/Pagination";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

//@ts-ignore
const Map = dynamic(() => import("../Map"), {
  ssr: false,
});

export default function Search() {
  const params = useSearchParams();
  const location = params?.get("locationValue");
  const guests = params?.get("guestCount");
  const rooms = params?.get("roomCount");
  const bathrooms = params?.get("bathroomCount");

  const { data: lista, error, isLoading } = useSWR("/api/staticdata", fetcher);
  const [filteredData, setFilteredData] = useState<any>([]);
  const [cordinate, setCordinate] = useState<any>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    if (filteredData) {
      setCordinate(filteredData[0]?.info?.location);
    }
  }, [location, filteredData]);

  const searchSensitiveLocation = useCallback(
    (title: any) => {
      if (location) {
        const regex = new RegExp(location, "i");
        return regex.test(title);
      }
    },
    [location]
  );

  useEffect(() => {
    if (location) {
      const newData = lista?.data?.filter((item: any) =>
        searchSensitiveLocation(item.info.location.city)
      );

      setFilteredData(newData);
    }
  }, [location, lista]);

  if (lista === undefined && isLoading) {
    return <Loading />;
  }

  if (filteredData && filteredData.length === 0) {
    return <EmptyState />;
  }

  if (error) <EmptyState />;

  // Pagination
  const currentPage = pageNumber * itemsPerPage;
  const pageCount = Math.ceil(filteredData?.length / itemsPerPage);

  const changePage = ({ selected }: { selected: any }) => {
    setPageNumber(selected);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-custom">
      <div className="max-w-[2520px]  xl:px-6 lg:px-5 md:px-10 sm:px-2 px-4">
        <div
          className="
        pt-24
        grid 
        grid-cols-1 
        sm:grid-cols-3
        md:grid-cols-3 
        lg:grid-cols-3
        xl:grid-cols-3
        2xl:grid-cols-4
        gap-8
      "
        >
          {filteredData
            ?.slice(currentPage, currentPage + itemsPerPage)
            .map((item: any, index: number) => (
              <ListCard key={index} data={item} />
            ))}
        </div>
      </div>

      <div className="hidden md:block pt-16">
        {cordinate && (
          <Map
            center={[cordinate?.lat, cordinate?.long]}
            className="h-[100vh] rounded-sm"
          />
        )}
      </div>

      <Pagination changePage={changePage} pageCount={pageCount} />
    </div>
  );
}
