import "./Shimmer.css";

function BlogListShimmer({ cards = 3 }) {
  const mapped = Array.from({ length: cards }).map((_, idx) => (
    <div
      className="w-full max-h-[500px] bg-custom-white grid grid-rows-custom-1 gap-2 rounded-xl"
      key={idx}
    >
      <div className="w-full h-[273px] gray overflow-hidden shimmer image"></div>
      <div className="grid grid-rows-custom-2 justify-items-start gap-1">
        <p className="flex items-end gap-2">
          <span className="gray w-28 h-3 shimmer"></span>
          <span className="gray w-16 h-3 shimmer"></span>
        </p>
        <h3 className="w-full gray h-8 ro shimmer"></h3>
        <p className="w-full flex flex-col justify-center items-center gap-2">
          <span className="w-full gray h-4 shimmer"></span>
          <span className="w-full gray h-4 shimmer"></span>
          <span className="w-full gray h-4 shimmer"></span>
        </p>
        <span className="gray w-16 h-5 shimmer"></span>
      </div>
    </div>
  ));

  return (
    <div className="w-[80%] mx-auto md:w-full grid grid-cols-1 lg:grid-cols-3 grid-flow-row justify-items-stretch items-stretch gap-10">
      {mapped}
    </div>
  );
}

export default BlogListShimmer;
