import React from "react";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import styles from "../styles/SocialIcons.module.css";
import Box from "./Box";

function SocialIcons() {
  const iconStyles = { cursor: "pointer" };
  return (
    <IconContext.Provider value={{ size: 27, style: iconStyles }}>
      <Box>
        <div className={styles.left__side__icon}>
          <AiOutlineHeart />
          <FaRegComment />
          <AiOutlineShareAlt />
        </div>
        <BsBookmark />
      </Box>
    </IconContext.Provider>
  );
}

export default SocialIcons;
