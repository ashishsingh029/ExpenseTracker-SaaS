// import React from "react";
import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import IncomeOverview from "../../components/income/IncomeOverview";
import { getAllIncomesFn } from "../../apis/incomeApis";
import Modal from "../../components/modal/Modal";
import AddIncomeForm from "../../components/income/AddIncomeForm";
import { toast } from "react-hot-toast";
import { addIncomeFn } from "../../apis/incomeApis";

const Income = () => {
  const [incomeData, setIncomeData] = useState([]);
  const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show: null,
    data: null
  })

  const fetchAllIncomeDetails = async () => {
    if(loading) {
      return;
    }
    setLoading(true);
    try {
      const { incomes } = await getAllIncomesFn();
      if(incomes) {
        setIncomeData(incomes);
      }
    } catch (error) {
      console.log("Something went wrong: ", error);
    } finally {
      setLoading(false);
    }
  }
  
  const handleAddIncome = async income => {
    const { source, amount, date } = income;
    if(!source.trim()) {
      toast.error("Source is Required");
      return;
    } 
    if(!amount || isNaN(amount) || Number(amount) <= 0) {
      toast.error("Amount should be a valid number and greater than 0.")
      return;
    }
    if(!date) {
      toast.error("Date is required");
      return;
    }
    try {
      await addIncomeFn(income);
      toast.success("Income added successfully");
      setOpenAddIncomeModal(false);
    } catch (error) {
      console.error("Error adding income: ", error?.response?.data?.message);
    }
  }

  const deleteIncome = async id => {

  }

  useEffect(() => {
    fetchAllIncomeDetails();
    return () => {};
  }, [])
  return (
    <DashboardLayout activeMenu="Income">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <div className="">
            <IncomeOverview 
              transactions={incomeData}
              onAddIncome={() => setOpenAddIncomeModal(true)}
            />
          </div>
        </div>
        <Modal 
          isOpen={openAddIncomeModal}
          onClose={() => setOpenAddIncomeModal(false)}
          title="Add Income"
        >
          <AddIncomeForm onAddIncome={handleAddIncome}/>
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default Income;
