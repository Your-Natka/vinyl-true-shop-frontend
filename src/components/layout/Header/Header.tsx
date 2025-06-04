import css from "@/components/layout/Header/Header.module.css";
import Image from "next/image";
import profile from "@/../public/icons/profile.svg";
import cart from "@/../public/icons/cart.svg";
import scales from "@/../public/icons/scales.svg";
import search from "@/../public/icons/search.svg";
import mobileMenu from "@/../public/icons/mobileMenu.svg";
import logo from "@/../public/icons/logo.svg";

const Header = () => {
  return (
    <div className={css.headerContainer}>
      <div className={css.leftButtons}>
        <button className="btn">
          <Image
            src={mobileMenu}
            alt="mobile menu icon"
            width={24}
            height={24}
          />
        </button>
        <button className="btn">
          <Image src={search} alt="search icon" width={24} height={24} />
        </button>
      </div>

      <div className={css.logoContainer}>
        <Image src={logo} alt="logo" />
      </div>

      <div className={css.searchContainer}>
        <input
          type="text"
          placeholder="Search artist, albums ..."
          className={css.searchInput}
        />
        <div className={css.searchIcon}>
          <Image src={search} alt="search icon" width={20} height={20} />
        </div>
      </div>

      <div className={css.rightButtons}>
        <button className={`btn ${css.scalesButton}`}>
          <Image src={scales} alt="scales icon" width={24} height={24} />
        </button>
        <button className="btn">
          <Image src={cart} alt="cart icon" width={24} height={24} />
        </button>
        <button className="btn">
          <Image src={profile} alt="profile icon" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default Header;
