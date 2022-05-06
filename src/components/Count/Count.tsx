import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

type CountProps = {
  count: number;
};

export default function Count({ count }: CountProps) {
  return (
    <React.Fragment>
      <Box sx={{ m: 2 }} />
      <Stack>
        <Typography variant="h5">
          This is the current value : {count}
        </Typography>
      </Stack>
    </React.Fragment>
  );
}
