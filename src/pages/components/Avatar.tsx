import Image from "next/image";
import Medal from "./Icons/medal";
import MedalFilled from "./Icons/medal";

export default function Avatar({
  link = "",
  isSuperUser,
}: {
  link?: string;
  isSuperUser: boolean;
}) {
  console.log(isSuperUser);
  return (
    <div className="relative">
      <Image
        className="rounded-full"
        alt="Avatar"
        src={link ? link : "/images/avatar.jpg"}
        height={link ? 60 : 30}
        width={link ? 60 : 30}
      />
      {isSuperUser == true && <MedalFilled className="absolute bottom-0 right-0" />}
    </div>
  );
}
