import MaxWidthWrapper from "@/components/Container/MaxWidthWrapper";
import TabContainer from "@/components/Home/TabContainer";

export default function Home() {
  return (
    <MaxWidthWrapper className="py-10">
      <TabContainer />
    </MaxWidthWrapper>
  );
}
