import Button from "./Button";
import Container from "./Container";
import Logo from "./Logo";
import icon1 from "../assets/icon/Name=facebook.svg";
import icon2 from "../assets/icon/Name=Instagram.svg";
import icon3 from "../assets/icon/Name=Web.svg";
import icon4 from "../assets/icon/Name=linkedin.svg";
import icon5 from "../assets/icon/Name=twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-[#202430] font-Epilogue">
      <Container>
        <div className="h-full flex flex-col lg:flex-row justify-between gap-10 lg:gap-32 py-20 border-b-2 border-gray-500">
          <div className="flex-1 space-y-6 text-white">
            <Logo />
            <p className="text-white/70">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>
          <div className="text-white/70 space-y-6">
            <h3 className="text-white font-semibold">About</h3>
            <h3 className="hover:underline underline-offset-4">Companies</h3>
            <h3 className="hover:underline underline-offset-4">Pricing</h3>
            <h3 className="hover:underline underline-offset-4">Terms</h3>
            <h3 className="hover:underline underline-offset-4">Advice</h3>
            <h3 className="hover:underline underline-offset-4">
              Privacy Policy
            </h3>
          </div>
          <div className="text-white/70 space-y-6">
            <h3 className="text-white font-semibold">Resources</h3>
            <h3 className="hover:underline underline-offset-4">Help Docs</h3>
            <h3 className="hover:underline underline-offset-4">Guide</h3>
            <h3 className="hover:underline underline-offset-4">Updates</h3>
            <h3 className="hover:underline underline-offset-4">Contact Us</h3>
          </div>
          <div className="flex-1 text-white/70 space-y-6">
            <h3 className="text-white font-semibold">Get job notifications</h3>
            <p>The latest job news, articles, sent to your inbox weekly.</p>
            <form className="w-full">
              <input
                className="px-3 py-[7px] mr-3 rounded text-black"
                type="email"
                name=""
                id=""
                placeholder="Email Address"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-5 items-center justify-between py-5 sm:py-10">
          <div>
            <small className="text-white/60">
              2021 @ JobHuntly. All rights reserved.
            </small>
          </div>
          <div className="flex items-center gap-5">
            <img className="bg-white p-1 rounded-full" src={icon1} alt="" />
            <img className="bg-white p-1 rounded-full" src={icon2} alt="" />
            <img className="bg-white p-1 rounded-full" src={icon3} alt="" />
            <img className="bg-white p-1 rounded-full" src={icon4} alt="" />
            <img className="bg-white p-1 rounded-full" src={icon5} alt="" />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
