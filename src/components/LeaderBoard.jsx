import { useState, useEffect } from 'react';
import { initialTeams } from '../util/teams'; // Adjust the path as necessary

const Leaderboard = () => {
  const [teams] = useState(initialTeams);

  useEffect(() => {
    console.log('Teams:', teams);
  }, [teams]);

  // Create a copy of the teams array and sort it in ascending order by 'time' and then reverse the array
  const sortedTeams = [...teams].sort((a, b) => a.time - b.time);

  // Function to format time duration
  const formatTime = (milliseconds) => {
    if (isNaN(milliseconds)) return 'Invalid time';
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const remainingMilliseconds = milliseconds % 1000;

    return `${minutes}m ${seconds}s ${remainingMilliseconds}ms`;
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

export default Leaderboard;