"use client";
import { updatePropertyRule } from "@/actions/actions";
import { PropertyDTO, QueueRuleDTO } from "@/models/models";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { startTransition, useOptimistic, useState } from "react";

export default function Properties({
  serverProperties,
  rules,
}: {
  serverProperties: any;
  rules: any;
}) {
  const router = useRouter();
  const [properties, setProperties] = useState<PropertyDTO[]>(serverProperties);

  const [hoveredPropId, setHoveredPropId] = useState<string>();
  const updateRule = (prop: PropertyDTO, ruleId: string) => {
    startTransition(() => {
      prop.queueRule = rules.find((r: QueueRuleDTO) => r.id == ruleId);
      updateOptimisticProperty(prop);
    });
    updatePropertyRule(prop.id, ruleId).then((properties) => {
      setProperties(properties);
      startTransition(() => {
        router.refresh();
      });
    });
  };

  const [showInfo, setShowInfo] = useState(false);

  const showInfoPopever = (propId: string) => {
    setHoveredPropId(propId);
    setShowInfo(!showInfo);
    // let rect = e.currentTarget.getBoundingClientRect();
    // let x = e.clientX - rect.left;
    // let y = e.clientY - rect.top - 50;
    // const top = Math.round(y);
    // const left = Math.round(x);
    // setCoordinate({ left, top });
  };
  const hideInfoPopever = () => {
    setShowInfo(false);
  };

  const [optimisticProperties, updateOptimisticProperty] = useOptimistic(
    properties,
    (state, property: PropertyDTO) => {
      return state.map((p) => (p.id === property.id ? property : p));
    }
  );

  return (
    <>
      <table className="w-full text-left border-riksbdar">
        <thead className="bg-riksbyggenDarkGray  text-white h-12">
          <tr>
            <th className="w-1/6">Objektnummer</th>
            <th className="w-1/6">LM Nummer</th>
            <th className="w-1/6">Köregel</th>
            <th className="w-1/6">Annons</th>
            <th className="w-1/6">Adress</th>
            <th className="w-1/6 text-right px-12"></th>
          </tr>
        </thead>
        <tbody>
          {optimisticProperties.map((property: PropertyDTO) => {
            return (
              <tr
                key={property.id}
                className="even:bg-[#ddd] text-sm overflow-visible"
              >
                <td>{property.objectNumber}</td>
                <td>{property.lmNumber}</td>
                <td>
                  <select
                    name="rule"
                    id="rule"
                    value={property.queueRule?.id}
                    // className="rounded-lg text-black"
                    onChange={(e) => updateRule(property, e.target.value)}
                  >
                    {rules.map((rule: any) => {
                      return (
                        <option key={rule.id} value={rule.id}>
                          {rule.name}
                        </option>
                      );
                    })}
                  </select>
                </td>
                <td>Annonserad</td>
                <td>
                  {property.addresses?.map((adr: any) => {
                    return (
                      <span key={adr.id} className="truncate">
                        {adr.street} {adr.number} {adr.numberAffix ?? ""},{" "}
                        {adr.postalCode} {adr.city}, {adr.county}
                      </span>
                    );
                  })}
                </td>
                <td className="text-right flex justify-end relative overflow-visible">
                  {showInfo && hoveredPropId === property.id && (
                    <div
                      onClick={hideInfoPopever}
                      className="text-white bg-black text-left p-2 w-[200px] z-50 rounded-lg"
                      style={{
                        position: "absolute",
                      }}
                    >
                      Har utannonserad lägenhet
                    </div>
                  )}
                  {property.appartments?.some((ap) => ap.advertId !== null) && (
                    <InformationCircleIcon
                      className="w-6 hover:text-green-900"
                      onClick={() => showInfoPopever(property.id)}
                    />
                  )}

                  <Link href={`/property/${property.id}`} className="">
                    <BuildingOffice2Icon className="w-6 hover:text-green-900" />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
