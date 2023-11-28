import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import ShareIcon from "@mui/icons-material/Share";
import PrintIcon from "@mui/icons-material/Print";
import EditIcon from "@mui/icons-material/Edit";

export const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
    >
      <SpeedDialAction
        icon={<FileCopyOutlinedIcon />}
        tooltipTitle="Copy"
        tooltipOpen
      />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" tooltipOpen />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" tooltipOpen />
    </SpeedDial>
  );
};
