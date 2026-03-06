import Image from "next/image";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaDev } from "react-icons/fa";

function SideMenu() {
  return (
    <section>
      <div>
        {/* 上 */}
        <div>
          <Image
            src="/assets/logo.png"
            alt="Origin.Doc Image"
            width={100}
            height={100}
          />
          <p>ORIGIN.Doc</p>
        </div>
        {/* 中 */}
        {/* 下 */}
        <div>
          <div>
            <a href="">
              <AiFillGithub />
            </a>
            <a href="">
              <AiFillLinkedin />
            </a>
            <a href="">
              <FaDev />
            </a>
          </div>
          <p>© 2026 Origin.Doc</p>
        </div>
      </div>
    </section>
  );
}

export default SideMenu;
