import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        "& .MuiCircularProgress-root": {
          marginTop: "2vw",
          width: "20vw !important",
          height: "20vw !important",
        },
      }}
    >
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "20vw",
          height: "23vw",
        }}
      >
        <Typography variant="caption" component="div" color="text.primary" fontSize={20}>
          {`${Math.round(props.value)}c`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
};

export default function Progress(props) {
  return <CircularProgressWithLabel value={props.value} />;
}
