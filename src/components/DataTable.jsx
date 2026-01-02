import { useState, useEffect } from "react";
import React from "react";

const StatusBadge = ({ status }) => {
  const styles = {
    Processed: "bg-yellow-100 text-yellow-700",
    Completed: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status] || "bg-gray-100 text-gray-700"
        }`}
    >
      {status}
    </span>
  );
};

export default function DataTable({ columns, data, childColumns }) {
  const [openRow, setOpenRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5; // Adjust number of rows per page

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, data.length);
  const paginatedData = data.slice(startIndex, endIndex);

  // Pages array for pagination buttons
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    setOpenRow(null);
  }, [currentPage]);

  const onPageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="w-full">
      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-light-bg text-primary-text">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-4 py-5 font-semibold h1-poppins text-base text-left"
                >
                  {col.label}
                </th>
              ))}
              <th></th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((row, index) => {
              const actualIndex = startIndex + index;
              return (
                <React.Fragment key={actualIndex}>
                  <tr className="border-b hover:bg-gray-50">
                    {columns.map((col) => (
                      <td
                        key={col.key}
                        className="px-4 py-3 text-md text-primary-text font-medium"
                      >
                        {col.key === "status" ? (
                          <StatusBadge status={row[col.label]} />
                        ) : (
                          row[col.label]
                        )} 
                      </td>
                    ))}

                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() =>
                          setOpenRow(openRow === actualIndex ? null : actualIndex)
                        }
                        className="ml-auto flex h-9 w-9 items-center justify-center rounded-full
                         bg-[#1E2858] text-white hover:bg-[#101739]
                         transition-all duration-300 ease-out cursor-pointer"
                      >
                        <span
                          className={`inline-flex transform transition-transform duration-200 ease-out ${openRow === actualIndex ? "rotate-90" : "rotate-0"
                            }`}
                        >
                          <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                            <path
                              d="M1 13L7 7L1 1"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>
                    </td>
                  </tr>

                  {/* Expanded Row */}
                  {openRow === actualIndex && (
                    <tr className="bg-gray-50">
                      <td colSpan={columns.length + 1} className="p-4">
                        <div className="bg-white rounded-lg shadow-sm">
                          <table className="w-full text-sm">
                            <thead className="bg-gray-100">
                              <tr>
                                {childColumns.map((col) => (
                                  <th
                                    key={col.key}
                                    className="px-4 py-4 text-left text-primary-text font-medium text-md"
                                  >
                                    {col.label}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {row.dataArray.map((file, idx) => (
                                <tr key={idx}>
                                  {childColumns.map((col) => (
                                    <td key={col.key} className="px-4 py-3">
                                      {col.key === "status" ? (
                                        <StatusBadge status={file[col.key]} />
                                      ) : (
                                        file[col.label]
                                      )}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="md:hidden space-y-4">
        {paginatedData.map((row, index) => {
          const actualIndex = startIndex + index;
          return (
            <div key={actualIndex} className="bg-white rounded-xl shadow p-4">
              {columns.map((col) => (
                <div key={col.key} className="flex justify-between py-1">
                  <span className="text-xs text-gray-500">{col.label}</span>
                  <span className="text-sm font-medium">
                    {col.key === "status" ? (
                      <StatusBadge status={row[col.key]} />
                    ) : (
                      row[col.key]
                    )}
                  </span>
                </div>
              ))}

              <button
                onClick={() =>
                  setOpenRow(openRow === actualIndex ? null : actualIndex)
                }
                className="mt-3 w-full text-sm font-medium text-primary-text"
              >
                {openRow === actualIndex ? "Hide Details" : "View Details"}
              </button>

              {openRow === actualIndex && (
                <div className="mt-3 border-t pt-3 space-y-3">
                  {row.dataArray.map((file, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-3">
                      {childColumns.map((col) => (
                        <div
                          key={col.key}
                          className="flex justify-between text-xs py-1"
                        >
                          <span className="text-gray-500">{col.label}</span>
                          <span>
                            {col.key === "status" ? (
                              <StatusBadge status={file[col.label]} />
                            ) : (
                              file[col.label]
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ================= PAGINATION CONTROLS ================= */}
      <div className="flex items-center justify-between px-4 py-2 bg-parimary-bg text-white rounded-md mt-6">
        <div className="text-sm">
          Showing {startIndex + 1} to {endIndex} of {data.length} entries
        </div>

        <div className="flex space-x-2 items-center">
          {/* Previous arrow */}
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-8 h-8 rounded-full border border-white flex items-center justify-center disabled:opacity-40 hover:bg-white hover:text-[#000] transition"
          >
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              style={{ transform: "scaleX(-1)" }}
            >
              <path
                d="M1 13L7 7L1 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>


          </button>

          {/* Page numbers */}
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-8 h-8 rounded-full flex items-center justify-center border border-white transition
              ${page === currentPage
                  ? "bg-white text-[#1E2858]"
                  : "text-white hover:bg-white hover:text-[#1E2858]"
                }`}
            >

              {page}
            </button>
          ))}

          {/* Next arrow */}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-8 h-8 rounded-full border border-white flex items-center justify-center disabled:opacity-40 hover:bg-white hover:text-primary-bg transition"
          >  <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path
                d="M1 13L7 7L1 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

          </button>
        </div>
      </div>
    </div>
  );
}
