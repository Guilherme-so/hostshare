import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./components/navbar";

import { Nunito } from "next/font/google";

const font = Nunito({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="pb-20 pt-28">
        <Component className={font.className} {...pageProps} />
      </div>
    </>
  );
}
