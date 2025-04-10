import React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
const SkeletonCard = () => {
  return (
    <div>
      <div className="name_scot">
        <span>Employee</span>
        <Box sx={{ width: 200 }}>
          <Skeleton />
          <Skeleton animation="wave" />
        </Box>
      </div>
      <div className="name_scot">
        <span>Independent Contractor</span>
        <Box sx={{ width: 100 }}>
          <Skeleton />
          <Skeleton animation="wave" />
        </Box>
      </div>
      <div className="name_scot">
        <span>Contracted Employee</span>
        <Box sx={{ width: 150 }}>
          <Skeleton />
          <Skeleton animation="wave" />
        </Box>
      </div>
      <div className="name_scot">
        <span>Stakeholders</span>
        <Box sx={{ width: 230 }}>
          <Skeleton />
          <Skeleton animation="wave" />
        </Box>
      </div>
    </div>
  );
};

export default SkeletonCard;
