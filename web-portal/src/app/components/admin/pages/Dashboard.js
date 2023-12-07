import React from 'react';
import { Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';

const DashboardPage = () => {
  // Sample data for chart
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>

      {/* <div className="card-container">
        <Card className="total-card">
          <Card.Body>
            <Card.Title>Total Sales</Card.Title>
            <Card.Text>$10,000</Card.Text>
          </Card.Body>
        </Card>

        <Card className="chart-card">
          <Card.Body>
            <Card.Title>Sales Chart</Card.Title>
            <div className="chart-container">
              <Bar data={chartData} />
            </div>
          </Card.Body>
        </Card>
      </div> */}
    </div>
  );
};

export default DashboardPage;