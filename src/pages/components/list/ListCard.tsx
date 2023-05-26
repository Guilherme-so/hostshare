import Image from "next/image";
import { useRouter } from "next/navigation";
import LikeButton from "../Like";

const ListCard = ({ data }: { data: any }) => {
  const router = useRouter();
  console.log(data);

  return (
    <div
      onClick={() => router.push(`/listing/${data?.info.id}`)}
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <Image
            fill
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={data.info.mainImage.url}
            alt="Listing"
          />
          <div
            className="
            absolute
            top-3
            right-3
          "
          >
            <LikeButton />
          </div>
        </div>
        <div className="font-semibold text-lg">
          {data?.info.location.city}, {data?.info.location.country.title}
        </div>
        <div className="font-light text-neutral-500">{data?.info.type}</div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">$ {data?.info.price}</div>
          <div className="font-light">night</div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
