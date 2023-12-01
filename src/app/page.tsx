import { getAllProperties, getAllRules } from "@/actions/actions";
import Properties from "@/components/Properties";

export default async function Home() {
  const properties = await getAllProperties();
  const rules = await getAllRules();

  return <Properties serverProperties={properties} rules={rules} />;
}
