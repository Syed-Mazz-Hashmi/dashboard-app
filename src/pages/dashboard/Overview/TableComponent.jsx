import React from "react";
import { TiTick } from "react-icons/ti";
import { Table, ScrollArea, Paper } from "@mantine/core";

const data = [
  { name: "John Doe", email: <TiTick className="text-[#00C113] text-center"/>, time: "7:15am" },
  { name: "Jane Smith", email: <TiTick className="text-[#00C113] text-center"/>, time: "9:05am" },
  { name: "Alice Johnson", email: <TiTick className="text-[#00C113] text-center"/>, time: "2:13am" },
  { name: "Alice Johnson", email: <TiTick className="text-[#00C113] text-center"/>, time: "2:13am" },
];

const TableComponent = () => {
  const rows = data.map((item, index) => (
    <tr key={index} className="">
      <td className="py-2 text-white px-4">{item.name}</td>
      <td className="py-2  text-white px-4">{item?.email}</td>
      <td className="py-2 text-[#7C7C7C] text-end px-4">{item.time}</td>
    </tr> 
  ));

  return (
    <paper shadow="md" radius="md" p="md" className="max-w-4xl mx-auto mt-10">
      <ScrollArea>
        <Table highlightOnHover withBorder withColumnBorders>
          <thead className=" ">
            <tr className="text-center text-[#7C7C7C] border-b-2 border-[#292929]">
              <th className="py-2 w-[10rem] px-4 text-left">Display</th>
              <th className="py-2 w-[10rem] px-4 text-left">logged in</th>
              <th className="py-2 w-[10rem] px-4 text-end">Time Stamp</th>
            </tr> 
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </paper>
  );
};

export default TableComponent;
