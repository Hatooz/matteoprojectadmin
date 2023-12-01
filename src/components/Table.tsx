"use client";

import Properties from "./Properties";

export default function Table({
  properties,
  rules,
}: {
  properties: any;
  rules: any;
}) {
  return (
    <div className="mt-12 p-2">
      <div className="grid grid-cols-12 justify-items-start   ">
        <div className="">Objektnummer</div>
        <div className=" mr-5">LM Nummer</div>
        <div className=" mr-10">Köregel</div>
        <div className=" mr-10">Adress</div>
      </div>
      <Properties properties={properties} rules={rules} />

      {/* {currentAppartments.length > 0 &&
        currentAppartments.map((ap: any) => {
          return <div key={ap.id}>{ap.id}</div>;
        })} */}
    </div>
  );
}
