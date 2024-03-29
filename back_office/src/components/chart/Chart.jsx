import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { countDemandesByUserId } from '../../data/users';

const DemandsPerUserBarChart = ({userIds}) => {
  console.log(userIds)
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const demandeCounts = await Promise.all(
          
          userIds.map(async (userId) => {
            const count = await countDemandesByUserId(userId);
            console.log(count)
            return count;
          })
        );

        setChartData({
          labels: userIds,
          datasets: [
            {
              label: 'Number of Demandes',
              data: demandeCounts,
              backgroundColor: 'rgba(75,192,192,0.6)',
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

      fetchChartData();
    
  }, [userIds]);

  return (
    <div>
      <h2>Demandes per User</h2>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default DemandsPerUserBarChart;