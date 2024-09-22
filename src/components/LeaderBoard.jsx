import { useState, useEffect } from 'react';
import { initialTeams } from '../util/teams'; // Adjust the path as necessary

const Leaderboard = () => {
  const [teams] = useState(initialTeams);

  useEffect(() => {
    console.log('Teams:', teams);
  }, [teams]);

  // Sorting the teams in ascending order by 'time' and then reversing the array
  const sortedTeams = teams.sort((a, b) => a.time - b.time).reverse();

  // Function to format time duration
  const formatTime = (milliseconds) => {
    if (isNaN(milliseconds)) return 'Invalid time';
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours}m ${minutes}s ${seconds}ms`;
  };

  return (
    <div className='Leaderboard'>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Team Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {sortedTeams.map((team, index) => (
            <tr key={team.name}>
              <td>{index + 1}</td>
              <td>{team.name}</td>
              <td>{formatTime(team.time)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;