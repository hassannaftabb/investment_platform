import wifiIcon from "../../../assets/images/icons/rss_feed.svg";
import lightbulb from "../../../assets/images/icons/lightbulb.svg";
import more from "../../../assets/images/icons/more.svg";
import account from "../../../assets/images/icons/account_box.svg";

interface tabsDataArrayProps {
  title: string;
  title_icon: "*.svg";
  subTitle: {
    subTitle_Title?: string;
    subTitle_item: string[];
  }[];
}

export const tabsDataArray: tabsDataArrayProps[] = [
  {
    title: "Posts",
    title_icon: wifiIcon,
    subTitle: [
      // {
      //   subTitle_Title: "KITCHEN & DINING",
      //   subTitle_item: [
      //     "Kitchen",
      //     "Modular Kitchen",
      //     "Dining Room",
      //     "Home Bar",
      //   ],
      // },
      // {
      //   subTitle_Title: "LIVING",
      //   subTitle_item: [
      //     "Living Room",
      //     "Home Theater",
      //     "Home Office",
      //     "Staircase",
      //   ],
      // },
      // {
      //   subTitle_Title: "BED & BATH",
      //   subTitle_item: ["Bedroom", "Nursery", "Kid's Room", "Bathroom"],
      // },
      // {
      //   subTitle_Title: "OUTDOOR",
      //   subTitle_item: ["Garden", "Patio", "Terrace & Balcony", "Courtyard"],
      // },
      // {
      //   subTitle_Title: "MORE ROOMS",
      //   subTitle_item: [
      //     "Puja Room",
      //     "Wardrobe",
      //     "Exterior",
      //     "Swimming Pool",
      //     "View All",
      //   ],
      // },
    ],
  },
  {
    title: "Find Proffessional",
    title_icon: account,
    subTitle: [
      // {
      //   subTitle_Title: "DESIGN & RENOVATION",
      //   subTitle_item: [
      //     "Interior Designers",
      //     "Architects",
      //     "Landscape Architects",
      //     "Home Builders",
      //     "Moduler Furniture",
      //     "Genral Contractor",
      //     "Construction Companies",
      //     "Other",
      //   ],
      // },
    ],
  },
  {
    title: "Design Ideas",
    title_icon: lightbulb,
    subTitle: [
      // {
      //   subTitle_Title: "",
      //   subTitle_item: [
      //     "Modular Kitchen Designs",
      //     "False Ceiling Designs",
      //     "Guest Bedroom Designs",
      //     "Wardrobe Designs",
      //     "Kids Bedroom Designs",
      //     "Window Designs",
      //     "Bathroom Designs",
      //   ],
      // },
      // {
      //   subTitle_Title: "",
      //   subTitle_item: [
      //     "Flooring Designs",
      //     "Master Bedroom Designs",
      //     " Dining Room Designs",
      //     "Wall Decor Designs",
      //     "Living Room Designs",
      //     "Boleony Designs",
      //     " Tie Designs",
      //   ],
      // },
      // {
      //   subTitle_Title: "",
      //   subTitle_item: [
      //     "Foyer Designs",
      //     "Wall Paint Designs",
      //     "Pooja Room Designs",
      //     "Homes By Amor Designer",
      //     "Tv Unit Designs",
      //     "Home Office Designs",
      //     "Home Wallpaper Designs",
      //   ],
      // },
    ],
  },
  {
    title: "MORE",
    title_icon: more,
    subTitle: [
      // {
      //   subTitle_Title: "DESIGN & RENOVATION",
      //   subTitle_item: [
      //     "Home Construction",
      //     "Cost Coleulator",
      //     "FAQ's",
      //     " Our Designs Process",
      //   ],
      // },
      // {
      //   subTitle_Title: "DESIGN SERVICE",
      //   subTitle_item: [
      //     "Residential Interior",
      //     "Commercial Interior",
      //     "Hospitality interior",
      //   ],
      // },
    ],
  },
];
