import { DataServices } from "@/helpers/data";
import ServiceCard from "@/components/serviceCard";
import RelatedServices from "@/components/relatedServices";

export default function Page() {
  const service = DataServices.find((s) => s.slug === "bubblelab");
  
  if (!service) return null;

  return (
    <div>
      <ServiceCard service={service} />
      <RelatedServices currentSlug={service.slug} services={DataServices} />
    </div>
  )
}
