// src/StarRating.tsx
import React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";

interface StarRatingProps {
  rating: number;
  setRating: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, setRating }) => {
  return (
    <Box>
      <Rating
        size="large"
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue || 0);
        }}
      />
    </Box>
  );
};

export default StarRating;
