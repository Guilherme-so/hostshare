import React, { useState } from "react";
import Image from "next/image";
import Heading from "../../Heading";
import Photos from "../../Icons/photos";
import Modal from "../../Modals/GalleryModal";
import ChevronLeft from "../../Icons/chevronLeft";

export default function ListHead({ data }: { data: any }) {
  const [showModal, setShowModal] = useState(false);
  console.log(data);

  return (
    <>
      <Modal
        className="animeBottomToTop bg-white w-screen h-screen"
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <div className="flex justify-between items-center">
          <div>
            <button onClick={() => setShowModal(false)}>
              <ChevronLeft />
            </button>
          </div>
          <div></div>
        </div>

        <div className="loading w-full px-10 h-[90vh] grid grid-cols-1  gap-4 m-auto md:grid-cols-2 mt-10 overflow-y-scroll">
          {data?.info?.images?.data.map((picture: any, index: number) => (
            <div
              key={index}
              className="image w-full h-[60vh] relative bg-slate-400"
            >
              <Image
                src={picture.url}
                fill
                className="object-cover w-full"
                alt="Image"
              />
            </div>
          ))}
        </div>
      </Modal>

      <Heading
        title={data?.info.title}
        subtitle={`
        ${data?.info.location?.city}, ${data?.info.location?.country.title}`}
        review={data?.info.ratings.accuracy}
      />
      <div
        className="
      w-full
      h-[60vh]
      flex
      overflow-hidden
      md:grid
      md:grid-cols-2
      gap-2
      rounded-xl
      relative
    "
      >
        <div className="w-full relative">
          <Image
            src={data?.info.mainImage.url}
            fill
            className="object-cover w-full"
            alt="Image"
          />
        </div>
        <div className="loading w-full relative hidden  md:grid md:grid-cols-2  md:gap-2">
          {data?.info?.images?.data
            ?.filter((it: any, index: number) => index <= 4)
            .map((picture: any, index: number) => {
              if (index > 0) {
                return (
                  <div key={index} className="image w-full relative">
                    <Image
                      src={picture.url}
                      fill
                      className="object-cover w-full"
                      alt="Image"
                    />
                  </div>
                );
              }
            })}
        </div>

        <div
          className="
        absolute
        bottom-6
        right-5
        bg-white
        rounded-md
        py-[6px] px-4
        border border-black
        flex gap-3
        font-medium
        cursor-pointer
      "
          onClick={() => setShowModal(true)}
        >
          <Photos />
          Show all photos
        </div>
      </div>
    </>
  );
}
