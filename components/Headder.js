import Image from 'next/image'
import { BsPersonCircle, BsPersonLinesFill, IconName } from "react-icons/bs";
const HeadderSupper = () => {
    return (
        <div>
            <div className=" w-full bg-black h-10 grid justify-items-end items-center text-white ">
                <div className="pr-2">
                    <BsPersonCircle className='w-9 h-9'  />
                </div>
            </div>
        </div>
    )
}
export default HeadderSupper;