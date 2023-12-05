import Container from "../Container";
import banner from "../../assets/image/Dashboard Company.png";
import Button from "../Button";

const Advertise = () => {
  return (
    <Container className="my-20 relative bg-indigo-700 overflow-hidden text-white">
      <div className="absolute -top-96 -left-20 rotate-[70deg] w-[300px] h-[500px] bg-white"></div>
      <div className="h-full flex flex-col xl:flex-row items-center justify-between gap-10 p-10 xl:p-16">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl xl:text-5xl font-semibold font-clashDisplay">
            Start posting jobs today
          </h3>
          <p className="my-6">Start posting jobs for only $10.</p>
          <Button className="bg-white hover:bg-gray-200 text-indigo-700">
            Sign Up For Free
          </Button>
        </div>
        <img className="z-10" src={banner} alt="" />
      </div>
      <div className="absolute -bottom-96 -right-20 rotate-[70deg] w-[300px] h-[500px] bg-white"></div>
    </Container>
  );
};

export default Advertise;
