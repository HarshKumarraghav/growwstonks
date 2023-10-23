import MaxWidthWrapper from "@/components/Container/MaxWidthWrapper";
import CompanyInfo from "@/components/Home/CompanyInfo";
import TabContainer from "@/components/Home/TabContainer";

export default function Home() {
  return (
    <MaxWidthWrapper className="py-10 relative gap-4 flex flex-col-reverse md:flex-row">
      <TabContainer />
      <CompanyInfo />
    </MaxWidthWrapper>
  );
}
