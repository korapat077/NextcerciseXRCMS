import { useEffect, useState } from "react";
import { BsFillCaretDownFill, BsTrash } from "react-icons/bs";
import axios from "axios";
import Swal from "sweetalert2";
const EventCheckpoint = ({ eIdEdit }) => {
  const Cehck = () => {
    const addFields = () => {
      let newfield = {};
      setInputFields([...inputFields, newfield]);
    };
    const submit = (e, index) => {
      e.preventDefault();
      const bodyFormData = new FormData();
      bodyFormData.append("eId", eIdEdit);
      bodyFormData.append("cpId", index);
      bodyFormData.append("name", name);
      bodyFormData.append("summary", checkPoint);
      bodyFormData.append("desciption", detail);
      bodyFormData.append("lat", latitude);
      bodyFormData.append("long", longitude);
      bodyFormData.append("length", length);
      bodyFormData.append("positionX", x);
      bodyFormData.append("positionY", y);
      bodyFormData.append("qId", qGoal);
      bodyFormData.append("startFile", startFileBinary);
      bodyFormData.append("resultFile", resultFileBinary);
      bodyFormData.append("backgroundFile", backgroundFileBinary);
      Swal.fire({
        text: "create successfully",
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#006400',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Save'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            confirmButtonText: "save",
            confirmButtonColor: "#53a33d",
            title: "create successfully!",
          });
          axios({
            method: "post",
            url: `${process.env.NEXT_PUBLIC_APP_NAME}/checkpoint`,
            data: bodyFormData,
          }).then(function (response) {
        
          });
        }
      })
    };
    const removeFields = (index) => {
      let data = [...inputFields];
      console.log(index);
      data.splice(index, 1);
      setInputFields(data);
    };
    const [dataQuest, setDataQuest] = useState([]);
    useEffect(() => {
      if (eIdEdit) {
        axios({
          method: "get",
          url: `${process.env.NEXT_PUBLIC_APP_NAME}/quest`,
        }).then(function (response) {
          setDataQuest(response.data.result);
        });
        axios({
          method: "get",
          url: `${process.env.NEXT_PUBLIC_APP_NAME}/event/${eIdEdit}`,
        }).then(function (response) {});
        axios({
          method: "get",
          url: `${process.env.NEXT_PUBLIC_APP_NAME}/checkpoint/event/${eIdEdit}`,
        }).then(function (response) {
          if (response.data.result.length > 0) {
            const data = response.data.result || [{}];
            setInputFields(data);
          }
        });
      } else {
      }
    }, []);
    const [dropdownDefault, setDropdownDefault] = useState(false);
    const [startfile, setStartFile] = useState("Start file");
    const [resultfile, setResultFile] = useState("Result file");
    const [backgroundfile, setBackgroundfile] = useState("Background file");
    const [indexset, setindex] = useState(null);
    const fileStartImg = ".mind";
    const fileResiltImg = ".glb , .gltf";
    const fileBgImg = "image/*";
    const [inputFields, setInputFields] = useState([{}]);
    const [name, setName] = useState(null);
    const [checkPoint, setCheckPoint] = useState(null);
    const [detail, setDetail] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [length, setLength] = useState(null);
    const [x, setX] = useState(null);
    const [y, setY] = useState(null);
    const [qGoal, setQGoal] = useState(null);
    const [startFileBinary, setStartFileBinary] = useState(null);
    const [resultFileBinary, setResultFileBinary] = useState(null);
    const [backgroundFileBinary, setBackgroundFileBinary] = useState(null);
    const [checkpoint, setCheckpoint] = useState([]);
    const [cqId, setcqId] = useState(null);
    const onEdit = (e, index) => {
      e.preventDefault();
      setcqId(index);
    };
    return (
      <div>
        <form className="mt-5 ">
          {inputFields.map((input, index) => {
            const key = index + 1;
            if (cqId == key) {
              return (
                <div key={index + 1}>
                  <div className="grid grid-cols-12 gap-4  p-2 rounded-lg mt-2 border shadow-md   shadow-indigo-500/40 ">
                    <div>{index + 1}</div>
                    <div className="col-span-2">
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight "
                        type="text"
                        name="name"
                        defaultValue={input.name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="col-span-2">
                      <div className="flex flex-wrap">
                        <input
                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight "
                          type="string"
                          name="checkPoint"
                          defaultValue={input.summary}
                          onChange={(e) => {
                            setCheckPoint(e.target.value);
                          }}
                          placeholder="Check point summary"
                          required
                        />
                        <textarea
                          rows="3"
                          className="resize-y  mt-2 rounded-md w-full p-2 bg-gray-200 "
                          name="detail"
                          defaultValue={input.desciption}
                          onChange={(e) => {
                            setDetail(e.target.value);
                          }}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="flex flex-wrap">
                        <input
                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight "
                          type="number"
                          name="Latitude"
                          defaultValue={input.lat}
                          onChange={(e) => {
                            setLatitude(e.target.value);
                          }}
                          placeholder="Latitude"
                          required
                        />
                        <input
                          className="bg-gray-200 mt-2 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight "
                          type="number"
                          name="Longitude"
                          defaultValue={input.long}
                          onChange={(e) => {
                            setLongitude(e.target.value);
                          }}
                          placeholder="Longitude"
                          required
                        />
                        <input
                          className="bg-gray-200 mt-2 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight "
                          type="number"
                          name="Length"
                          defaultValue={input.length}
                          onChange={(e) => {
                            setLength(e.target.value);
                          }}
                          placeholder="Length"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="flex flex-wrap">
                        <input
                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight "
                          type="number"
                          name="X"
                          defaultValue={input.positionX}
                          onChange={(e) => {
                            setX(e.target.value);
                          }}
                          placeholder="X"
                          required
                        />
                        <input
                          className="bg-gray-200 mt-2 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight "
                          type="number"
                          name="Y"
                          defaultValue={input.positionY}
                          onChange={(e) => {
                            setY(e.target.value);
                          }}
                          placeholder="Y"
                          required
                        />
                      </div>
                    </div>
                    {/* {qGoal} */}
                    <div className="col-span-2">
                      <select
                        className="block appearance-none w-full text-sm bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        onChange={(e) => {
                          const slectGoal = e.target.value;
                          setQGoal(slectGoal);
                        }}
                      >
                        <option value={qGoal}>กรุณาเลือก</option>
                        {dataQuest.map((r, k) => {
                          return (
                            <option
                              key={k}
                              value={r.qId}
                              selected={r.qId === input.qId ? true : false}
                            >
                              {r.title}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="col-span-2">
                      <div className="flex flex-wrap gap-2">
                        <div className="flex w-full  items-center justify-center bg-grey-lighter">
                          <label className="w-64 flex flex-col items-center px-4 py-1 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue ">
                            <span className=" p-1 font-base text-base leading-normal">
                              {startfile}
                            </span>
                            <input
                              type="file"
                              className="hidden"
                              accept={fileStartImg}
                              onChange={(e) => {
                                setStartFile(e.target.files[0].name);
                                setStartFileBinary(e.target.files[0]);
                              }}
                            />
                          </label>
                        </div>
                        <div className="flex w-full  items-center justify-center bg-grey-lighter">
                          <label className="w-64 flex flex-col items-center px-4 py-1 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue ">
                            <span className=" p-1 font-base text-base leading-normal">
                              {resultfile}
                            </span>
                            <input
                              type="file"
                              className="hidden"
                              accept={fileResiltImg}
                              onChange={(e) => {
                                setResultFile(e.target.files[0].name);
                                setResultFileBinary(e.target.files[0]);
                              }}
                            />
                          </label>
                        </div>
                        <div className="flex w-full  items-center justify-center bg-grey-lighter">
                          <label className="w-64 flex flex-col items-center px-4 py-1 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue ">
                            <span className=" p-1 font-base text-base leading-normal">
                              {backgroundfile}
                            </span>
                            <input
                              type="file"
                              className="hidden"
                              accept={fileBgImg}
                              onChange={(e) => {
                                //  console.log(e.target.files[0].name);
                                setBackgroundfile(e.target.files[0].name);
                                setBackgroundFileBinary(e.target.files[0]);
                              }}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className=" flex flex-wrap gap-2">
                        <button
                          className="bg-green-500 w-full hover:bg-green-500/90 text-white font-bold py-2 px-2 rounded-xl"
                          onClick={(e) => {
                            submit(e, index + 1);
                          }}
                        >
                          Save
                        </button>
                        <button
                          className=" bg-yellow-500 w-full hover:bg-yellow-500/90 hover:bg-gray-400 text-white font-bold py-2 px-2 rounded-xl"
                          onClick={(e) => {
                            onEdit(e, index + 1);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className=" w-full  bg-red-500 hover:bg-red-500/90 hover:bg-gray-400 text-white font-bold py-2 px-2 rounded-xl"
                          onClick={removeFields}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={index + 1}>
                  <div className="grid grid-cols-12 gap-4  p-2 rounded-lg mt-2 border shadow-md   shadow-indigo-500/40 ">
                    <div>{index + 1}</div>
                    <div className="col-span-2">
                      <input
                        disabled
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight "
                        type="text"
                        name="name"
                        defaultValue={input.name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="col-span-2">
                      <div className="flex flex-wrap">
                        <input
                          disabled
                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight "
                          type="string"
                          name="checkPoint"
                          defaultValue={input.summary}
                          onChange={(e) => {
                            setCheckPoint(e.target.value);
                          }}
                          placeholder="Check point summary"
                          required
                        />
                        <textarea
                          disabled
                          rows="3"
                          className="resize-y  mt-2 rounded-md w-full p-2 bg-gray-200 "
                          name="detail"
                          defaultValue={input.desciption}
                          onChange={(e) => {
                            setDetail(e.target.value);
                          }}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="flex flex-wrap">
                        <input
                          disabled
                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight "
                          type="number"
                          name="Latitude"
                          defaultValue={input.lat}
                          onChange={(e) => {
                            setLatitude(e.target.value);
                          }}
                          placeholder="Latitude"
                          required
                        />
                        <input
                          className="bg-gray-200 mt-2 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight "
                          type="number"
                          name="Longitude"
                          defaultValue={input.long}
                          onChange={(e) => {
                            setLongitude(e.target.value);
                          }}
                          placeholder="Longitude"
                          required
                        />
                        <input
                          disabled
                          className="bg-gray-200 mt-2 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight "
                          type="number"
                          name="Length"
                          defaultValue={input.length}
                          onChange={(e) => {
                            setLength(e.target.value);
                          }}
                          placeholder="Length"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="flex flex-wrap">
                        <input
                          disabled
                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight "
                          type="number"
                          name="X"
                          defaultValue={input.positionX}
                          onChange={(e) => {
                            setX(e.target.value);
                          }}
                          placeholder="X"
                          required
                        />
                        <input
                          disabled
                          className="bg-gray-200 mt-2 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight "
                          type="number"
                          name="Y"
                          defaultValue={input.positionY}
                          onChange={(e) => {
                            setY(e.target.value);
                          }}
                          placeholder="Y"
                          required
                        />
                      </div>
                    </div>
                    {/* {qGoal} */}
                    <div className="col-span-2">
                      <select
                        disabled
                        className="block appearance-none w-full text-sm bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        onChange={(e) => {
                          const slectGoal = e.target.value;
                          setQGoal(slectGoal);
                        }}
                      >
                        <option value={qGoal}>กรุณาเลือก</option>
                        {dataQuest.map((r, k) => {
                          return (
                            <option
                              key={k}
                              value={r.qId}
                              selected={r.qId === input.qId ? true : false}
                            >
                              {r.title}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="col-span-2">
                      <div className="flex flex-wrap gap-2">
                        <div className="flex w-full  items-center justify-center bg-grey-lighter">
                          <label className="w-64 flex flex-col items-center px-4 py-1 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue ">
                            <span className=" p-1 font-base text-base leading-normal">
                              {startfile}
                            </span>
                            <input
                              disabled
                              type="file"
                              className="hidden"
                              accept={fileStartImg}
                              onChange={(e) => {
                                setStartFile(e.target.files[0].name);
                                setStartFileBinary(e.target.files[0]);
                              }}
                            />
                          </label>
                        </div>
                        <div className="flex w-full  items-center justify-center bg-grey-lighter">
                          <label className="w-64 flex flex-col items-center px-4 py-1 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue ">
                            <span className=" p-1 font-base text-base leading-normal">
                              {resultfile}
                            </span>
                            <input
                              disabled
                              type="file"
                              className="hidden"
                              accept={fileResiltImg}
                              onChange={(e) => {
                                setResultFile(e.target.files[0].name);
                                setResultFileBinary(e.target.files[0]);
                              }}
                            />
                          </label>
                        </div>
                        <div className="flex w-full  items-center justify-center bg-grey-lighter">
                          <label className="w-64 flex flex-col items-center px-4 py-1 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue ">
                            <span className=" p-1 font-base text-base leading-normal">
                              {backgroundfile}
                            </span>
                            <input
                              disabled
                              type="file"
                              className="hidden"
                              accept={fileBgImg}
                              onChange={(e) => {
                                //  console.log(e.target.files[0].name);
                                setBackgroundfile(e.target.files[0].name);
                                setBackgroundFileBinary(e.target.files[0]);
                              }}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className=" flex flex-wrap gap-2">
                        <button
                          className="bg-green-500 w-full hover:bg-green-500/90 text-white font-bold py-2 px-2 rounded-xl"
                          onClick={(e) => {
                            submit(e, index + 1);
                          }}
                        >
                          Save
                        </button>
                        <button
                          className=" bg-yellow-500 w-full hover:bg-yellow-500/90 hover:bg-gray-400 text-white font-bold py-2 px-2 rounded-xl"
                          onClick={(e) => {
                            onEdit(e, index + 1);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className=" w-full  bg-red-500 hover:bg-red-500/90 hover:bg-gray-400 text-white font-bold py-2 px-2 rounded-xl"
                          onClick={removeFields}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
          <button
            className=" w-full mt-5  bg-blue-500 hover:bg-blue-500/90 hover:bg-gray-400 text-white font-bold py-2 px-2 rounded-xl"
            type="button"
            onClick={addFields}
          >
            Add Event Checkpoint
          </button>
        </form>
      </div>
    );
  };

  return (
    <div className="mt-5">
      <div className="text-2xl font-bold">Event Checkpoints</div>
      <hr className="mt-5"></hr>
      <div>
        <div className="grid grid-cols-12 mt-5 font-bold ">
          <div>No</div>
          <div className="col-span-2">Name</div>
          <div className="col-span-2">Detail</div>
          <div className="col-span-1">Location</div>
          <div className="col-span-1">position</div>
          <div className="col-span-2">Quest</div>
          <div className="col-span-2">File</div>
          <div className="grid grid-cols-1">Save/Edit</div>
        </div>
        <Cehck />
        <div className="mt-5 md:flex md:items-left mb-6 items-center">
          <div className="">
            <label
              className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              URL:
            </label>
          </div>
          <div className=" w-full">
            <input
              disabled
              className="bg-gray-200  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700"
              id="inline-full-name"
              type="text"
              defaultValue={`${process.env.NEXT_PUBLIC_APP_NAME}/${eIdEdit}`}
            />
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
};
export default EventCheckpoint;
