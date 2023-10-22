import CompanyChart from "@/components/Company/CompanyChart";
import DetailSection from "@/components/Company/DetailSection";
import MaxWidthWrapper from "@/components/Container/MaxWidthWrapper";
export default function page({ params }: { params: { slug: string } }) {
  return (
    <MaxWidthWrapper className="py-10 relative gap-4 flex flex-col ">
      <CompanyChart Symbol={params.slug} />
      <DetailSection TikerValue={params.slug} />
    </MaxWidthWrapper>
  );
}
