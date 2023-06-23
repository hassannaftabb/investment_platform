import React from "react";
import StepsAndAuthLayout from "../../../layouts/StepsAndAuthLayout";
import Grid from "@mui/material/Grid";
import Img1 from "../../../assets/images/login_card_1.png";
import Img2 from "../../../assets/images/login_card_2.png";
import Img3 from "../../../assets/images/login_card_3.png";
import Button from "../../sub-components/shared/Button/Button";

const LoginCard = () => {
  const login_card_arr = [
    {
      login_card_img: Img1,
      login_card_text: "Homeowner",
      login_card_des: "I am a homeowner ir interested in home design",
    },
    {
      login_card_img: Img2,
      login_card_text: "Professional",
      login_card_des: "I offer home improement services or sell home products",
    },
    {
      login_card_img: Img3,
      login_card_text: "Material Provider",
      login_card_des: "I’m a  material provider",
    },
  ];
  const handleChange = () => {};
  return (
    <StepsAndAuthLayout>
      <div className='space-x-2 w-[60%]  flex flex-col  bg-secondary-bright rounded-2xl justify-center items-center p-8 '>
        <h3 className='font-semibold text-2xl text-center  text-secondary-dark '>
          Which describes you best?
        </h3>

        <Grid
          container
          gap={2}
          className='w-full justify-between mt-5'
          style={{ marginLeft: "0px" }}
        >
          {login_card_arr.map((login_card_data, idx) => {
            return (
              <Grid item xs={3.5} key={idx + "login_card_data"} className=''>
                <div className='group w-full shadow-md p-4 rounded-lg py-8 text-[#0000001f] hover:bg-primary hover:text-secondary-bright hover:'>
                  <div className='w-[50%] h-[63px] m-auto'>
                    <img
                      src={login_card_data.login_card_img}
                      className='w-full h-full object-contain group-hover:invert group-hover:brightness-0 group-hover:contrast-1'
                      alt="login card"
                    />
                  </div>
                  <p className=' text-center text-xs mt-4'>
                    {login_card_data.login_card_text}
                  </p>
                </div>

                <div className='mt-3'>
                  <p className='text-[11px] text-[#727272] text-center'>
                    {login_card_data.login_card_des}
                  </p>
                </div>
              </Grid>
            );
          })}
        </Grid>
        <div className='w-[50%] m-auto mt-5'>
          <Button title='Continue' onClick={handleChange}></Button>
        </div>
      </div>
    </StepsAndAuthLayout>
  );
};

export default LoginCard;
