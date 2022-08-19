import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsClipboardPlus, BsGear } from "react-icons/bs";
const Events = () => {
  const [event, setDataEvent] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.NEXT_PUBLIC_APP_NAME}/event`,
    }).then(function (response) {
      setDataEvent(response.data.result);
    });
  }, []);

  return (
    <div className=" mb-5">
      <div className=" grid grid-cols-5 gap-4 justify-items-center items-center">
        <div className="font-bold">Event's title</div>
        <div className=" font-bold">Created</div>
        <div className=" font-bold">Status</div>
        <div className=" font-bold">Author</div>
        <div>
          <Link href="/events/addnew">
            <button className="bg-gradient-to-l from-[#E7AA3E] text-sm    to-[#DA4179] text-white  py-2 px-4 border  rounded">
              <div className=" flex flex-wrap">
                <div className="pt-1 pr-1">
                  <BsClipboardPlus />
                </div>
                <div>Add new</div>
              </div>
            </button>
          </Link>
        </div>
      </div>
      <hr className="mt-2"></hr>

      {event.map((r, k) => {
        return (
          <div key={k}>
            <div className=" grid grid-cols-5 gap-4 justify-items-center items-center mt-2 py-5 bg-[#9ca09c74] pl-5 rounded-xl">
              <div>{r.title}</div>
              <div>{r.periodStart}</div>
              <div>
                <button className="bg-gradient-to-l from-[#25e63c66] text-sm    to-[#21ee3274] text-white  py-1 px-4   rounded-full">
                  published
                </button>
              </div>
              <div>MetaverseXR</div>
              <div className=" flex flex-wrap items-center">
                <button className="bg-gradient-to-l from-[#0b0b09] text-sm    to-[#3a3235] text-white  py-1 px-4  rounded-full">
                  Admin
                </button>
                <div className="ml-2">
                  <Link href={`/events/addnew/${r.eId}`}>
                    <button>
                      <BsGear />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Events;
