import { BiSearch } from "react-icons/bi";
import useSearchModal from "../../hooks/useSearchModal";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { differenceInDays } from "date-fns";

export default function Search() {
  const searchModal = useSearchModal();
  const params = useSearchParams();

  const location = params?.get("locationValue");
  const guests = params?.get("guestCount");
  const startDate = params?.get("startDate");
  const endDate = params?.get("endDate");

  const locationLabel = useMemo(() => {
    if (location) {
      return location;
    }
    return "Anywhere";
  }, [location]);

  const duration = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff = differenceInDays(end, start);

      if (diff === 0) {
        diff = 1;
      }

      return `${diff} Days`;
    }

    return "Any Week";
  }, [startDate, endDate]);

  const guest = useMemo(() => {
    if (guests) {
      return `${guests} Guests`;
    }

    return "Add Guests";
  }, [guests]);

  return (
    <div
      onClick={searchModal.onOpen}
      className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-sm transition cursor-pointer"
    >
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">{locationLabel}</div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
          {duration}
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden sm:block">{guest}</div>
          <div className="p-2 bg-mainColor rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
