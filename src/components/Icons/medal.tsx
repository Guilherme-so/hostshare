import React from "react";

export const MedalOutLine = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      className={`text-2xl w-6 fill-black opacity-80 ${className}`}
    >
      <path d="m16 17c3.8659932 0 7 3.1340068 7 7s-3.1340068 7-7 7-7-3.1340068-7-7 3.1340068-7 7-7zm0 2c-2.7614237 0-5 2.2385763-5 5s2.2385763 5 5 5 5-2.2385763 5-5-2.2385763-5-5-5zm9.6666667-18.66666667c1.0543618 0 1.9181651.81587779 1.9945142 1.85073766l.0054858.14926234v6.38196601c0 .70343383-.3690449 1.35080636-.9642646 1.71094856l-.1413082.0779058-9.6666667 4.8333334c-.5067495.2533747-1.0942474.2787122-1.6171466.0760124l-.1717078-.0760124-9.66666666-4.8333334c-.62917034-.3145851-1.04315599-.93418273-1.09908674-1.62762387l-.00648607-.16123049v-6.38196601c0-1.05436179.81587779-1.91816512 1.85073766-1.99451426l.14926234-.00548574zm0 2h-19.33333337v6.38196601l9.66666667 4.83333336 9.6666667-4.83333336z"></path>
    </svg>
  );
};

export default function MedalFilled({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 14"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      className={`text-2xl w-5 fill-black ${className}`}
    >
      <linearGradient
        id="rauschgradient"
        x1="8.496301%"
        x2="92.184371%"
        y1="17.163843%"
        y2="17.163843%"
      >
        <stop offset="0" stop-color="#329a9a"></stop>
        <stop offset=".49633138" stop-color="#329a9a"></stop>
        <stop offset="1" stop-color="#329a9a"></stop>
      </linearGradient>
      <path
        d="m9.93333333 0c.87202857 0 1.58763737.66971256 1.66054897 1.52286029l.0061177.14380638v2.15041978c0 .54338023-.2645632 1.0492763-.7030502 1.35988148l-.1238314.07975002-3.73157298 2.1770919c1.26372053.49592199 2.15845458 1.7265679 2.15845458 3.16619015 0 1.8777681-1.52223185 3.4-3.4 3.4s-3.4-1.5222319-3.4-3.4c0-1.43962225.89473405-2.67026816 2.15845458-3.16619015l-3.73157296-2.1770919c-.46936038-.27379356-.77303698-.75722407-.8203903-1.29248482l-.00649132-.14714668v-2.15041978c0-.87202856.66971256-1.58763736 1.52286029-1.66054901l.14380638-.00611766z"
        fill="#fff"
      ></path>
      <path
        d="m5.8 8.2c-1.3254834 0-2.4 1.0745166-2.4 2.4 0 1.2702549.98683903 2.3100212 2.23568127 2.3944631l.16431873.0055369.16431873-.0055369c1.24884224-.0844419 2.23568127-1.1242082 2.23568127-2.3944631 0-1.3254834-1.0745166-2.4-2.4-2.4zm4.13333333-7.2h-8.26666666c-.33471803 0-.61182201.24667507-.65943829.56815155l-.00722838.09851512v2.15041978c0 .20323832.09252797.39336698.24794223.51877872l.08281042.05707388 4.13333333 2.41111111c.08896072.05189375.18694036.08154732.28620841.08896071h.09941122l.09855226-.01482678.09597544-.02965357.09168071-.04448036 4.13333338-2.41111111c.1755529-.10240591.2931599-.27812994.3231792-.47556484l.0075734-.10028776v-2.15041978c0-.33471803-.2466751-.61182201-.5681516-.65943829z"
        fill="#329a9a"
      ></path>
    </svg>
  );
}