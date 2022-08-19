import TableTrash from "../../components/TableTrash";

const Trash = () => {
    return (
        <div>
            <div className=" flex flex-wrap items-center  justify-between">
                <div className="font-bold">
                    Trash
                </div>
                <div>
                    <button className="bg-gradient-to-l from-[#E7AA3E]    to-[#DA4179] text-white font-bold py-2 px-4 border  rounded">
                        Empty trash
                    </button>
                </div>
            </div>
            <hr className="mt-2"></hr>


            <TableTrash />
        </div>
    )
}
export default Trash;