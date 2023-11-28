import { Tooltip, IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const MuiTooltip = () => {
    return (
      <Stack>
        <Stack direction="row" spacing={1}>
          <Tooltip title="Delete" placement="top">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete" placement="right" arrow>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Tooltip title="Delete" placement="bottom" arrow enterDelay={500} leaveDelay={200}>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
    );
};
