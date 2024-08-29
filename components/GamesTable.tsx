"use client"

import React, { useEffect, useState } from 'react';
import GamesTableItem from './GamesTableItem';

interface Match {
  utcDate: string;
  status: string;
  homeTeam: {
    name: string;
    crest: string;
    score: number | null; // Added score
  };
  awayTeam: {
    name: string;
    crest: string;
    score: number | null; // Added score
  };
  competition: {
    name: string;
  };
}

interface FootballData {
  matches: Match[];
}

const GamesTable: React.FC = () => {
  const [upcomingGames, setUpcomingGames] = useState<Match[]>([]);
  const [liveGames, setLiveGames] = useState<Match[]>([]);
  const [playedGames, setPlayedGames] = useState<Match[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/football');
        const data: FootballData = await response.json();
        const currentTime = new Date().getTime();

        const upcoming: Match[] = [];
        const live: Match[] = [];
        const played: Match[] = [];

        data.matches.forEach((match) => {
          const matchTime = new Date(match.utcDate).getTime();

          if (match.status === 'IN_PLAY') {
            live.push(match);
          } else if (matchTime > currentTime) {
            upcoming.push(match);
          } else {
            played.push(match);
          }
        });

        upcoming.sort((a, b) => new Date(a.utcDate).getTime() - new Date(b.utcDate).getTime());
        live.sort((a, b) => new Date(a.utcDate).getTime() - new Date(b.utcDate).getTime());
        played.sort((a, b) => new Date(b.utcDate).getTime() - new Date(a.utcDate).getTime()); // Most recent played games first

        setUpcomingGames(upcoming);
        setLiveGames(live);
        setPlayedGames(played);
      } catch (error) {
        console.error('Error fetching football data:', error);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { day: '2-digit', month: 'short' }).toUpperCase();
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  return (
    <div className="p-3 sm:p-5 space-y-2 sm:space-y-3">
      <div className="text-base sm:text-lg font-bold">Live Games</div>
      {liveGames.length === 0 ? (
        <div>No live games currently.</div>
      ) : (
        <div className="space-y-2 sm:space-y-3">
          {liveGames.map((game, index) => (
            <GamesTableItem
              key={index}
              time={formatTime(game.utcDate)}
              date={formatDate(game.utcDate)}
              homeTeam={{ name: game.homeTeam.name, crest: game.homeTeam.crest, score: game.homeTeam.score }}
              awayTeam={{ name: game.awayTeam.name, crest: game.awayTeam.crest, score: game.awayTeam.score }}
              league={game.competition.name}
              showScores={true}
            />
          ))}
        </div>
      )}

      <div className="text-base sm:text-lg font-bold">Upcoming Games</div>
      {upcomingGames.length === 0 ? (
        <div>No upcoming games scheduled.</div>
      ) : (
        <div className="space-y-2 sm:space-y-3">
          {upcomingGames.map((game, index) => (
            <GamesTableItem
              key={index}
              time={formatTime(game.utcDate)}
              date={formatDate(game.utcDate)}
              homeTeam={{ name: game.homeTeam.name, crest: game.homeTeam.crest }}
              awayTeam={{ name: game.awayTeam.name, crest: game.awayTeam.crest }}
              league={game.competition.name}
              showScores={false}
            />
          ))}
        </div>
      )}

      <div className="text-base sm:text-lg font-bold">Played Games</div>
      {playedGames.length === 0 ? (
        <div>No games have been played yet.</div>
      ) : (
        <div className="space-y-2 sm:space-y-3">
          {playedGames.map((game, index) => (
            <GamesTableItem
              key={index}
              time={formatTime(game.utcDate)}
              date={formatDate(game.utcDate)}
              homeTeam={{ name: game.homeTeam.name, crest: game.homeTeam.crest, score: game.homeTeam.score }}
              awayTeam={{ name: game.awayTeam.name, crest: game.awayTeam.crest, score: game.awayTeam.score }}
              league={game.competition.name}
              showScores={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default GamesTable;