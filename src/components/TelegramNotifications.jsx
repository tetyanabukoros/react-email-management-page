import { Stack, Switch, Typography } from "@mui/material";
import React from "react";

export const TelegramNotifications = ({
  notifTelegram,
  setNotifTelegram,
  handleChangeNotification,
}) => {
  
  return (
  <>
  <Typography
      variant="h6"
      mb={4}
    >
      Уведомления по Телеграму
  </Typography>
    <Stack
      mb={8}
      direction="row"
      spacing={2}
      justifyContent="space-between"
    >
        <Typography
          variant="subtitle1"
          flex={9}
        >
          Новости
        </Typography>
        <Typography
          flex={1}
        >
        </Typography>
        <Switch
          flex={2}
          checked={notifTelegram}
          onChange={() => handleChangeNotification(setNotifTelegram)}
          inputProps={{ 'aria-label': 'controlled' }} />
        <Typography
          variant="subtitle1"
          flex={5}
          sx={{display: {xs: "none", sm: "flex"} }}
        >
        </Typography>
      </Stack></>
  )
}