import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/Images/smart lights_logo.svg"

const Footer = () => {
  return (
    <section className="footer h-[70vh] bg-center bg-cover bg-no-repeat px-[10%] lg:px-[14%] py-[6%] flex flex-col justify-between">
      <div className="flex flex-col lg:flex-row gap-6 lg:justify-between lg:items-center">
        <div>
          <Image
            src={logo}
            width={200}
            height={200}
            alt="smart light logo"
          />
        </div>
        <div>
          <ul className="text-white text-lg flex flex-col lg:flex-row gap-5 lg:gap-12 items-baseline">
            <li>
              <Link href="#products">Products</Link>
            </li>
            <li>
              <Link href="#ecosystem">Software Services</Link>
            </li>
            <li>Follow Us</li>
          </ul>
        </div>
      </div>

      <div>
        <hr className="max-w-[100%] md:max-w-[70%] mb-5 bg-white" />
        <p className=" text-white flex flex-col md:flex-row gap-5">
          <Link href="#">Privacy Policy</Link>
          <span className="hidden md:block">|</span>
          <Link href="#">Terms & Conditions</Link>
          <span className="hidden md:block">|</span>
          <Link href="#">Cookie Policy</Link>
        </p>
      </div>
    </section>
  );
};

export default Footer;
