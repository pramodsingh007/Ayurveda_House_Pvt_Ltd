"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Rating from "./Rating";
import ThumbRating from "./ThumbRating";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ReviewModal: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [safetyRating, setSafetyRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const [thumbUp, setThumbUp] = useState(true);
  const [thumbDown, setThumbDown] = useState(false);
  const [formData, setFormData] = useState({});
  const safetyRatingHandler = (value: number) => {
    setSafetyRating(value);
    setFormData((prev) => ({ ...prev, safetyRating: value }));
  };
  const communicationRatingHandler = (value: number) => {
    setCommunicationRating(value);
    setFormData((prev) => ({ ...prev, communicationRating: value }));
  };

  const thumbDownHandler = (value: boolean) => {
    setThumbDown(value);
    setFormData((prev) => ({ ...prev, thumbDown: value }));
  };
  const thumbUpHandler = (value: boolean) => {
    setThumbUp(value);
    setFormData((prev) => ({ ...prev, thumbUp: value }));
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const submitHandler = () => {
    console.log(formData);
    setOpen(false);
    alert("submitted");
  };

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className=" flex justify-center items-center h-screen">
      <Button onClick={handleOpen}>Open Review Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className=" space-y-4 relative rounded-md border-0">
          <CloseIcon
            className=" absolute top-3 left-3 cursor-pointer"
            color="action"
            onClick={handleClose}
          />

          <Typography
            mb={2}
            id="modal-modal-title"
            variant="h6"
            component="h2"
            fontWeight={600}
          >
            Leave a Review
          </Typography>
          <Box>
            <Typography component={"h4"} color={"grey"} fontWeight={600}>
              Safety
            </Typography>
            <Typography component={"h6"} color={"slategray"}>
              Lorem ipsum dolor sit amet consectetur.
            </Typography>

            <Rating rating={safetyRating} setRating={safetyRatingHandler} />
          </Box>
          <Box>
            <Typography component={"h4"} color={"grey"} fontWeight={600}>
              Communication
            </Typography>
            <Typography component={"h6"} color={"slategray"}>
              Lorem ipsum dolor sit amet consectetur.
            </Typography>
            <Rating
              rating={communicationRating}
              setRating={communicationRatingHandler}
            />
          </Box>
          <Box>
            <Typography component={"h4"} color={"grey"} fontWeight={600}>
              Would you recommend Trausti?
            </Typography>
            <Typography component={"h6"} color={"slategray"}>
              Lorem ipsum dolor sit amet consectetur.
            </Typography>
            <ThumbRating
              thumbUp={thumbUp}
              thumbDown={thumbDown}
              setThumbDown={thumbDownHandler}
              setThumbUp={thumbUpHandler}
            />
          </Box>
          <Box>
            <Typography component={"h4"} color={"grey"} fontWeight={600}>
              Praise
            </Typography>
            <Typography component={"h6"} color={"slategray"}>
              Lorem ipsum dolor sit amet consectetur.
            </Typography>

            <Box className=" space-x-2 mt-3">
              <Button
                onClick={() => {
                  setFormData((prev) => ({ ...prev, praise: "Adventure" }));
                }}
                className=" rounded-full focus:text-green-500 focus:bg-green-100 font-bold text-slate-400 bg-slate-100"
              >
                Adventure
              </Button>
              <Button
                onClick={() => {
                  setFormData((prev) => ({ ...prev, praise: "Clean" }));
                }}
                className=" rounded-full focus:text-green-500 focus:bg-green-100 font-bold text-slate-400 bg-slate-100"
              >
                Clean
              </Button>
              <Button
                onClick={() => {
                  setFormData((prev) => ({ ...prev, praise: "Good Listener" }));
                }}
                className=" rounded-full focus:text-green-500 focus:bg-green-100 font-bold text-slate-400 bg-slate-100"
              >
                Good Listener
              </Button>
            </Box>
          </Box>

          <Box mt={2}>
            <Button
              variant="contained"
              color="info"
              onClick={submitHandler}
              sx={{ mr: 2 }}
            >
              Submit
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ReviewModal;
