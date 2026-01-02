import { useState } from "react";

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

export default function ExpandableTable({
  columns,
  data,
  childColumns,
}) {
  const [openRow, setOpenRow] = useState(null);

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
            {data.map((row, index) => (
              <>
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50"
                >
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className="px-4 py-3 text-md text-primary-text font-medium"
                    >
                      {col.key === "status" ? (
                        <StatusBadge status={row[col.key]} />
                      ) : (
                        row[col.key]
                      )}
                    </td>
                  ))}

                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() =>
                        setOpenRow(openRow === index ? null : index)
                      }
                      className="ml-auto flex h-9 w-9 items-center justify-center rounded-full
             bg-[#1E2858] text-white hover:bg-[#101739]
             transition-all duration-300 ease-out cursor-pointer"
                    >
                      <span
                        className={`inline-flex transform transition-transform duration-200 ease-out  ${openRow === index ? "rotate-90" : "rotate-0"
                          }`}
                      >
                        <svg
                          width="8"
                          height="14"
                          viewBox="0 0 8 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 13L7 7L1 1"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {/*  {openRow === index ? "▲" : "▼"} */}
                    </button>
                  </td>
                </tr>

                {openRow === index && (
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
                            {row.files.map((file, idx) => (
                              <tr key={idx} className="">
                                {childColumns.map((col) => (
                                  <td
                                    key={col.key}
                                    className="px-4 py-3"
                                  >
                                    {col.key === "status" ? (
                                      <StatusBadge
                                        status={file[col.key]}
                                      />
                                    ) : (
                                      file[col.key]
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
              </>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="md:hidden space-y-4">
        {data.map((row, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-4"
          >
            {columns.map((col) => (
              <div
                key={col.key}
                className="flex justify-between py-1"
              >
                <span className="text-xs text-gray-500">
                  {col.label}
                </span>
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
                setOpenRow(openRow === index ? null : index)
              }
              className="mt-3 w-full text-sm font-medium text-primary-text "
            >
              {openRow === index
                ? "Hide Details"
                : "View Details"}
            </button>

            {openRow === index && (
              <div className="mt-3 border-t pt-3 space-y-3">
                {row.files.map((file, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-lg p-3"
                  >
                    {childColumns.map((col) => (
                      <div
                        key={col.key}
                        className="flex justify-between text-xs py-1"
                      >
                        <span className="text-gray-500">
                          {col.label}
                        </span>
                        <span>
                          {col.key === "status" ? (
                            <StatusBadge
                              status={file[col.key]}
                            />
                          ) : (
                            file[col.key]
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
