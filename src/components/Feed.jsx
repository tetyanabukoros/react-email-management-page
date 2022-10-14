import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Notifications } from "./Notifications";
import { SitesNotifications } from "./SitesNotifications";
import { TelegramNotifications } from "./TelegramNotofications";


export const Feed = () => {
  // const [checked, setChecked] = React.useState(true);
  // 
  // const handleChange = (event) => {
  //   setChecked(!checked);
  // };

  return (
    <Box
      flex={12}
      p={2}
    >
      <Typography mb={14} mt={6} variant="h3">
        Управление рассылками
      </Typography>

      <Notifications />

      <SitesNotifications />
      <TelegramNotifications />

    <Stack spacing={2} direction="row">
      <Button variant="contained" sx={{
        textTransform: "initial",
        background: "#F0F6FF",
        color: "#3861FB",
        "&:hover":{
          backgroundColor:"#e4ebf5",
        }
        }}
      >
        По умолчанию
      </Button>
      <Button variant="contained" sx={{
        background: "#3861FB",
        color: "#FFF",
        textTransform: "initial",
        "&:hover":{
          backgroundColor:"#2550f5",
          color:"#F0F6FF",
        }
        }}
      >
        Сохранить
      </Button>
    </Stack>

      <Typography mb={100}>
      </Typography>

    </Box>
  )
}