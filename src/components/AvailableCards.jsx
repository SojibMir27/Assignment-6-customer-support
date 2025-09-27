import React, { use } from "react";
import Card from "./Card";

const AvailableCards  = ({
  supportPromise,
  selectedData,
  setSelectedData,
  handleAdd,
  handleRamove,
  handleCompleted,
  resolvedTask,
}) => {
  const supportData = use(supportPromise);

  return (
    <>
      <section className="w-full md:w-[1300px] mx-auto">
        <h1 className="p-1 ml-4 -mb-0  md:-mb-5 font-bold text-2xl text-[#34485a]">
          Customer Tickets
        </h1>
        <div className="grid grid-cols-12">
          <div className="grid col-span-9 grid-cols-1 md:grid-cols-2 gap-3 p-2 md:p-5">
            <Card
              handleAdd={handleAdd}
              handleRamove={handleRamove}
              selectedData={selectedData}
              setSelectedData={setSelectedData}
              supportData={supportData}
            ></Card>
          </div>

          {/* Task Statuse */}
          <div className="md:col-span-3 col-span-12 m-5 md:m-0 gap-2">
            <div>
              <p className=" font-bold text-2xl text-[#34485a]">Task Status</p>

              <div>
                {selectedData.length === 0 ? (
                  <p className="text-[#627382]">No tasks in Progress.</p>
                ) : (
                  selectedData.map((task, i) => (
                    <div
                      key={i}
                      className="shadow rounded-md bg-white p-3 mb-2"
                    >
                      <h3 className="font-bold mb-2 text-[#001931]">
                        {task.title}
                      </h3>
                      <button
                        onClick={() => handleCompleted(task)}
                        className="btn text-white font-bold w-full bg-[#02a53b]"
                      >
                        Completed
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* resolved task */}
            <div>
              <h1 className="font-bold text-2xl  text-[#34485a]">
                Resolved Task
              </h1>
              <div>
                {resolvedTask.length === 0 ? (
                  <p className="text-[#627382]">No resolved tasks yet.</p>
                ) : (
                  resolvedTask.map((task, i) => (
                    <div
                      key={i}
                      className="shadow rounded-md bg-green-100 px-2 py-1 mb-1 border border-gray-100"
                    >
                      <h3 className="font-bold mb-2 text-[#001931]">
                        {task.title}
                      </h3>

                      <button type="button" className="text-green-700 text-sm">
                        ✅Fixed
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AvailableCards;

