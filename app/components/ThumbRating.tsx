import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Button from "@mui/material/Button";
import React, { useState } from "react";

interface StarRatingProps {
  thumbUp: boolean;
  setThumbUp: (rating: boolean) => void;
  thumbDown: boolean;
  setThumbDown: (rating: boolean) => void;
}
const ThumbRating: React.FC<StarRatingProps> = ({
  thumbUp,
  thumbDown,
  setThumbDown,
  setThumbUp,
}) => {
  return (
    <>
      <Button
        onClick={() => {
          setThumbUp(true);
          setThumbDown(false);
        }}
      >
        <ThumbUpIcon
          fontSize="large"
          color={thumbUp ? "success" : "disabled"}
        />
      </Button>
      <Button
        onClick={() => {
          setThumbDown(true);
          setThumbUp(false);
        }}
      >
        <ThumbDownIcon
          fontSize="large"
          color={thumbDown ? "success" : "disabled"}
        />
      </Button>
    </>
  );
};

export default ThumbRating;
