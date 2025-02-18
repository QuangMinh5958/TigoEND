import Header from "./Header";
import DateData from "./DateData";
import MonthsData from "./MonthsData/MonthsData";
import YearsData from "./YearsData";
import Profit from "./Profit";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full px-5 lg:py-5 py-2">
        <Header />
        <DateData />
        <MonthsData />
        <YearsData />
      </div>

      <Profit />
    </div>
  );
};

export default Dashboard;
