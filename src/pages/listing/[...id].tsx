import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Range } from "react-date-range";
import { differenceInDays, eachDayOfInterval } from "date-fns";
import Container from "../../components/Container";
import ListHead from "../../components/list/ListHead";
import ListInfo from "../../components/list/ListInfo";
import ListReservation from "../../components/list/ListReservation";
import Loading from "@/components/Loading";
import EmptyState from "@/components/EmptyState";
import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

const ListingPage = () => {
  const { id } = useRouter().query;
  const { data: lista, error, isLoading } = useSWR("/api/staticdata", fetcher);
  const [data, setData] = useState<any>(null);

  const [totalPrice, setTotalPrice] = useState(data && data?.info.price);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);

  useEffect(() => {
    if (id !== undefined && lista !== undefined) {
      setData(lista?.data.find((item: any) => item.info.id === id[0]));
    }
  }, [id, lista]);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInDays(dateRange.endDate, dateRange.startDate);

      if (dayCount && data !== null) {
        setTotalPrice(dayCount * data?.info.price);
      } else {
        setTotalPrice(data && data?.info.price);
      }
    }
  }, [dateRange, data?.info.price]);

  return (
    <Container>
      {data ? (
        <div>
          <div className="flex flex-col gap-6">
            <ListHead data={data && data} />
            <div
              className="
              grid
              grid-cols-1
              md:grid-cols-7
              md:gap-10
              mt-6
            "
            >
              <ListInfo data={data && data} />
              <div
                className="
                order-first
                mb-10
                md:order-last
                md:col-span-3
              "
              >
                <ListReservation
                  data={data && data}
                  totalPrice={totalPrice}
                  onChangeDate={(value) => setDateRange(value)}
                  dateRange={dateRange}
                />
              </div>
            </div>
          </div>
        </div>
      ) : isLoading ? (
        <Loading />
      ) : error ? (
        <EmptyState />
      ) : null}
    </Container>
  );
};

export default ListingPage;
