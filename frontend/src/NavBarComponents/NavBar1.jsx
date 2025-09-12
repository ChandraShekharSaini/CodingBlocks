import React from "react";
import styles from "../styles/NavBarTwo.module.css"

const NavBar1 = () => {
  return (
   <nav className="bg-[#ff7a01] w-full text-white h-[40px] flex items-center">
  <div className={styles.marquee}>
    <p className="font-mulish">
      📢 We are now at NSP! Walk in or call <span className="bg-white text-[#ff7a01] h-full">8445680548</span> to get FREE guidance from top mentors today.
    </p>
  </div>
</nav>

  );
};

export default NavBar1;
