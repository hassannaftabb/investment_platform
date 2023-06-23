import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import { tabsDataArray } from "./HeaderTabsData";
import { useNavigate } from "react-router-dom";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role='tabpanel'
      className='w-full'
      style={{ position: "absolute", top: "50px", background: "#F8F8F8" }}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Box
            display='flex'
            width={{ lg: "50%", md: "68%", sm: "90%", xs: "98%" }}
            marginLeft={{ md: "unset", xs: "14%" }}
            m='auto'
            flexWrap='wrap'
            rowGap={3}
            columnGap={{ md: "unset", xs: 1.5 }}
            position='relative'
            left='31%'
            sx={{ transform: "translate(-50%,0%)" }}
          >
            {children}
          </Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface TabTitleProp {
  img: any;
  title: string;
}
const TabTitle = ({ img, title }: TabTitleProp) => {
  return (
    <div className='flex items-center gap-2'>
      <img src={img} style={{ display: "inline-flex", width: "18px" }} alt='' />
      {title}
    </div>
  );
};

const HeaderTabs = () => {
  const [value, setValue] = React.useState<number>();
  const navigate = useNavigate();
  const link = (index: number) => {
    if (index === 1) {
      return "/findprofessional";
    } else if (index === 2) {
      return "/designideas";
    } else {
      return "/";
    }
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const SxTab = styled(Tab)({
    fontFamily: "Mulish",
    color: "#000",
    fontWeight: "700",
    fontSize: "0.8rem",
  });
  const SxTabs = styled(Tabs)({
    "& .Mui-selected": {
      ">div": { color: "#000000" },
      borderRight: "1px solid rgba(0, 0, 0, 0.1)",
      borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "#ED0641",
      top: "0",
      height: "3px",
    },
  });

  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          background: "#F8F8F8",
          zIndex: 29,
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <SxTabs
            value={value}
            onChange={handleChange}
            centered
            aria-label='basic tabs example'
          >
            {tabsDataArray.map((item, index) => (
              <SxTab
                key={index}
                label={<TabTitle title={item.title} img={item.title_icon} />}
                {...a11yProps(3)}
                onClick={() => {
                  navigate(link(index));
                }}
              />
            ))}
          </SxTabs>
        </Box>
        {/* {(value || value === 0) && (
          <>
            {tabsDataArray.map((_, index) => (
              <TabPanel value={value} index={index}>
                {tabsDataArray[index].subTitle.map((item, idx) => (
                  <div key={idx} className='flex flex-col basis-1/3 sm:basis-[30%]'>
                    {item.subTitle_Title !== "" && (
                      <h4 className='text-primary font-mulish font-semibold text-sm mb-4'>
                        {item.subTitle_Title}
                      </h4>
                    )}
                    <div className='flex flex-col'>
                      {item.subTitle_item.map((itm, ix) => (
                        <a
                          key={ix}
                          className='font-mulish font-semibold text-sm mb-3 sm:text-xs'
                          href='/'
                        >
                          {itm}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </TabPanel>
            ))}
          </>
        )} */}
      </Box>
      {/* {(value || value === 0) && (
        <Box
          position='fixed'
          top='0'
          left='0'
          right='0'
          bottom='0'
          bgcolor='#797979'
          zIndex='20'
          sx={{ opacity: "0.8" }}
          onClick={() => {
            setValue(undefined);
          }}
        />
      )} */}
    </>
  );
};

export default HeaderTabs;
