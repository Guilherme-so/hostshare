
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      src="/images/hostshare_blue.png"
      alt="Logo"
      className="hidden md:block cursor-pointer"
      height={100}
      width={100}
    />
  );
}
