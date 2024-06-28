import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import Footer from '../../Footer/Footer';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const DoctorsHome = () =>
{

  const [totalPatients, setTotalPatients] = useState("");
  const [PatientsWithFillForm, setPatientsWithFillForm] = useState("");
  const [PatientsWithDepression, setPatientsWithDepression] = useState("");
  const [PatientsWithoutDepression, setPatientsWithoutDepression] = useState("");
  // const statisticsData = {
  //   totalPatients: 50,
  //   patientsWithCompleteTreatment: 30,
  //   patientsWithIncompleteTreatment: 20,
  // };

  const chartData = {
    labels: ['Patients with Complete Treatment', 'Patients with Incomplete Treatment'],
    datasets: [
      {
        label: 'Number of Patients',
        data: [PatientsWithDepression, PatientsWithoutDepression],
        // data: [statisticsData.patientsWithCompleteTreatment, statisticsData.patientsWithIncompleteTreatment],
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



  useEffect(() =>
  {
    const fetchUserProfile = async () =>
    {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          "https://b7a2-102-40-210-151.ngrok-free.app/api/doctor/statistics",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("User profile data:", response);

        if (response.ok) {
          const data = await response.json();
          console.log("User profile data:", data);

          // Update state with fetched user profile data
          setTotalPatients(data.data.AllPatient);
          setPatientsWithFillForm(data.data.AllPatientHasFillForm);
          setPatientsWithDepression(data.data.PatientWithDepression);
          setPatientsWithoutDepression(data.data.PatientWithoutDepression);
        } else {
          console.error("Failed to fetch user profile:", response.status);
          // Handle error here
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle error here
      }
    };

    fetchUserProfile();
  }, []);



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
                <p className="text-xl sm:text-2xl font-bold">{totalPatients}</p>
                {/* <p className="text-xl sm:text-2xl font-bold">{statisticsData.totalPatients}</p> */}
              </div>
              <div>
                <p className="text-sm text-gray-600">Patients whom Fill Form :</p>
                <p className="text-xl sm:text-2xl font-bold">{PatientsWithFillForm}</p>
                {/* <p className="text-xl sm:text-2xl font-bold">{statisticsData.patientsWithCompleteTreatment}</p> */}
              </div>
              <div>
                <p className="text-sm text-gray-600">Patients with Depression:</p>
                <p className="text-xl sm:text-2xl font-bold">{PatientsWithDepression}</p>
              
                {/* <p className="text-xl sm:text-2xl font-bold">{statisticsData.patientsWithIncompleteTreatment}</p> */}
              </div>
              <div>
                <p className="text-sm text-gray-600">Patients without Depression:</p>
                <p className="text-xl sm:text-2xl font-bold">{PatientsWithoutDepression}</p>
                {/* <p className="text-xl sm:text-2xl font-bold">{statisticsData.patientsWithIncompleteTreatment}</p> */}
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
