import { useContext } from 'react'
import { ThemeContext } from "../Context/ThemeContext";
import "./Dashboard.css";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';



const Dashboard = () => {
  
ChartJS.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend );

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Traffic Sources',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October',
 'November', 'December'];

const data = {
  labels,
  datasets: [
    {
      label: 'Users',
      data: labels.map(() => Math.random()*10),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
   
  ],
};



    const { theme, toggleTheme } = useContext(ThemeContext)


    return (
        <div className={theme === 'light' ? "lightTheme" : "darkTheme"}>
          <div className="main">
            <h1>Dashboard</h1>
            <button className={theme === 'light' ? "btn-light" : "btn-dark"}  onClick={toggleTheme}>
                {theme === 'light' ? 'Dark' : 'Light'}
            </button>
          </div>
            <div className={theme === 'light' ? 'divs-container-light' : 'divs-container-dark'}>
                <div>
                    <p>NEW ACCOUNTS</p>
                    <h2>234<span>%</span></h2>
                </div>
                <div>
                    <p>TOTAL EXPENSES</p>
                    <h2>71<span>%</span></h2>
                </div>
                <div>
                    <p>COMPANY VALUE</p>
                    <h2>1,45M</h2>
                </div>
                <div>
                    <p>NEW EMPLOYEES</p>
                    <h2>34 <span>hires</span></h2>
                </div>
            </div>
            <div className={theme === 'light' ? 'bar-light' : 'bar-dark'}>
            <Bar options={options} data={data} />
            </div>
            <div className={theme === 'light' ? 'divs-container-light' : 'divs-container-dark'}>
                <div>
                    <p>Income</p>
                    <h2>5,456</h2>
                </div>
                <div>
                    <p>Expenses</p>
                    <h2>4,764</h2>
                </div>
                <div>
                    <p>Spendings</p>
                    <h2>1.5M</h2>
                </div>
                <div>
                    <p>Totals</p>
                    <h2>31,564</h2>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;