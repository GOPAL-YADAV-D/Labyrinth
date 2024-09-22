import { useState } from 'react';
import { initialTeams } from '../util/teams'; // Adjust the path as necessary

const Leaderboard = () => {
  const [teams] = useState(initialTeams);

  // Sorting the teams in ascending order by 'time' and then reversing the array
  const sortedTeams = teams.sort((a, b) => a.time - b.time).reverse();

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
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{team.name}</td>
              <td>{team.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
