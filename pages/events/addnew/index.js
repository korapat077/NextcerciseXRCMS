import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoArrowUndoSharp } from "react-icons/io5";
import CreateEvent from "../../../components/CreateEvent";
import EventCheckpoint from "../../../components/EventCheckpoint";
const Addnew = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-between items-center">
        <div className="text-2xl font-bold">Create Event</div>
        <div>
          <Link href="/events/">
            <a>
              <IoArrowUndoSharp className="text-2xl" />
            </a>
          </Link>
        </div>
      </div>
      <hr className="mt-5 "></hr>
      <div>
        <CreateEvent />
      </div>
    </div>
  );
};
export default Addnew;
