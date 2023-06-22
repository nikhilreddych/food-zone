const Shimmer = () => {
  return (
    <div className="flex flex-wrap" data-testid="shimmer">
      {Array(15)
        .fill("")
        .map((e, index) => {
          return (
            <div
              key={index}
              className="w-52 h-72 p-2 m-2 shadow-lg bg-gray-100 rounded-lg"></div>
          );
        })}
    </div>
  );
};

export default Shimmer;
