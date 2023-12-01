import { AppartmentDTO, QueueRuleDTO } from "@/models/models";
import { BeakerIcon } from "@heroicons/react/20/solid";

export default function Appartments({
  appartments,
  rules,
}: {
  appartments: AppartmentDTO[];
  rules: QueueRuleDTO[];
}) {
  return (
    <>
      {appartments.map((ap) => {
        return (
          <div key={ap.id} className="grid grid-cols-12">
            <div>{ap.objectNumber}</div>
            <div>{ap.lmNumber}</div>
            <div>
              <select
                name="rule"
                id="rule"
                value={ap.queueRule.id}
                className="rounded-lg text-black "
              >
                {rules.map((rule: any) => {
                  return (
                    <option key={rule.id} value={rule.id}>
                      {rule.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="col-span-7">
              <div key={ap.address.id} className=" ">
                <div className="truncate">
                  {ap.address.street} {ap.address.number}{" "}
                  {ap.address.numberAffix ?? ""}, {ap.address.postalCode}{" "}
                  {ap.address.city}, {ap.address.county}
                </div>
              </div>
            </div>
            <div className="text-right col-span-2 flex justify-end">
              {/* <BeakerIcon className="w-5" /> */}
              <button onClick={() => console.log("clicked")} className="flex">
                <BeakerIcon className="w-5" />
                Visa lägenhet
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
