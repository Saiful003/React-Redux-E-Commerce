import React from "react";
import { GiHanger, GiKnifeFork } from "react-icons/gi";
import { IoMdFilm } from "react-icons/io";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { ImPower } from "react-icons/im";
import { FaBinoculars, FaTree, FaBone, FaBabyCarriage } from "react-icons/fa";
import Category from "./Category";
import styles from "../styles/BottomHeader.module.css";

const categories = [
  { title: "Clothing & Shoes", icon: <GiHanger size={20} />, id: 2 },
  { title: "Entertainment", icon: <IoMdFilm size={20} />, id: 3 },
  { title: "Music", icon: <BsMusicNoteBeamed size={20} />, id: 4 },
  { title: "Sport & Lifestyle", icon: <CgGym size={20} />, id: 5 },
  { title: "Pets", icon: <FaBone size={20} />, id: 6 },
  { title: "Kitchen Accessories", icon: <GiKnifeFork size={20} />, id: 7 },
  { title: "Travel Equipment", icon: <FaBinoculars size={20} />, id: 8 },
  { title: "Growing & Garden", icon: <FaTree size={20} />, id: 9 },
  { title: "Electrical Tools", icon: <ImPower size={20} />, id: 10 },
  { title: "Mother Care", icon: <FaBabyCarriage size={20} />, id: 11 },
];

function BottomHeader() {
  return (
    <div className={styles.all__category}>
      {categories.map(({ title, icon, id }) => (
        <Category icon={icon} text={title} key={id} />
      ))}
    </div>
  );
}

export default BottomHeader;
