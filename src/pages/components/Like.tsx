import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const LikeButton = () => {
  return (
    <div
      className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
      "
    >
      <AiOutlineHeart
        size={28}
        className="
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
        "
      />
      <AiFillHeart size={24} className={"fill-neutral-500/70"} />
    </div>
  );
};

export default LikeButton;
