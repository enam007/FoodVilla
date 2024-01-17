const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Array(10)
        .fill("")
        .map((e, i) => {
          return (
            <div
              className="w-52 h-72 p-2 m-2 rounded-lg bg-slate-100 shadow-lg"
              key={i}
            >
              {" "}
              <div>
                {/* Shimmer lines */}
                <div className="h-4 bg-gray-300 w-2/3 mb-4 animate-pulse"></div>
                <div className="h-4 bg-gray-300 w-1/2 mb-4 animate-pulse"></div>
                <div className="h-4 bg-gray-300 w-3/4 mb-4 animate-pulse"></div>
                {/* Shimmer image */}
                <div className="h-40 bg-gray-300 mb-4 animate-pulse"></div>
                {/* Shimmer text */}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Shimmer;
