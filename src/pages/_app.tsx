import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import { Nunito } from "next/font/google";
import SearchModal from "../components/Modals/SearchModal";

const font = Nunito({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <SearchModal />
      <div className="pb-20 pt-28">
        <Component className={font.className} {...pageProps} />
      </div>
    </>
  );
}
