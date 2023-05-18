import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { setSnackbar } from "../../store/slices/SnackBarSlice";
import { Typography } from "@mui/material";

const CustomizedSnackBars = () => {
  const dispatch = useDispatch();
  const { snackbarOpen, snackbarType, snackbarMessage } = useSelector(
    (state) => state.snackbar
  );
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(
      setSnackbar({
        snackbarOpen: false,
        snackbarType,
        snackbarMessage,
      })
    );
  };

  return (
    <div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={1500}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          color={snackbarType}
        >
          <Typography sx={{ varaint: "h6", color: "white" }}>
            {snackbarMessage}
          </Typography>
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomizedSnackBars;
