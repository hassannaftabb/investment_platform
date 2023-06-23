import { BiCalendar } from "react-icons/bi"
import { GoLocation } from "react-icons/go"
import { MdGavel } from "react-icons/md"
import { FiChevronRight } from "react-icons/fi"
import projects from "../../../assets/images/projects.png"
import facebook from "../../../assets/images/facebook.png"
import thumbs from "../../../assets/images/thumbs.png"
import instagram from "../../../assets/images/icons/instagram.png"


export const profileConstArr = [
    {
        user1:
        {
            profile_details: {
                id: 1,
                add_profile_img: "",
                Name: "Shashwata Chowdhury",
                Tag: "Pro",
                Designation: "Structural Engineers",
                Work_icon: MdGavel,
                work: "Contractor",
                Location_icon: GoLocation,
                Location: "delhi",
                Calender_icon: BiCalendar,
                Experience: "15 Years",
                Reviews: "Get Reviews",
                Review_icon: FiChevronRight,
                Service: "Services Provided",
                Area: "Area Served",
            },
            Projects: [

                {
                    projects_img: projects,
                    project_name: "Gautam"
                }

            ],
            Business:
                [
                    { "Business name": "Business Name" },
                    { "Phone Number": "+880134567544" },
                    { "Website": "amardesigner.com" },
                    { "Address": "Delhi, India" },
                    {"Followers": "0" }
                ],

            social_media: [
                {
                    text: {

                    },
                    social_links: [
                        {
                            icon: facebook
                            ,
                            link: "#"
                        },
                        {
                            icon: instagram,
                            link: "#"
                        }
                    ]
                }
            ],
            reviews: {
                thumb_icons: thumbs,
                text: "You don't have any reviews yet!"
            }




        }
    }
]

export const tagArr=[
    "About Us",
    "Projects",
    "Business",
    "Social Media"
]