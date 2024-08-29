

const TopGameItem = () => {
  
  return (
    <div className="bg-secondary-background duration-200 hover:border-primary-accent cursor-pointer p-2 sm:p-3 rounded-lg border border-neutral-700">
      <div className="flex justify-between">
        <div className="flex gap-1 items-center">
          <div className="bg-red-500 rounded-full w-4 sm:w-5 h-4 sm:h-5"></div>
          <span className="text-xs sm:text-sm text-neutral-400">VS</span>
          <div className="bg-blue-500 rounded-full w-4 sm:w-5 h-4 sm:h-5"></div>
        </div>
        <div className="flex flex-col items-end text-xs sm:text-sm">
          <span className="font-semibold text-sm">20:00</span>
          <span className="text-neutral-400">12 OCT</span>
        </div>
      </div>

      <div className="mt-3 sm:mt-5">
        <div className="text-sm sm:text-lg">
          <div>Manchester United</div>
          <div>Chelsea</div>
        </div>

        <div className="flex items-center gap-2 mt-2 sm:mt-3">
          <div className="bg-yellow-400 w-3 sm:w-4 h-3 sm:h-4 rounded-full"></div>
          <div className="text-xs sm:text-sm text-neutral-300">Bundesliga</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-2 sm:mt-3 text-xs sm:text-sm">
        <button className="border border-neutral-700 py-1 sm:py-2 px-2 sm:px-3 rounded hover:border-primary-accent duration-200 active:scale-90 hover:scale-105 sm:hover:scale-110">
          Home
        </button>
        <button className="border border-neutral-700 py-1 sm:py-2 px-2 sm:px-3 rounded hover:border-primary-accent duration-200 active:scale-90 hover:scale-105 sm:hover:scale-110">
          Draw
        </button>
        <button className="border border-neutral-700 py-1 sm:py-2 px-2 sm:px-3 rounded hover:border-primary-accent duration-200 active:scale-90 hover:scale-105 sm:hover:scale-110">
          Away
        </button>
      </div>
    </div>
  );
};

export default TopGameItem;
