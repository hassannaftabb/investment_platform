import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const AboutCard = ({ AboutCardArr1 }: any) => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid container justifyContent="center" gap={{ xs: 1, sm: 3, md: 3 }}>
          {AboutCardArr1.map((data_img: any, idx: any) => {
            return (
              <Grid
                item
                xs={6}
                sm={2.5}
                md={3}
                style={{
                  maxWidth: "20vw",
                  borderRadius: "24px",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="clint_img"
              >
                <img
                  src={data_img}
                  style={{ objectFit: "contain" }}
                  alt=""
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default AboutCard;
