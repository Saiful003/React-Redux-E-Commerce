import React from "react";
import PostFooter from "./PostFooter";
import SocialIcons from "./SocialIcons";
import PostHeader from "./PostHeader";
import styles from "../styles/Post.module.css";
import Image from "./Image";
import TotalViewer from "./TotalViewer";
import Description from "./Description";

function Post() {
  return (
    <div className={styles.post__container}>
      <PostHeader />
      <Image img="//unsplash.it/600/350" />
      <PostFooter>
        <SocialIcons />
        <TotalViewer />
        <Description />
      </PostFooter>
    </div>
  );
}

export default Post;
