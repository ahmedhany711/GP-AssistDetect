import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import Footer from '../../Footer/Footer';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const DoctorsHome = () =>
{
  const statisticsData = {
    totalPatients: 50,
    patientsWithCompleteTreatment: 30,
    patientsWithIncompleteTreatment: 20,
  };

  const chartData = {
    labels: ['Patients with Complete Treatment', 'Patients with Incomplete Treatment'],
    datasets: [
      {
        label: 'Number of Patients',
        data: [statisticsData.patientsWithCompleteTreatment, statisticsData.patientsWithIncompleteTreatment],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Patients Treatment Overview',
      },
    },
  };

  return (
    <>
      <div className="container mx-auto my-44 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-headingFont text-nav mb-6">Doctor's Home Page</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 sm:p-6 shadow-md rounded-lg">
            <h2 className="text-lg sm:text-xl font-bold mb-4">Statistics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Total Patients:</p>
                <p className="text-xl sm:text-2xl font-bold">{statisticsData.totalPatients}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Patients with Complete Treatment:</p>
                <p className="text-xl sm:text-2xl font-bold">{statisticsData.patientsWithCompleteTreatment}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Patients with Incomplete Treatment:</p>
                <p className="text-xl sm:text-2xl font-bold">{statisticsData.patientsWithIncompleteTreatment}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 shadow-md rounded-lg">
            <h2 className="text-lg sm:text-xl font-bold mb-4">Charts</h2>
            <div className="mt-4">
              <Bar data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default DoctorsHome;
