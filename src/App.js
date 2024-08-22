import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyProvider } from './context/MyContext';
import MyComponent from './MyComponent';
import Header from "./Components/Header"
import {  Route, Routes } from 'react-router-dom';
import DashBoard from './Components/DashBoard'
import Rooms from './Components/Rooms'
import Attendence from './Components/Attendence'
import Accounts from './Components/Accounts'
import Maintainence from './Components/Maintainence'
import Analytics from "./Sidebars/Dashboardsidebars/Analytics"
import Complaints from "./Sidebars/Dashboardsidebars/Complaints"
import Meals from "./Sidebars/Dashboardsidebars/Meals"
import User from "./Sidebars/Dashboardsidebars/Users"
import Students from "./Sidebars/Dashboardsidebars/Students"
import Stock from "./Sidebars/Dashboardsidebars/Stock"
import Occupency from './Sidebars/RoomsSideBar/Occupency'
import Assigned from './Sidebars/RoomsSideBar/Assigned'
import Furniture from './Sidebars/RoomsSideBar/Furniture'
import Hostel from './Sidebars/RoomsSideBar/Hostel'
import Roomss from './Sidebars/RoomsSideBar/Roomss'
import "@fontsource/montserrat"; 
import All from './Sidebars/AttendenceSidebar/All';
import In from './Sidebars/AttendenceSidebar/In';
import Out from './Sidebars/AttendenceSidebar/Out';
import Leave from './Sidebars/AttendenceSidebar/Leave';
import AccountDashboard from './Sidebars/AccountSideBar/AccountDashboard'
import Credit from './Sidebars/AccountSideBar/Credit'
import Debit from './Sidebars/AccountSideBar/Debit'
import Vendor from './Sidebars/AccountSideBar/Vendor'
import Orders from './Sidebars/AccountSideBar/Orders'
import Expected from './Sidebars/AccountSideBar/Expected'
import Overdude from './Sidebars/AccountSideBar/Overdude'
function App() {
  return (
    <div className="App">
      <Header/>
      <MyProvider>
      <MyComponent />
    <Routes>
    <Route path="/" element={<DashBoard>

    </DashBoard>} />
    <Route path="/Rooms" element={<Rooms />} />
    <Route path="/Attendance" element={<Attendence />} />
    <Route path="/Accounts" element={<Accounts />} />
    <Route path="/Maintenance" element={<Maintainence />} />
    <Route path="/Dashboard/Analytics" element={<Analytics />} />
    <Route path="/Dashboard/Students" element={<Students />} />
    <Route path="/Dashboard/Complaints" element={<Complaints />} />
    <Route path="/Dashboard/Stock" element={<Stock />} />
    <Route path="/Dashboard/Users" element={<User />} />
    <Route path="/Dashboard/Meals" element={<Meals />} />
    <Route path="/Rooms/Occupancy" element={<Occupency/>} />
    <Route path="/Rooms/Assigned" element={<Assigned/>} />
    <Route path="/Rooms/Furniture" element={<Furniture/>} />
    <Route path="/Rooms/Hostel" element={<Hostel/>} />
    <Route path="/Rooms/Roomss" element={<Roomss/>} />
    <Route path="/Attendence/All" element={<All/>} />
    <Route path="/Attendence/In" element={<In/>} />
    <Route path="/Attendence/Out" element={<Out/>} />
    <Route path="/Attendence/Leave" element={<Leave/>} />
    <Route path="/Accounts/AccountDashboard" element={<AccountDashboard/>} />
    <Route path="/Accounts/Credit" element={<Credit/>} />
    <Route path="/Accounts/Debit" element={<Debit/>} />
    <Route path="/Accounts/Expected" element={<Expected/>} />
    <Route path="/Accounts/Overdude" element={<Overdude/>} />
    <Route path="/Accounts/Vendor" element={<Vendor/>} />
    <Route path="/Accounts/Orders" element={<Orders/>} />
    
    </Routes>
    </MyProvider>


      
   


    </div>
  );
}

export default App;
