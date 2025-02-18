import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
  faArrowsAlt,
} from "@fortawesome/free-solid-svg-icons";

const datas = [
  {
    id: 1,
    name: "Nguyen van A",
    follow: 10892,
    like: 2093029,
    view: 10000000,
  },
  { id: 2, name: "Nguyen van B", follow: 10892, like: 1093029, view: 20000000 },
  { id: 3, name: "Nguyen van C", follow: 20892, like: 2093029, view: 30000000 },
  { id: 4, name: "Nguyen van D", follow: 30892, like: 3093029, view: 40000000 },
  { id: 5, name: "Nguyen van E", follow: 40892, like: 4093029, view: 50000000 },
  { id: 6, name: "Nguyen van F", follow: 50892, like: 5093029, view: 60000000 },
  { id: 7, name: "Nguyen van F", follow: 51892, like: 6093029, view: 70000000 },
  { id: 8, name: "Nguyen van F", follow: 52892, like: 7093029, view: 80000000 },
  { id: 9, name: "Nguyen van F", follow: 83892, like: 8093029, view: 90000000 },
  { id: 10, name: "Tran van F", follow: 54892, like: 8193029, view: 11000000 },
  { id: 11, name: "Tran van F", follow: 55892, like: 8293029, view: 12000000 },
  { id: 12, name: "Tran van F", follow: 60892, like: 8393029, view: 13000000 },
  { id: 13, name: "Tran van F", follow: 70892, like: 8493029, view: 14000000 },
  { id: 14, name: "Tran van F", follow: 80892, like: 8593029, view: 15000000 },
  { id: 15, name: "Tran van F", follow: 60892, like: 9093029, view: 16000000 },
];

const TableLayout = () => {
  const [sortedData, setSortedData] = useState([...datas]);
  const [sortOrder, setSortOrder] = useState("desc");
  const [sortBy, setSortBy] = useState("");

  const handleSort = (title) => {
    const sorted = [...sortedData];
    sorted.sort((a, b) => {
      if (title === "view") {
        return sortOrder === "desc" ? a.view - b.view : b.view - a.view;
      } else if (title === "like") {
        return sortOrder === "desc" ? a.like - b.like : b.like - a.like;
      } else if (title === "follow") {
        return sortOrder === "desc" ? a.follow - b.follow : b.follow - a.follow;
      }
      return 0;
    });

    setSortedData(sorted);
    setSortBy(title);
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
  };

  return (
    <TableContainer
      className="max-h-[531px] mb-4 "
      sx={{
        overflowX: "hidden",
        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#ccc",
          borderRadius: "3px",
        },
      }}
      component={Paper}
    >
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow className="bg-hr text-lg font-medium">
            <TableCell>User</TableCell>
            <TableCell align="right" className="font-medium">
              <button
                onClick={() => handleSort("view")}
                className="px-2"
                aria-label="Sort by view"
              >
                <FontAwesomeIcon
                  icon={
                    sortBy === "view"
                      ? sortOrder === "desc"
                        ? faArrowAltCircleDown
                        : faArrowAltCircleUp
                      : faArrowsAlt
                  }
                />
              </button>
              View
            </TableCell>
            <TableCell sx={{ padding: 0, paddingRight: 2 }} align="right">
              <button
                onClick={() => handleSort("like")}
                className="px-2"
                aria-label="Sort by view"
              >
                <FontAwesomeIcon
                  icon={
                    sortBy === "like"
                      ? sortOrder === "desc"
                        ? faArrowAltCircleDown
                        : faArrowAltCircleUp
                      : faArrowsAlt
                  }
                />
              </button>
              Like
            </TableCell>
            <TableCell sx={{ padding: 0, paddingRight: 2 }} align="right">
              <button
                onClick={() => handleSort("follow")}
                className=""
                aria-label="Sort by like"
              >
                <FontAwesomeIcon
                  icon={
                    sortBy === "follow"
                      ? sortOrder === "desc"
                        ? faArrowAltCircleDown
                        : faArrowAltCircleUp
                      : faArrowsAlt
                  }
                />
              </button>
              <span>Follow</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((data) => (
            <TableRow
              key={data.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                className="whitespace-nowrap"
                component="th"
                scope="data"
              >
                {data.name}
              </TableCell>
              <TableCell align="right">{data.view}</TableCell>
              <TableCell align="right">{data.like}</TableCell>
              <TableCell align="right">{data.follow}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableLayout;
