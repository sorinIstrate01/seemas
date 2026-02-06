import Sphere from "@/views/sphere";
import { TSphereParams } from "@/types/sphere";
type SearchParams = Promise<TSphereParams>;

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;

  return <Sphere params={params} />;
}
