import React, { useState } from "react";
import Avatar from "../../Avatar";
import dynamic from "next/dynamic";
import { MedalOutLine } from "../../Icons/medal";
import Key from "../../Icons/key";
import Calendar from "../../Icons/calendar";

//@ts-ignore
const Map = dynamic(() => import("../../../Map"), {
  ssr: false,
});

export default function ListInfo({ data }: { data: any }) {
  const [readMore, setReadMore] = useState(false);
  const isSuperUser = data?.info?.host?.isSuperhost;

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col">
        <div
          className="
            text-2xl
            font-medium
            opacity-80
            flex 
            flex-row 
            justify-between
            items-center
          "
        >
          <div>Hosted by {data?.info?.host?.name ?? "unknown"}</div>
          <Avatar
            link={data?.info?.host?.avatar?.url}
            isSuperUser={isSuperUser}
          />
        </div>
        <div
          className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-normal
            text-neutral-800
          "
        >
          <div>{data?.info.maxGuestCapacity} guests &#8901;</div>
          {data?.info?.details?.data?.map((item: any, index: number) => {
            if (index > 0) {
              return (
                <div key={index}>
                  {item.value} {item.type} &#8901;
                </div>
              );
            }
          })}
        </div>
      </div>
      <hr />
      <div>
        {isSuperUser ? (
          <div className="pb-6">
            <div className="flex gap-3 items-center mb-4">
              <div className="flex mb-auto translate-y-[6px]">
                <MedalOutLine />
              </div>
              <div className="flex flex-col mb-auto">
                <h4 className="text-base m-0 p-0 h-5 font-medium mb-1 opacity-80">
                  {data?.info?.host?.name} is a Superhost
                </h4>
                <p className="font-light text-sm opacity-50">
                  Superhosts are experienced, highly rated hosts who are
                  committed to providing great stays for their guests.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center mb-4">
              <div className="flex mb-auto translate-y-[6px]">
                <Key />
              </div>
              <div className="flex flex-col mb-auto">
                <h4 className="text-base m-0 p-0 h-5 font-medium mb-1 opacity-80">
                  Great check-in experience
                </h4>
                <p className="font-light text-sm opacity-50">
                  {(data?.info.ratings.checkin / 5) * 100}% of recent guests
                  gave the check-in process a 5-star rating.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex mb-auto translate-y-[6px]">
                <Calendar />
              </div>
              <div className="flex flex-col mb-auto">
                <h4 className="text-base m-0 p-0 h-5 font-medium mb-1 opacity-80">
                  Free cancellation before 21 Jun.
                </h4>
              </div>
            </div>
          </div>
        ) : null}
        {isSuperUser && <hr />}
      </div>

      <div
        className="
      text-base font-normal text-neutral-700"
      >
        {readMore ? (
          <div>
            {data?.info.description}{" "}
            <span
              className="text-mainColor cursor-pointer"
              onClick={() => setReadMore((prev) => !prev)}
            >
              {" "}
              Read Less
            </span>
          </div>
        ) : (
          <div>
            {data?.info.description.substring(0, 600) + "..."}
            <span
              className="text-mainColor cursor-pointer"
              onClick={() => setReadMore((prev) => !prev)}
            >
              {" "}
              Read More
            </span>
          </div>
        )}
      </div>
      <hr />
      <Map center={[data?.info.location.lat, data?.info.location.long]} />
    </div>
  );
}
