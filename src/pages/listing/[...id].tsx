import { GetServerSideProps } from "next";
import React from "react";
import Container from "../components/Container";

const ListingPage = ({ data }: { data: any }) => {
  console.log(data);

  return (
    <Container>
      {/* <div
        className="
        max-w-screen-lg 
        mx-auto
      "
      >
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
          <div
            className="
            grid 
            grid-cols-1 
            md:grid-cols-7 
            md:gap-10 
            mt-6
          "
          >
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              roomCount={listing.roomCount}
              guestCount={listing.guestCount}
              bathroomCount={listing.bathroomCount}
              locationValue={listing.locationValue}
            />
            <div
              className="
              order-first 
              mb-10 
              md:order-last 
              md:col-span-3
            "
            >
              <ListingReservation
                price={listing.price}
                totalPrice={totalPrice}
                onChangeDate={(value) => setDateRange(value)}
                dateRange={dateRange}
                onSubmit={onCreateReservation}
                disabled={isLoading}
                disabledDates={disabledDates}
              />
            </div>
          </div>
        </div>
      </div> */}
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const url =
    "https://file.notion.so/f/s/24643894-e5c3-4c40-974a-52594f581e03/listings.json?id=f795dab6-14d4-48a9-9567-c72151d311a2&table=block&spaceId=f2ea7328-64a4-4f18-bacc-df6c9ac3d888&expirationTimestamp=1685215979593&signature=pABV_JxGSsBZg2ie91bnEcQgxj0_WI7wSe8ScfO20Pk&downloadName=listings.json";

  const resp = await fetch(url);
  const data = await resp.json();

  return {
    props: {
      data: id && data.data.find((item: any) => item.info.id === id[0]),
    },
  };
};

export default ListingPage;
