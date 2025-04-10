// import React from "react";
import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import IncomeOverview from "../../components/income/IncomeOverview";

const Income = () => {
  const [incomeData, setIncomeData] = useState([]);
  const [openAddIncomeModel, setOpenAddIncomeModel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show: null,
    data: null
  })

  const fetchAllIncomeDetails = async () => {
    
  }
  return (
    <DashboardLayout activeMenu="Income">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <div className="">
            <IncomeOverview 
              transactions={incomeData}
              onAddIncome={() => setOpenAddIncomeModel(true)}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Income;
