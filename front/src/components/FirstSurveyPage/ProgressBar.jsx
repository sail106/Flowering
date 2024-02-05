import * as React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

export default function Progress(props) {
  return (
    <Stack sx={{ width: "100%", color: "#f28482" }} spacing={2}>
      <LinearProgress variant="determinate" value={props.value} color="inherit" />
    </Stack>
  );
}
