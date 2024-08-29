import React from 'react';

interface TeamProps {
  name: string;
  crest: string;
  score?: number | null;
}

interface GamesTableItemProps {
  time: string;
  date: string;
  homeTeam: TeamProps;
  awayTeam: TeamProps;
  league: string;
  showScores: boolean;
}

const GamesTableItem: React.FC<GamesTableItemProps> = ({ time, date, homeTeam, awayTeam, league, showScores }) => {
  return (
    <div className="bg-secondary-background border border-neutral-700 rounded-lg w-full overflow-hidden">
      <div className="flex flex-col sm:grid sm:grid-cols-[auto,auto,1fr,auto] items-center gap-2 p-3 sm:p-4">
        <div className="flex justify-between w-full sm:w-auto sm:flex-col items-start text-xs sm:text-sm">
          <span className="font-semibold text-sm">{time}</span>
          <span className="text-neutral-400">{date}</span>
        </div>

        <div className='flex items-center justify-center w-full sm:w-auto sm:px-3 sm:justify-start gap-2 text-neutral-300 text-xs sm:text-sm my-2 sm:my-0'>
          <div className="rounded-full w-3 h-3 sm:w-4 sm:h-4 bg-red-500 flex-shrink-0"></div>
          {league}
        </div>

        <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center w-full space-y-2 sm:space-y-0 sm:space-x-4 my-2 sm:my-0">
          <div className="flex items-center space-x-2 justify-end">
            <span className="truncate text-sm">{homeTeam.name}</span>
            <img src={homeTeam.crest} alt={homeTeam.name} className="w-6 h-6 object-contain" />
            {showScores && homeTeam.score !== null && <span className="text-sm font-bold">{homeTeam.score}</span>}
          </div>

          <span className="text-neutral-400 px-2 text-sm">VS</span>

          <div className="flex items-center space-x-2">
            {showScores && awayTeam.score !== null && <span className="text-sm font-bold">{awayTeam.score}</span>}
            <img src={awayTeam.crest} alt={awayTeam.name} className="w-6 h-6 object-contain" />
            <span className="truncate text-sm">{awayTeam.name}</span>
          </div>
        </div>

        {!showScores && (
          <div className="flex space-x-2 mt-2 sm:mt-0">
            <button className="bg-neutral-700 hover:bg-primary-accent text-xs sm:text-sm px-3 py-1 rounded transition-colors">H</button>
            <button className="bg-neutral-700 hover:bg-primary-accent text-xs sm:text-sm px-3 py-1 rounded transition-colors">D</button>
            <button className="bg-neutral-700 hover:bg-primary-accent text-xs sm:text-sm px-3 py-1 rounded transition-colors">A</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamesTableItem;
