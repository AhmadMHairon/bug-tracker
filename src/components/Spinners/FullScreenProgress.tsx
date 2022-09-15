import { Box, CircularProgress } from "@mui/material";

function FullScreenProgress() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <CircularProgress size={80} />
    </Box>
  );
}

export default FullScreenProgress;
