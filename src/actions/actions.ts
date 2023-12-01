"use server";

export const getAllProperties = async () => {
  return await (
    await fetch("http://localhost:5039/api/property", {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    })
  ).json();
};
export const getAllRules = async () => {
  return await (
    await fetch("http://localhost:5039/api/queuerule", {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    })
  ).json();
};

export const getAppartmentByProperty = async (propertyId: string) => {
  const propResponse = await fetch(
    `http://localhost:5039/api/appartment/byproperty/${propertyId}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    }
  );

  return await propResponse.json();
};

export const getAppartmentById = async (appartmentId: string) => {
  const appartmentResponse = await fetch(
    `http://localhost:5039/api/appartment/${appartmentId}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    }
  );

  return await appartmentResponse.json();
};

export const updatePropertyRule = async (
  propertyId: string,
  ruleId: string
) => {
  console.log("updating property rule");
  await fetch(`http://localhost:5039/api/property/${propertyId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    body: JSON.stringify({ queueRuleId: ruleId }),
  });

  return getAllProperties();
};

export const updateAppartmentRule = async (
  appartmentId: string,
  ruleId: string,
  propId: string
) => {
  console.log("updating property rule");
  await fetch(`http://localhost:5039/api/appartment/${appartmentId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    body: JSON.stringify({ queueRuleId: ruleId }),
  });

  return await getAppartmentByProperty(propId);
};
