import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export const Muitable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Ruperto",
    last_name: "Bittany",
    email: "rbittany0@vinaora.com",
    gender: "Male",
    ip_address: "15.193.144.11",
  },
  {
    id: 2,
    first_name: "Pearce",
    last_name: "Lamey",
    email: "plamey1@stumbleupon.com",
    gender: "Male",
    ip_address: "74.111.25.78",
  },
  {
    id: 3,
    first_name: "Clarance",
    last_name: "Beacham",
    email: "cbeacham2@stanford.edu",
    gender: "Male",
    ip_address: "15.107.174.254",
  },
  {
    id: 4,
    first_name: "Juditha",
    last_name: "Pearcy",
    email: "jpearcy3@yellowbook.com",
    gender: "Female",
    ip_address: "7.102.245.82",
  },
  {
    id: 5,
    first_name: "Libbi",
    last_name: "Weaver",
    email: "lweaver4@tmall.com",
    gender: "Female",
    ip_address: "128.192.79.114",
  },
  {
    id: 6,
    first_name: "Michal",
    last_name: "Cabbell",
    email: "mcabbell5@ovh.net",
    gender: "Male",
    ip_address: "151.53.192.119",
  },
  {
    id: 7,
    first_name: "Harrison",
    last_name: "Harford",
    email: "hharford6@ezinearticles.com",
    gender: "Genderqueer",
    ip_address: "164.111.223.229",
  },
  {
    id: 8,
    first_name: "Taber",
    last_name: "Allinson",
    email: "tallinson7@who.int",
    gender: "Male",
    ip_address: "10.48.18.97",
  },
  {
    id: 9,
    first_name: "Celestyna",
    last_name: "Jorden",
    email: "cjorden8@samsung.com",
    gender: "Female",
    ip_address: "173.34.60.100",
  },
  {
    id: 10,
    first_name: "Georgianne",
    last_name: "Ryson",
    email: "gryson9@deliciousdays.com",
    gender: "Female",
    ip_address: "54.96.162.105",
  },
];
