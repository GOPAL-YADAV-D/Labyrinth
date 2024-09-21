import { useState } from 'react';
import { initialTeams } from '../util/teams'; // Adjust the path as necessary

const Leaderboard = () => {
  const [teams] = useState(initialTeams);

  const sortedTeams = teams.sort((a, b) => b.score - a.score);

  return (
    <div className='Leaderboard'>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Team Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedTeams.map((team, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{team.name}</td>
              <td>{team.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;