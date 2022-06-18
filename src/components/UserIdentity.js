import Avatar from "./Avatar";
import userImg from "../assests/images/70336555_603062176765125_1923183396192780288_n.jpg";
import styles from "../styles/UserIdentity.module.css";

function UserIdentity() {
  return (
    <div className={styles.user__info}>
      <Avatar size={45} userImg={userImg} />
      <div>
        <p className={styles.user__name}>Saiful Islam Shanto</p>
        <p className={styles.user__occupation}>Full Stack Engineer</p>
      </div>
    </div>
  );
}

export default UserIdentity;
