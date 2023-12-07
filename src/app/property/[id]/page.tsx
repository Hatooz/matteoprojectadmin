"use client";
import {
  getAllRules,
  getAppartmentByProperty,
  updateAppartmentRule,
} from "@/actions/actions";
import { AppartmentDTO, QueueRuleDTO } from "@/models/models";
import {
  BuildingOfficeIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { startTransition, useEffect, useOptimistic, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const [appartments, setAppartments] = useState<AppartmentDTO[]>([]);
  const [rules, setRules] = useState<QueueRuleDTO[]>();
  const [showInfo, setShowInfo] = useState(false);
  const [hoveredAppartmentId, setHoveredAppartmentId] = useState<string>();
  const [optimisticAppartments, updateOptimisticAppartment] = useOptimistic(
    appartments,
    (state, appartment: AppartmentDTO) => {
      return state.map((ap) => (ap.id === appartment.id ? appartment : ap));
    }
  );
  useEffect(() => {
    const fetchData = async () => {
      setAppartments(await getAppartmentByProperty(params.id));
      setRules(await getAllRules());
    };
    fetchData();
  }, [params.id]);

  useEffect(() => {
    startTransition(() => {
      appartments?.forEach((ap) => updateOptimisticAppartment(ap));
    });
  }, [appartments, updateOptimisticAppartment]);

  const updateRule = async (
    appartment: AppartmentDTO,
    ruleId: string,
    propId: string
  ) => {
    startTransition(() => {
      appartment.queueRule = rules?.find((r) => r.id == ruleId) as QueueRuleDTO;
      updateOptimisticAppartment(appartment);
    });
    setAppartments(await updateAppartmentRule(appartment.id, ruleId, propId));
  };

  const showInfoPopever = (appartmentId: string) => {
    setHoveredAppartmentId(appartmentId);
    setShowInfo(!showInfo);
  };
  const hideInfoPopever = () => {
    setShowInfo(false);
  };
  return (
    <table className="w-full text-left">
      <thead className="bg-riksbyggenDarkGray text-white h-12">
        <tr>
          <th className="w-1/6">Objektnummer</th>
          <th className="w-1/6">LM Nummer</th>
          <th className="w-1/6">Köregel</th>
          <th className="w-1/6">Annons</th>
          <th className="w-1/6">Adress</th>
          <th className="w-1/6"></th>
        </tr>
      </thead>
      <tbody>
        {optimisticAppartments &&
          optimisticAppartments?.map((ap) => {
            return (
              <tr key={ap.id} className="even:bg-[#ddd] text-sm">
                <td>{ap.objectNumber}</td>
                <td>{ap.lmNumber}</td>
                <td>
                  <select
                    name="rule"
                    id="rule"
                    value={ap.queueRule.id}
                    // className="rounded-lg text-black"
                    onChange={(e) =>
                      updateRule(ap, e.target.value, ap.propertyId)
                    }
                  >
                    {rules?.map((rule: any) => {
                      return (
                        <option key={rule.id} value={rule.id}>
                          {rule.name}
                        </option>
                      );
                    })}
                  </select>
                </td>
                <td>{ap.advert ? "Annonserad" : "Ej annonserad"}</td>
                <td>
                  {ap.address.street} {ap.address.number}{" "}
                  {ap.address.numberAffix ?? ""}, {ap.address.postalCode}{" "}
                  {ap.address.city}, {ap.address.county}
                </td>
                <td className="text-right flex justify-end">
                  {" "}
                  {showInfo && hoveredAppartmentId === ap.id && (
                    <div
                      onClick={hideInfoPopever}
                      className="text-white bg-black text-left p-2 w-[200px] z-50 rounded-lg"
                      style={{
                        position: "absolute",
                      }}
                    >
                      Lägenhet är annonserad
                    </div>
                  )}
                  {ap.advert !== null && (
                    <InformationCircleIcon
                      onClick={() => showInfoPopever(ap.id)}
                      className="w-6 hover:text-green-900"
                    />
                  )}
                  <Link
                    href={{ pathname: `${ap.propertyId}/appartment/${ap.id}` }}
                    className=" "
                  >
                    <BuildingOfficeIcon className="w-6 hover:text-green-900" />
                  </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
