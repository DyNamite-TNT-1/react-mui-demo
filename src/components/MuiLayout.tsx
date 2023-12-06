import { Box, Stack, Divider, Grid, Paper } from "@mui/material";
export const MuiLayout = () => {
  return (
    <Paper sx={{ padding: "32px" }} elevation={4}>
      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          MuiLayout
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        ></Box>
      </Stack>
      <Grid container my={4} spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} direction="row">
          <Grid container spacing={2}>
            <Grid item xs={4} sm={6}>
              <Box bgcolor="primary.light" p={2}>
                Item 2
              </Box>
            </Grid>
            <Grid item xs={8} sm={6}>
              <Box bgcolor="primary.light" p={2}>
                Item 5
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

/** Short-hand
 * bgcolor = backgroundColor
 * p = padding
 * 2 = 16px
 * my = margin vertical (y-axis)
 */

/** Grid
 * The Grid component under the hood uses the flexbox module.
 * The Grid consists of 12 columns.
 * Each item in the grid can take up one or more columns as its width.
 * There are five breakpoints each corresponding to a certain device width:
 * xs for mobile device size, sm for tablet, md for desktop, lg and xl for larger monitors.
 * We can assign integer values to each breakpoint which indicates how many of the 12 availale
 * columns are occupied bt that item when the viewport satisfies that breakpoint constraints.
 */
