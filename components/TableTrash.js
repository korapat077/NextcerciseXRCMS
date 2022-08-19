import React from "react";
const TableTrash = () => {
  const SearchUsers = () => {
    var input, filter, table, tr, td, cell, i, j;
    filter = document.getElementById("searchInput").value.toLowerCase();
    table = document.getElementById("userTable");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
      tr[i].style.display = "none";
      const tdArray = tr[i].getElementsByTagName("td");
      for (var j = 0; j < tdArray.length; j++) {
        const cellValue = tdArray[j];
        if (
          cellValue &&
          cellValue.innerHTML.toLowerCase().indexOf(filter) > -1
        ) {
          tr[i].style.display = "";
          break;
        }
      }
    }
  };
  return (
    <div>
      <div className="grid grid-cols-12">
        <input
          type="text"
          className="bg-gray-50 border mt-2 p-1 pl-2 w-64 border-gray-300 text-gray-900 text-sm rounded-full "
          placeholder="Search for names.."
          id="searchInput"
          onChange={SearchUsers}
        />
      </div>
      <hr className="mt-2"></hr>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table
                id="userTable"
                className="min-w-full divide-y divide-gray-200"
              >
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Removed
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      By
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    ></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      Jone Doe
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      jonne62@gmail.com
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      jonne62@gmail.com
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        className="text-green-500 hover:text-green-700"
                        href="#"
                      >
                        Edit
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a className="text-red-500 hover:text-red-700" href="#">
                        Delete
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      t Doe
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      k@gmail.com
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      q@gmail.com
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        className="text-green-500 hover:text-green-700"
                        href="#"
                      >
                        Edit
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a className="text-red-500 hover:text-red-700" href="#">
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TableTrash;
