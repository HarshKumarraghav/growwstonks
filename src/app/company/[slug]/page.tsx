import DetailSection from "@/components/Company/DetailSection";
import MaxWidthWrapper from "@/components/Container/MaxWidthWrapper";
export default function page({ params }: { params: { slug: string } }) {
  return (
    <MaxWidthWrapper className="py-10 relative gap-4 flex">
      <DetailSection TikerValue={params.slug} />
    </MaxWidthWrapper>
  );
}
