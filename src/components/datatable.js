import React from "react";
import { DataTable, Text, Box, Meter } from "grommet";

export default function DataTableuser({data}) {
    
  return (
    <div className="datatabel">
      <DataTable
        border={{
          size: "small",
          color: "#000",
        }}
        columns={[
          {
            property: "CVE",
            header: <Text>CVE</Text>,
            primary: true,
          },
          {
            header: <Text>Status</Text>,
            property: "status",
          },
          {
            header: <Text>Assigne</Text>,
            property: "Assigne",
          },
          {
            header: <Text>One</Text>,
            property: "one",
          },
          {
            header: <Text>Two</Text>,
            property: "Two",
          },
          {
            header: <Text>Enough</Text>,
            property: "Enough",
          },
        ]}
        data={data}
      />
    </div>
  );
}
