import { AppartmentDTO } from "@/models/models";

export default function Appartment({
  appartment,
}: {
  appartment: AppartmentDTO;
}) {
  return (
    <>
      <div>{appartment.address?.street}</div>
    </>
  );
}
