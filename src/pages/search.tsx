import { useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import ListCard from "./components/list/ListCard";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import EmptyState from "./components/EmptyState";
const Map = dynamic(() => import("./components/Map"), {
  ssr: false,
});
export default function Search({ data }: { data: any }) {
  const params = useSearchParams();
  const [filteredData, setFilteredData] = useState<any>([]);
  const [cordinate, setCordinate] = useState<any>([]);

  const location = params?.get("locationValue");
  const guests = params?.get("guestCount");
  const rooms = params?.get("roomCount");
  const bathrooms = params?.get("bathroomCount");

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
      const newData = data?.filter((item: any) =>
        searchSensitiveLocation(item.info.location.city)
      );

      setFilteredData(newData);
    }
  }, [location]);

  if (filteredData.length === 0) {
    return <EmptyState />;
  }

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
          {filteredData?.map((item: any, index: number) => (
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
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const url =
    "https://file.notion.so/f/s/24643894-e5c3-4c40-974a-52594f581e03/listings.json?id=f795dab6-14d4-48a9-9567-c72151d311a2&table=block&spaceId=f2ea7328-64a4-4f18-bacc-df6c9ac3d888&expirationTimestamp=1685392903052&signature=PZvFgkKIJ-uKtRBNFeoDMNWoDehT3KR08FXrCrK2lrc&downloadName=listings.json";
  const resp = await fetch(url);
  const data = await resp.json();

  return {
    props: {
      data: data.data,
    },
  };
};
