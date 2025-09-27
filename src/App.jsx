import { Suspense, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import { toast, ToastContainer } from "react-toastify";
import AvailableCards from "./components/AvailableCards";

const fetchData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
let supportPromise = fetchData();

function App() {
  const [selectedData, setSelectedData] = useState([]); // Progtess
  const [resolvedTask, setResolvedTask] = useState([]); // Resolved

  const handleAdd = (ticket) => {
    toast("✅ In Progress");
    setSelectedData((preData) => [...preData, ticket]);
    supportPromise = supportPromise.then((data) =>
      data.filter((item) => item.id !== ticket.id)
    );
  };

  const handleCompleted = (recevedTask) => {
    const filterTask = selectedData.filter(
      (preData) => preData.id !== recevedTask.id
    );
    setSelectedData(filterTask);
    setResolvedTask((preData) => [...preData, recevedTask]);
    toast("✔️ Resolved");
  };

  return (
    <>
      <Navbar></Navbar>

      <Hero selectedData={selectedData} resolvedTask={resolvedTask}></Hero>

      <Suspense
        fallback={
          <span className="loading loading-spinner mx-auto flex justify-center items-center text-warning p-5 m-5"></span>
        }
      >
        <AvailableCards 
          selectedData={selectedData}
          setSelectedData={setSelectedData}
          supportPromise={supportPromise}
          handleAdd={handleAdd}
          resolvedTask={resolvedTask}
          handleCompleted={handleCompleted}
        ></AvailableCards>

      </Suspense>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
