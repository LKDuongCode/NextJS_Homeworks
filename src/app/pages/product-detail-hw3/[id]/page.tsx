import React from "react";
type PropsType = {
  params: {
    id: string;
  };
};
export default function page({ params }: PropsType) {
  return <div>product id: {params.id}</div>;
}
