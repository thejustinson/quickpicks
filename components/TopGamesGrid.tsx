import TopGameItem from "./TopGameItem";

const TopGamesGrid = () => {
  return (
    <div className="p-3 sm:p-5 space-y-2 sm:space-y-3">
      <div className="text-base sm:text-lg font-bold">
        Today&apos;s top picks
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3">
        <TopGameItem />
        <TopGameItem />
        <TopGameItem />
        <TopGameItem />
      </div>
    </div>
  );
};

export default TopGamesGrid;