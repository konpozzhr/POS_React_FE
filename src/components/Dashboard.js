import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import DashboardCard from './DashboardCard';
import PieChart from './PieChart';
import './custom.css';
import ProfitLossOverview from './ProfitLossOverview';
import TopCustomers from './TopCustomers';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />

        {/* First row: Dashboard Cards and Pie Chart */}
        <div className="p-2 flex gap-4 mt-3" id="test" >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-2/3">
              <DashboardCard title="Total Sales" value="$43742.27" icon="💰" color="text-purple-500" />
              <DashboardCard title="Total Expenses" value="$900.00" icon="📄" color="text-blue-500" />
              <DashboardCard title="Total Expenses" value="$900.00" icon="📄" color="text-blue-500" />
              <DashboardCard title="Total Expenses" value="$900.00" icon="📄" color="text-blue-500" />
              <DashboardCard title="Total Expenses" value="$900.00" icon="📄" color="text-blue-500" />
              <DashboardCard title="Total Expenses" value="$900.00" icon="📄" color="text-blue-500" />
            </div>
            <div className="w-1/3 grid grid-cols-1 gap-5 ">
              <PieChart />
            </div>  
        </div>

         {/* Second row: Profit & Loss Overview and Top Customers */}
        <div className="p-4 flex gap-4 mt-6">
          <div className="w-3/4">
            <ProfitLossOverview />
          </div>
          <div className="w-1/4">
            <TopCustomers />
          </div>
        </div>
        
        
      

      </div>
    </div>
  );
};

export default Dashboard;

