import dynamic from "next/dynamic";
import React from "react";

const JSONPointCloudWithNoSSR = dynamic(
  () => import("../../_components/JSONPointCloud"),
  {
    ssr: false,
  }
);

const JSON_PointCloud = () => {
  return (
    <div>
      <JSONPointCloudWithNoSSR />
    </div>
  );
};

export default JSON_PointCloud;
