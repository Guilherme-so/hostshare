import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import ListHead from "../components/list/ListHead";
import ListInfo from "../components/list/ListInfo";
import ListReservation from "../components/list/ListReservation";
import { Range } from "react-date-range";
import { differenceInDays, eachDayOfInterval } from "date-fns";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

const ListingPage = ({ data }: { data: any }) => {
  console.log(data);
  const [totalPrice, setTotalPrice] = useState(data?.info.price);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInDays(dateRange.endDate, dateRange.startDate);

      if (dayCount && data?.info.price) {
        setTotalPrice(dayCount * data?.info.price);
      } else {
        setTotalPrice(data?.info.price);
      }
    }
  }, [dateRange, data?.info.price]);

  return (
    <Container>
      <div>
        <div className="flex flex-col gap-6">
          <ListHead data={data} />
          <div
            className="
            grid 
            grid-cols-1 
            md:grid-cols-7 
            md:gap-10 
            mt-6
          "
          >
            <ListInfo data={data} />
            <div
              className="
              order-first 
              mb-10 
              md:order-last 
              md:col-span-3
            "
            >
              <ListReservation
                data={data}
                totalPrice={totalPrice}
                onChangeDate={(value) => setDateRange(value)}
                dateRange={dateRange}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const url =
    "https://file.notion.so/f/s/24643894-e5c3-4c40-974a-52594f581e03/listings.json?id=f795dab6-14d4-48a9-9567-c72151d311a2&table=block&spaceId=f2ea7328-64a4-4f18-bacc-df6c9ac3d888&expirationTimestamp=1685305926635&signature=ugEcSyhZUFrHgWuVAsrg4jpxn84O5fdx58sCoqsV7WI&downloadName=listings.json";

  const resp = await fetch(url);
  const data = await resp.json();

  return {
    props: {
      data: id && data.data.find((item: any) => item.info.id === id[0]),
    },
  };
};

export default ListingPage;
