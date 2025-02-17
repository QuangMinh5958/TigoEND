import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const datas = [
  {
    name: "Nguyen van A",
    follow: 10892,
    like: 2093029,
    view: 829391823,
  },
  {
    name: "Nguyen van B",
    follow: 10892,
    like: 2093029,
    view: 829391823,
  },
  {
    name: "Nguyen van C",
    follow: 10892,
    like: 2093029,
    view: 829391823,
  },
  {
    name: "Nguyen van D",
    follow: 10892,
    like: 2093029,
    view: 829391823,
  },
  {
    name: "Nguyen van E",
    follow: 10892,
    like: 2093029,
    view: 829391823,
  },
  {
    name: "Nguyen van F",
    follow: 10892,
    like: 2093029,
    view: 829391823,
  },
  {
    name: "Nguyen van F",
    follow: 10892,
    like: 2093029,
    view: 829391823,
  },
  {
    name: "Nguyen van F",
    follow: 10892,
    like: 2093029,
    view: 829391823,
  },
  {
    name: "Nguyen van F",
    follow: 10892,
    like: 2093029,
    view: 829391823,
  },
  {
    name: "Nguyen van F",
    follow: 10892,
    like: 2093029,
    view: 829391823,
  },
  {
    name: "Nguyen van F",
    follow: 10892,
    like: 2093029,
    view: 829391823,
  },
  {
    name: "Nguyen van F",
    follow: 10892,
    like: 2093029,
    view: 829391823,
  },
  {
    name: "Nguyen van F",
    follow: 10892,
    like: 2093029,
    view: 829391823,
  },
  {
    name: "Nguyen van F",
    follow: 10892,
    like: 2093029,
    view: 829391823,
  },
  {
    name: "Nguyen van F",
    follow: 10892,
    like: 2093029,
    view: 829391823,
  },
];

const TableLayout = () => {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow className="bg-hr text-lg font-medium">
            <TableCell>User</TableCell>
            <TableCell align="right" className="font-medium">
              View
            </TableCell>
            <TableCell align="right">Like</TableCell>
            <TableCell align="right">Follow</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((data) => (
            <TableRow
              key={data.name}
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
