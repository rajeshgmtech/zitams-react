import React from "react";
import { useState } from "react";
import CustomSelect from "../components/ui/customselect";
import DatePickerField from "../components/ui/DatePickerField";
import FlatPickerField from "../components/ui/flatpicker";
import ExpandableTable from "../components/DataTable";
const columns = [
  { key: "sno", label: "S.No" },
  { key: "date", label: "Date" },
  { key: "country", label: "Country" },
  { key: "site", label: "Site Name" },
  { key: "total", label: "Total" },
  { key: "processed", label: "Processed" },
  { key: "errors", label: "Business Errors" },
  { key: "duplicate", label: "Duplicate" },
  { key: "skipped", label: "Skipped" },
  { key: "status", label: "Status" },
];

const childColumns = [
  { key: "fileName", label: "Source File Name" },
  { key: "total", label: "Total" },
  { key: "processed", label: "Processed" },
  { key: "errors", label: "Business Error" },
  { key: "duplicate", label: "Duplicate" },
  { key: "skipped", label: "Skipped" },
  { key: "status", label: "Status" },
];

const data = [
  {
    sno: 1,
    date: "27-Nov-2025",
    country: "USA",
    site: "Norfolk",
    total: 11000,
    processed: 9800,
    errors: 1100,
    duplicate: 50,
    skipped: 50,
    status: "Processed",
    files: [
      {
        fileName: "DMPIHR_20251127001",
        total: 800,
        processed: 600,
        errors: 100,
        duplicate: 25,
        skipped: 25,
        status: "Processed",
      },
      {
        fileName: "DMPIHR_20251127002",
        total: 9200,
        processed: 9200,
        errors: 0,
        duplicate: 0,
        skipped: 0,
        status: "Completed",
      },
    ],
  },
  {
    sno: 2,
    date: "27-Nov-2025",
    country: "USA",
    site: "Norfolk",
    total: 11000,
    processed: 9800,
    errors: 1100,
    duplicate: 50,
    skipped: 50,
    status: "Processed",
    files: [
      {
        fileName: "DMPIHR_20251127001",
        total: 800,
        processed: 600,
        errors: 100,
        duplicate: 25,
        skipped: 25,
        status: "Processed",
      },
      {
        fileName: "DMPIHR_20251127002",
        total: 9200,
        processed: 9200,
        errors: 0,
        duplicate: 0,
        skipped: 0,
        status: "Completed",
      },
    ],
  },
];

const DataManager = () => {

  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  const categories = [
    { label: "Design", value: "design" },
    { label: "Development", value: "dev" }
  ];





  const [selectedDate, setSelectedDate] = useState("");


  return (
    <div className="items-center justify-center  font-sans bg-primary-bg min-h-screen">

      <div className="w-full  text-white lg:px-6 lg:py-4 px-2 py-2">
        <div className="flex flex-col xl:flex-row items-start lg:items-center justify-between gap-6">
          {/* Title */}
          <div>

            <h1 className="text-3xl font-semibold whitespace-nowrap h1-poppins">
             Data Manager


            </h1>
          </div>



          <div className="flex items-center flex-wrap lg:gap-6 gap-4 ">



            {/* Filter By label */}
            <span className="text-sm font-semibold whitespace-nowrap mt-6 flex-shrink-0 hidden md:inline  ">
              Filter By:
            </span>

            {/* From Date */}

            <div className="p-0 w-[47%] md:w-auto flex-shrink-0"  >
              <div className="max-w-xs">
                <FlatPickerField
                  label="From Date"
                  placeholder="Select from date..."
                  type="date" // This triggers the browser's date picker
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />


              </div>
            </div>
            <div className="p-0 w-[47%] md:w-auto flex-shrink-0 ">
              <div className="max-w-xs">
                <FlatPickerField
                  label="To Date"
                  placeholder="Select to date..."
                  type="date" // This triggers the browser's date picker
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />


              </div>
            </div>





            {/* To Date */}


            <div className="p-0 w-[47%] md:w-auto flex-shrink-0 ">
              <div className="max-w-xs">
                <CustomSelect
                  label="Project Category"
                  placeholder="Select category..."
                  options={categories}
                  value={category}
                  onChange={(val) => setCategory(val)}
                 /*  error={!category ? "Field is required" : ""} */
                />


              </div>
            </div>
            <div className="p-0 w-[47%] md:w-auto flex-shrink-0 ">
              <div className="max-w-xs">
                <CustomSelect
                  label="Project Category"
                  placeholder="Select category..."
                  options={categories}
                  value={category}
                  onChange={(val) => setCategory(val)}
                /*   error={!category ? "Field is required" : ""} */
                />


              </div>
            </div>









          </div>

        </div>
      </div >
      <div className=" rounded-2xl">
         <ExpandableTable
      columns={columns}
      childColumns={childColumns}
      data={data}
    />
      </div>

      

    </div>
  );
};

export default DataManager;
