import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import React from "react";
import Divider from "@mui/material/Divider";
import CommonLayout from "../../../layouts/Common/CommonLayout";

const Container1 = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "50vw",
    margin: "0px auto",
  },
}));

const Faq = () => {
  const [state, setState] = React.useState(0);
  const [color, setColor] = React.useState(0);

  const handleClick = (index: number) => {
    setState(index);
  };
  const handleClick1 = (idx: number) => {
    setColor(idx);
  };

  const tableOfContent = [
    "General",
    "Trust and safety",
    "Services",
    "Billing",
    "Office and Cleaning",
  ];

  const question = [
    {
      ques: "How do i pay for the essentials or premium plan?",
      ans: "You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.",
    },
    {
      ques: "We need to add new users to our team. How will that be billed?",
      ans: "You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.",
    },
    {
      ques: "Do you offer discounts for non fropit organizations or educational institutions?",
      ans: "You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.",
    },
    {
      ques: "Can i cancel my essentials or premium plan subscription at anytime?",
      ans: "You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.",
    },
    {
      ques: "Can i cancel my essentials or premium plan subscription at anytime?",
      ans: "You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.",
    },
  ];
  return (
    <CommonLayout>
      <Box padding={{ xs: "4rem 2rem", sm: "4rem 10rem" }}>
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Typography
            style={{ fontFamily: "Mulish" }}
            sx={{
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "40px",
              lineHeight: "64px",
            }}
            color='#130B01'
          >
            Frequently Asked Questions
          </Typography>
          <Box height={25} />

          <Box
            display='flex'
            flexDirection={{ xs: "column", md: "row" }}
            gap={8}
          >
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='flex-start'
              gap={3}
              border='1px solid #DEDEDE'
              borderRadius='12px'
              width={{ xs: "90vw", sm: "18vw" }}
              padding='1rem 2rem'
              height='fit-content'
            >
              <Typography
                style={{ fontFamily: "Poppins" }}
                sx={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "24px",
                  lineHeight: "36px",
                }}
              >
                Table Of Content
              </Typography>
              <Container1>
                {tableOfContent.map((item, index) => (
                  <Box
                    display='flex'
                    flexDirection='column'
                    gap={2}
                    key={index}
                  >
                    <Typography
                      onClick={() => {
                        handleClick(index);
                      }}
                      style={{ fontFamily: "Poppins" }}
                      sx={{
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "24px",
                        cursor: "pointer",
                        color: index === state ? "#ED0641" : "#130B01",
                      }}
                    >
                      {item}
                    </Typography>
                    <Divider />
                    <Box height={4} />
                  </Box>
                ))}
              </Container1>
            </Box>

            {state === 0 && (
              <Box width={{ xs: "90vw", sm: "45vw" }}>
                {question.map((item, idx) => (
                  <Accordion
                    expanded={idx === color ? true : false}
                    onClick={() => {
                      handleClick1(idx);
                    }}
                    style={{
                      borderRadius: "12px",
                      margin: ".8rem 0",
                      background: "inherit",
                    }}
                    key={idx}
                  >
                    <AccordionSummary
                      style={{
                        borderRadius: "12px 12px 0 0",
                        borderRight:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                        borderLeft:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                        borderTop:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                        padding: ".2rem 1rem .2rem 2rem",
                      }}
                      expandIcon={<IoIosArrowDown />}
                      aria-controls='panel1a-content'
                      id='panel1a-header'
                    >
                      <Typography
                        style={{ fontFamily: "Poppins" }}
                        sx={{
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "14px",
                          lineHeight: "24px",
                          color: idx === color ? "#ED0641" : "#130B01",
                        }}
                        onClick={() => {
                          handleClick1(idx);
                        }}
                      >
                        {item.ques}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      style={{
                        borderRadius: "0 0 12px 12px",
                        borderBottom:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                        borderRight:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                        borderLeft:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                      }}
                    >
                      <Typography
                        style={{ fontFamily: "Poppins" }}
                        sx={{
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "14px",
                          lineHeight: "24px",
                          padding: ".2rem 1rem .2rem 1rem",
                        }}
                        color='#130B01'
                      >
                        {item.ans}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            )}

            {state === 1 && (
              <Box width={{ xs: "90vw", sm: "45vw" }}>
                {question.slice(2, 4).map((item, idx) => (
                  <Accordion
                    expanded={idx === color ? true : false}
                    onClick={() => {
                      handleClick1(idx);
                    }}
                    style={{
                      borderRadius: "12px",
                      margin: ".8rem 0",
                      background: "inherit",
                    }}
                    key={idx}
                  >
                    <AccordionSummary
                      style={{
                        borderRadius: "12px 12px 0 0",
                        borderRight:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                        borderLeft:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                        borderTop:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                        padding: ".2rem 1rem .2rem 2rem",
                      }}
                      expandIcon={<IoIosArrowDown />}
                      aria-controls='panel1a-content'
                      id='panel1a-header'
                    >
                      <Typography
                        style={{ fontFamily: "Poppins" }}
                        sx={{
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "14px",
                          lineHeight: "24px",
                          color: idx === color ? "#ED0641" : "#130B01",
                        }}
                        onClick={() => {
                          handleClick1(idx);
                        }}
                      >
                        {item.ques}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      style={{
                        borderRadius: "0 0 12px 12px",
                        borderBottom:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                        borderRight:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                        borderLeft:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                      }}
                    >
                      <Typography
                        style={{ fontFamily: "Poppins" }}
                        sx={{
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "14px",
                          lineHeight: "24px",
                          padding: ".2rem 1rem .2rem 1rem",
                        }}
                        color='#130B01'
                      >
                        {item.ans}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            )}

            {state === 2 && (
              <Box width={{ xs: "90vw", sm: "45vw" }}>
                {question.slice(1, 3).map((item, idx) => (
                  <Accordion
                    expanded={idx === color ? true : false}
                    onClick={() => {
                      handleClick1(idx);
                    }}
                    style={{
                      borderRadius: "12px",
                      margin: ".8rem 0",
                      background: "inherit",
                    }}
                    key={idx}
                  >
                    <AccordionSummary
                      style={{
                        borderRadius: "12px 12px 0 0",
                        borderRight:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                        borderLeft:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                        borderTop:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                        padding: ".2rem 1rem .2rem 2rem",
                      }}
                      expandIcon={<IoIosArrowDown />}
                      aria-controls='panel1a-content'
                      id='panel1a-header'
                    >
                      <Typography
                        style={{ fontFamily: "Poppins" }}
                        sx={{
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "14px",
                          lineHeight: "24px",
                          color: idx === color ? "#ED0641" : "#130B01",
                        }}
                        onClick={() => {
                          handleClick1(idx);
                        }}
                      >
                        {item.ques}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      style={{
                        borderRadius: "0 0 12px 12px",
                        borderBottom:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                        borderRight:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                        borderLeft:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                      }}
                    >
                      <Typography
                        style={{ fontFamily: "Poppins" }}
                        sx={{
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "14px",
                          lineHeight: "24px",
                          padding: ".2rem 1rem .2rem 1rem",
                        }}
                        color='#130B01'
                      >
                        {item.ans}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            )}

            {state === 3 && (
              <Box width={{ xs: "90vw", sm: "45vw" }}>
                {question.slice(0, 4).map((item, idx) => (
                  <Accordion
                    expanded={idx === color ? true : false}
                    onClick={() => {
                      handleClick1(idx);
                    }}
                    style={{
                      borderRadius: "12px",
                      margin: ".8rem 0",
                      background: "inherit",
                    }}
                    key={idx}
                  >
                    <AccordionSummary
                      style={{
                        borderRadius: "12px 12px 0 0",
                        borderRight:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                        borderLeft:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                        borderTop:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                        padding: ".2rem 1rem .2rem 2rem",
                      }}
                      expandIcon={<IoIosArrowDown />}
                      aria-controls='panel1a-content'
                      id='panel1a-header'
                    >
                      <Typography
                        style={{ fontFamily: "Poppins" }}
                        sx={{
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "14px",
                          lineHeight: "24px",
                          color: idx === color ? "#ED0641" : "#130B01",
                        }}
                        onClick={() => {
                          handleClick1(idx);
                        }}
                      >
                        {item.ques}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      style={{
                        borderRadius: "0 0 12px 12px",
                        borderBottom:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                        borderRight:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                        borderLeft:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                      }}
                    >
                      <Typography
                        style={{ fontFamily: "Poppins" }}
                        sx={{
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "14px",
                          lineHeight: "24px",
                          padding: ".2rem 1rem .2rem 1rem",
                        }}
                        color='#130B01'
                      >
                        {item.ans}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            )}

            {state === 4 && (
              <Box width={{ xs: "90vw", sm: "45vw" }}>
                {question.slice(0, 2).map((item, idx) => (
                  <Accordion
                    expanded={idx === color ? true : false}
                    onClick={() => {
                      handleClick1(idx);
                    }}
                    style={{
                      borderRadius: "12px",
                      margin: ".8rem 0",
                      background: "inherit",
                    }}
                    key={idx}
                  >
                    <AccordionSummary
                      style={{
                        borderRadius: "12px 12px 0 0",
                        borderRight:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                        borderLeft:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                        borderTop:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                        padding: ".2rem 1rem .2rem 2rem",
                      }}
                      expandIcon={<IoIosArrowDown />}
                      aria-controls='panel1a-content'
                      id='panel1a-header'
                    >
                      <Typography
                        style={{ fontFamily: "Poppins" }}
                        sx={{
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "14px",
                          lineHeight: "24px",
                          color: idx === color ? "#ED0641" : "#130B01",
                        }}
                        onClick={() => {
                          handleClick1(idx);
                        }}
                      >
                        {item.ques}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      style={{
                        borderRadius: "0 0 12px 12px",
                        borderBottom:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                        borderRight:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                        borderLeft:
                          idx === color
                            ? "2px solid #ED0641"
                            : "2px solid #DEDEDE",
                      }}
                    >
                      <Typography
                        style={{ fontFamily: "Poppins" }}
                        sx={{
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "14px",
                          lineHeight: "24px",
                          padding: ".2rem 1rem .2rem 1rem",
                        }}
                        color='#130B01'
                      >
                        {item.ans}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </CommonLayout>
  );
};

export default Faq;
