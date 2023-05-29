interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  review?: string;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  center,
  review = "",
}) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="font-normal text-neutral-700 mt-2 flex text-center">
        {review && <span className="text-4xl -translate-y-[9px]">&#8902;</span>}
        {review && <span className="mr-1">{review} &#8901; </span>}
        {subtitle}
      </div>
    </div>
  );
};

export default Heading;
