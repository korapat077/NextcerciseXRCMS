import Link from "next/link";
import { useEffect, useState } from "react";
import { BsCalendarPlus, BsClipboardPlus, BsTrash } from "react-icons/bs";
import HeadderSupper from "./Headder";
const Navbar = () => {
  const [checkURL, setCheckURL] = useState();
  useEffect(() => {
    setCheckURL(document.URL.indexOf("events/addnew") >= 0);
  });
  const NavbarChecK = () => {
    if (checkURL) {
      return (
        <div className="flex">
          <aside
            className="w-64 overflow-y-auto py-4 px-3  bg-gradient-to-t from-[#E7AA3E]  sticky top-0 h-screen to-[#DA4179]  "
            aria-label="Sidebar"
          >
            <ul className="space-y-2">
              <Link href="/events/">
                <a>
                  <li className="flex items-center p-2 text-md font-normal text-[#ffff] rounded-lg  hover:bg-[#ffa2a2cc]">
                    <span className="font-medium">Manage</span>
                  </li>
                </a>
              </Link>
              <Link href="/events/">
                <a>
                  <li className="flex items-center p-2 text-md text-[#ffff] rounded-lg  hover:bg-[#ffa2a2cc]">
                    <BsCalendarPlus />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Events
                    </span>
                  </li>
                </a>
              </Link>
              <Link href="/quests/">
                <a>
                  <li className="flex items-center p-2 text-md text-[#ffff] rounded-lg  hover:bg-[#ffa2a2cc]">
                    <BsClipboardPlus />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Quests
                    </span>
                  </li>
                </a>
              </Link>
              <Link href="/trash/">
                <a>
                  <li className="flex items-center p-2 text-md text-[#ffff] rounded-lg  hover:bg-[#ffa2a2cc]">
                    <BsTrash />
                    <span className="flex-1 ml-3 whitespace-nowrap">Trash</span>
                  </li>
                </a>
              </Link>
            </ul>
          </aside>
        </div>
      );
    } else {
      return (
        <div className="flex">
            <aside
              className="w-64 overflow-y-auto py-4 px-3  bg-gradient-to-t from-[#E7AA3E]  sticky top-0 h-screen to-[#DA4179] "
              aria-label="Sidebar"
            >
              <ul className="space-y-2">
                <Link href="/events/">
                  <a>
                    <li className="flex items-center p-2 text-md font-normal text-[#ffff] rounded-lg  hover:bg-[#ffa2a2cc]">
                      <span className="font-medium">Manage</span>
                    </li>
                  </a>
                </Link>
                <Link href="/events/">
                  <a>
                    <li className="flex items-center p-2 text-md text-[#ffff] rounded-lg  hover:bg-[#ffa2a2cc]">
                      <BsCalendarPlus />
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Events
                      </span>
                    </li>
                  </a>
                </Link>
                <Link href="/quests/">
                  <a>
                    <li className="flex items-center p-2 text-md text-[#ffff] rounded-lg  hover:bg-[#ffa2a2cc]">
                      <BsClipboardPlus />
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Quests
                      </span>
                    </li>
                  </a>
                </Link>
                <Link href="/trash/">
                  <a>
                    <li className="flex items-center p-2 text-md text-[#ffff] rounded-lg  hover:bg-[#ffa2a2cc]">
                      <BsTrash />
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Trash
                      </span>
                    </li>
                  </a>
                </Link>
              </ul>
            </aside>
            
          </div>
      );
    }
  };
  return <NavbarChecK />;
};

export default Navbar;
