import React, { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import Box from "./Box";
import UserIdentity from "./UserIdentity";
import Options from "./Options";
import styles from "../styles/PostHeader.module.css";

function PostHeader() {
  const [isShowOptions, setIsShowOptions] = useState(false);
  const iconStyle = { fontSize: 27, cursor: "pointer" };
  return (
    <div className={styles.post__header__wrapper}>
      <Box mx={0.9}>
        <UserIdentity />
        <FiMoreHorizontal
          style={iconStyle}
          onClick={() => setIsShowOptions(!isShowOptions)}
        />
        {isShowOptions && <Options />}
      </Box>
    </div>
  );
}

export default PostHeader;
