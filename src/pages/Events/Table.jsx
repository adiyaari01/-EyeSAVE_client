import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect } from "react";

function createData(date, event, startTime, finishTime, child1, child2) {
  return {
    date,
    event,
    startTime,
    finishTime,
    child1,
    child2,
  };
}

const headCells = [
  {
    id: "event",
    numeric: false,
    disablePadding: true,
    label: "Event",
  },
  {
    id: "date",
    numeric: false,
    disablePadding: true,
    label: "Date",
  },
  {
    id: "startTime",
    numeric: false,
    disablePadding: false,
    label: "Start Time",
  },
  {
    id: "finishTime",
    numeric: false,
    disablePadding: false,
    label: "Finish Time",
  },
  {
    id: "child1",
    numeric: false,
    disablePadding: false,
    label: "Child 1",
  },
  {
    id: "child2",
    numeric: false,
    disablePadding: false,
    label: "Child 2",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy } = props;
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <TableHead>
      <TableRow>
        {headCells
          .filter(
            (headCell) =>
              matches ||
              (headCell.id !== "startTime" && headCell.id !== "finishTime")
          )
          .map((headCell) => (
            <TableCell
              key={headCell.id}
              align={"center"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
              sx={{ color: "#A2A4A7", fontSize: "14px" }}
            >
              {headCell.label}
            </TableCell>
          ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        ></Typography>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable({ events, children }) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("event");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = React.useState([]);
  const matches = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    let isMount = true;
    if (isMount) {
      const data = events.map((event) => {
        const child1 = children.filter((c) => c._id === event._child1);
        const child2 = children.filter((c) => c._id === event._child2);
        if (child1) {
          var childName1 = child1[0]?._firstName + " " + child1[0]?._lastName;
        }
        if (child2) {
          var childName2 = child2[0]?._firstName + " " + child2[0]?._lastName;
        }
        const test = createData(
          event._date,
          event._eventType,
          event._startTime,
          event._endTime,
          childName1,
          childName2
        );

        return test;
      });

      setRows(data);
    }

    return () => {
      isMount = false;
    };
  }, [events]);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  if (!rows.length) return <div>No Data</div>;
  return (
    <div>
      <TableContainer sx={{ mt: 5 }}>
        <Table
          sx={{ minWidth: 350, backgroundColor: "#3F414D" }}
          aria-labelledby="tableTitle"
          size={dense ? "small" : "medium"}
        >
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {rows.map((row, index) => {
              const isItemSelected = isSelected(row.event);

              return (
                <TableRow
                  hover
                  onClick={(event) => handleClick(event, row.event)}
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={index}
                  selected={isItemSelected}
                >
                  <TableCell
                    sx={{
                      fontSize: matches ? "14px" : "10px",
                      color:
                        row.event === "Positive"
                          ? "#68B294"
                          : row.event === "Negative"
                          ? "#AD4675"
                          : row.event === "Stranger"
                          ? "#FDCA51"
                          : row.event === "Child Left Alone"
                          ? "#BDABDA"
                          : "#FF5555"

                    }}
                    align="center"
                  >
                    {matches ? row.event : row.event.charAt(0)}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: matches ? "14px" : "10px",
                      color: "#A2A4A7",
                    }}
                    align="center"
                  >
                    {matches ? row.date : row.date.slice(5, 10)}
                  </TableCell>
                  {matches && (
                    <TableCell
                      sx={{
                        fontSize: matches ? "14px" : "10px",
                        color: "#A2A4A7",
                      }}
                      align="center"
                    >
                      {row.startTime}
                    </TableCell>
                  )}
                  {matches && (
                    <TableCell
                      sx={{
                        fontSize: matches ? "14px" : "10px",
                        color: "#A2A4A7",
                      }}
                      align="center"
                    >
                      {row.finishTime}
                    </TableCell>
                  )}
                  <TableCell
                    sx={{
                      fontSize: matches ? "14px" : "10px",
                      color: "#A2A4A7",
                    }}
                    align="center"
                  >
                    {row.child1 === "undefined undefined" ? "" : row.child1}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: matches ? "14px" : "10px",
                      color: "#A2A4A7",
                    }}
                    align="center"
                  >
                    {row.child2 === "undefined undefined" ? "" : row.child2}
                  </TableCell>
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: (dense ? 33 : 53) * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
