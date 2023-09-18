const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(10)
        .fill("")
        .map((e, i) => {
          return <div className="shimmer-card" key={i}></div>;
        })}
    </div>
  );
};

export default Shimmer;
