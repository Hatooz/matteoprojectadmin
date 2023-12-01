"use client";
import { getAppartmentById } from "@/actions/actions";
import { AppartmentDTO } from "@/models/models";
import { useEffect, useState } from "react";

export default function Appartment({ params }: { params: { apId: string } }) {
  const [appartment, setAppartment] = useState<AppartmentDTO>();

  useEffect(() => {
    getAppartmentById(params.apId).then((res) => {
      setAppartment(res);
    });
  }, [params.apId]);
  return (
    <div className="border  relative  ">
      <div className="absolute bg-riksbyggenDarkGray h-12 top-0 right-0 left-0 grid items-center px-2 text-white font-semibold">
        Lägenhet - {appartment?.objectNumber}
      </div>
      <div className="grid grid-cols-2 mt-20">
        <div className="appartment-details">
          <div>Objektnummer</div>
          <div>{appartment?.objectNumber}</div>
          <div>LM-nummer</div>
          <div>{appartment?.lmNumber}</div>
          <div>Adress</div>
          <div>
            <div>
              {appartment?.address.street} {appartment?.address.number}{" "}
              {appartment?.address.numberAffix ?? ""}
            </div>
            <div>
              {appartment?.address.postalCode} {appartment?.address.city}
            </div>
            <div>{appartment?.address.county}</div>
          </div>
        </div>
        <div>
          <div>Köregel</div>
          <div>{appartment?.queueRule.name}</div>
          <div>Annons</div>
          <div>{appartment?.advert?.advertText}</div>
        </div>
      </div>
    </div>
  );
}
