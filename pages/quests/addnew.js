import Link from "next/link";
import { useEffect, useState } from "react";
import { IoArrowUndoSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import axios  from "axios"
const Addnew = () => {
  const [questTitle, setQuestTitle] = useState([]);
  const [qDescription, setQDescription] = useState([]);
  const [qActivity, setQActivity] = useState(null);
  const [qGoal, setQGoal] = useState(null);
  const [qGValue, setQGValue] = useState([]);
  const onClickSaveQuest = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "ยืนยันการสร้างเควส?",
      text: "กรุณาตรวจสอบข้อมูลก่อนทำการสร้าง!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#53a33d",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "post",
          data:{
            "title":questTitle , 
            "description":qDescription , 
            "activityType":qActivity , 
            "goalUnit":qGoal , 
            "goalValue":qGValue , 
          },
          url:`${process.env.NEXT_PUBLIC_APP_NAME}/quest`,
        }).then(function (response) {
          Swal.fire({
            confirmButtonText: "ยืนยัน",
            confirmButtonColor: "#53a33d",
            title: "สร้างเควสสำเร็จ!",
          });
        });
      }
    });
  };
  return (
    <div>
      <div className="flex flex-wrap justify-between items-center">
        <div className="text-md font-bold">กรอกข้อมูลเพื่อสร้างเควส</div>
        <div>
          <Link href="/quests/">
            <a>
              <IoArrowUndoSharp className="text-2xl" />
            </a>
          </Link>
        </div>
      </div>
      <hr className="mt-5"></hr>
      <div>
        <form className="w-full mt-5" onSubmit={(e) => onClickSaveQuest(e)}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Quest's title
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                required
                onChange={(e) => setQuestTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Quest's description
              </label>
              <textarea
                className="resize-y rounded-md w-full p-2 bg-gray-200 "
                required
                onChange={(e) => setQDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-2/4 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                Activity Type
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  defaultChecked={qActivity}
                  onChange={(e) => {
                    const slectActivity = e.target.value;
                    setQActivity(slectActivity);
                  }}
                >
                  <option value={qActivity}>กรุณาเลือก</option>
                  <option value="Running">Running</option>
                  <option value="Walking">Walking</option>
                  <option value="Squat">Squat</option>
                  <option value="Plank">Plank</option>
                  <option value="Jumpimg jack">Jumpimg jack</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full  md:w-2/4 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                Goal unit
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  defaultChecked={qGoal}
                  onChange={(e) => {
                    const slectGoal = e.target.value;
                    setQGoal(slectGoal);
                  }}
                >
                  <option value={qGoal}>กรุณาเลือก</option>
                  <option value="Km">Km.</option>
                  <option value="Kcal">Kcal</option>
                  <option value="Rep">Rep.</option>
                  <option value="Steps">Steps</option>
                  <option value="Hours">Hours</option>
                  <option value="Minutes">Minutes</option>
                  <option value="Seconds">Seconds</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full  md:w-2/4 px-3 mb-6 md:mb-0 mt-5">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                Goal value
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="number"
                placeholder="กรอกตัวเลขจำนวนเต็ม"
                required
                onChange={(e) => setQGValue(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-end gap-4">
            <button
              type="submit"
              className="bg-[#53a33d] hover:bg-[#41882E]  text-white font-bold py-1 px-5 border rounded"
            >
              save
            </button>
            <button
              className="bg-[#d64e3c] hover:bg-[#c9301c] text-white font-bold py-1 px-4 border rounded"
              type="reset"
            >
              clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Addnew;
