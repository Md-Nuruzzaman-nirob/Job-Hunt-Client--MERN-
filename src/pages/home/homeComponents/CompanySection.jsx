import Container from "../../../components/Container";
import company1 from "../../../assets/company/amd-logo-1.svg";
import company2 from "../../../assets/company/intel-3.svg";
import company3 from "../../../assets/company/talkit 1.svg";
import company4 from "../../../assets/company/tesla-9 1.svg";
import company5 from "../../../assets/company/vodafone-2017-logo.svg";

const CompanySection = () => {
  return (
    <Container className="py-24">
      <h3 className="text-lg opacity-80 mb-10">Companies we helped grow</h3>
      <div className="flex flex-wrap gap-8 items-center justify-between">
        <img src={company1} alt="" />
        <img src={company2} alt="" />
        <img src={company3} alt="" />
        <img src={company4} alt="" />
        <img src={company5} alt="" />
      </div>
    </Container>
  );
};

export default CompanySection;
