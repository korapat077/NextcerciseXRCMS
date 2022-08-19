import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import {useRouter , NextRouter } from "next/router"
import { IoArrowUndoSharp } from "react-icons/io5";
import CreateEvent from "../../../components/CreateEvent";
import EventCheckpoint from "../../../components/EventCheckpoint";
import CreateEventEid from "../../../components/CreateEventEid";
import EventPaths from "../../../components/EventPaths";
const Addnew = () => {

  const router  = useRouter()
  const { eIdEdit } = router.query
  
  return (
    <div>
      <div className="flex  flex-wrap justify-between items-center">
        <div className="text-2xl font-bold">Create Event</div>
        <div>
          <Link href="/events/">
            <a>
              <IoArrowUndoSharp className="text-2xl" />
            </a>
          </Link>
        </div>
      </div>
      <hr className=" mt-5 "></hr>
      <div>
        <CreateEventEid eIdEdit={eIdEdit} />
      </div>
      <div>
        <EventCheckpoint eIdEdit={eIdEdit} />
      </div>
      <div>
        <EventPaths eIdEdit={eIdEdit} />
      </div>
    </div>
  );
};
export default Addnew;
