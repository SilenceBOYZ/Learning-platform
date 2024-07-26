import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaSkype,
} from "react-icons/fa";
import IconLink from "../IconLink";
import { createPortal } from "react-dom";

function Footer() {
  return (
    <>
      {createPortal(
        <footer className="z-50 w-full bg-neutral-800 text-white flex px-28 py-4 justify-between absolute bottom-0">
          <div className="text-sm">
            <span>&copy; Copy right by Nguyễn Thanh Trí</span>
          </div>
          <div className="flex items-center justify-center gap-5">
            <IconLink url="https://www.instagram.com/thanhtri230799/">
              <FaInstagram size={25} />
            </IconLink>
            <IconLink url="https://www.facebook.com/profile.php?id=100006555301110">
              <FaFacebookSquare size={25} />
            </IconLink>
            <IconLink url="https://www.linkedin.com/in/tr%C3%AD-nguy%E1%BB%85n-thanh-926267300/">
              <FaLinkedin size={25} />
            </IconLink>
            <IconLink url="https://join.skype.com/invite/yp2xmoH56kR9">
              <FaSkype size={25} />
            </IconLink>
          </div>
        </footer>,
        document.body
      )}
    </>
  );
}

export default Footer;
