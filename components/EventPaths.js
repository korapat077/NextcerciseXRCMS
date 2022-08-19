import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const EventPaths = ({ eIdEdit }) => {
  const [eventPaths, setEventPaths] = useState("noPath");
  const CheckPaths = () => {
    const [startPath, setStartPath] = useState(1);
    const [numPaths, setNumPaths] = useState([]);
    const [noPath, setNoPath] = useState([]);
    const [startCheckpoint, setStartCheckpoint] = useState([]);
    const [pathObj, setpathObj] = useState([]);
    useEffect(() => {
      if (eIdEdit) {
        axios({
          method: "get",
          url: `${process.env.NEXT_PUBLIC_APP_NAME}/checkpoint/event/${eIdEdit}`,
        }).then(function (response) {
          // console.log(response.data.result.length);
          if (response.data.result.length > 0) {
            const data = response.data.result || [{}];
            setNumPaths(response.data.result);
            // console.log(response.data.result);
          }
        });
        axios({
          method: "get",
          url: `${process.env.NEXT_PUBLIC_APP_NAME}/path/${eIdEdit}`,
        }).then(function (response) {
          console.log(response.data.result.pathObj);
          setpathObj(response.data.result.pathObj);
        });
      }
    }, []);

    const getPath = () => {
      if (startCheckpoint <= numPaths) {
        axios({
          method: "post",
          data: {
            eId: eIdEdit,
            path: noPath,
            start: startCheckpoint,
          },
          url: `${process.env.NEXT_PUBLIC_APP_NAME}/path/generate/`,
        }).then(function (response) {
          Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(response);
        });
      } else {
        alert("ดูเหมือนจะกรอกผิดนะ");
      }
    };

    if (eventPaths == "setUpPath") {
      return (
        <div>
          <div className="block  p-6 w-3/12 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100  font-bold">
            <form>
              <div className="flex flex-wrap  items-center justify-end m-2">
                <div className=" mr-5">No. of path</div>
                <div className="">
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border w-10 p-2 border-gray-300 text-gray-900 text-sm rounded-md"
                    required
                    onChange={(e) => {
                      setNoPath(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-wrap  items-center justify-end m-2">
                <div className=" mr-5">start Checkpoint</div>
                <div className="">
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border w-10 p-2 border-gray-300 text-gray-900 text-sm rounded-md"
                    onChange={(e) => {
                      setStartCheckpoint(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={getPath}
              >
                Gen Path
              </button>
              {pathObj.map((r, k) => {
                if (k > 0) {
                  return (
                    <div class="block p-6 mt-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div key={k} className="flex flex-wrap">
                        <div className=" text-base mr-2">{k}</div>
                        <div className=" flex flex-wrap gap-2">
                          {r.map((r2, k2) => {
                            return (
                              <div key={k2} className=" text-base px-2  bg-slate-600 text-white rounded-2xl">{r2.cpId}</div>
                            )

                          })}
                        </div>

                      </div>
                    </div>
                  )
                }
              })}
            </form>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <div className=" mt-5 flex flex-wrap gap-5">
        <div className="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded"
            onChange={(e) => {
              setEventPaths("noPath");
            }}
          />
          <label
            htmlFor="default-checkbox"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            No path
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            id="default-checkbox1"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded "
            onChange={(e) => {
              setEventPaths("setUpPath");
            }}
          />
          <label
            htmlFor="default-checkbox1"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Random path
          </label>
        </div>
      </div>
      <CheckPaths />
      <br></br>
    </div>
  );
};
export default EventPaths;
