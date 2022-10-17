import { Box, MenuItem, Select, Stack, Switch, Typography } from "@mui/material";
import React from "react";

export const Notifications = ({ 
  messageSelect, 
  handleMessageSelect,
  notifications1Item,
  notifications2Item,
  notifications3Item,
  handleChangeNotification,
  setNotifications1Item,
  setNotifications2Item,
  setNotifications3Item,
 }) => {
  
  return (
    <Box mb={6}>
    <Typography
      variant="h6"
      mb={4}
    >
      Общие уведомления
    </Typography>
    <Stack
      mb={2}
      direction="row"
      spacing={2}
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography
        variant="subtitle1"
        flex={9}
      >
        Приветственная серия
      </Typography>
      <Typography
        flex={1}
        sx={{display: {xs: "none", sm: "block"} }}
      >
      </Typography>
      <Switch
        flex={2}
        checked={notifications1Item}
        onChange={() => handleChangeNotification(setNotifications1Item)}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <Typography
        variant="body2"
        flex={5}
      >
        4 полезных и емких письма в течение месяца
      </Typography>
    </Stack>

    <Stack
      mb={2}
      direction="row"
      spacing={2}
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography
        variant="subtitle1"
        flex={9}
      >
        Образовательные вебинары
      </Typography>
      <Typography
        flex={1}
        sx={{display: {xs: "none", sm: "block"} }}
      >
      </Typography>
      <Switch
        flex={2}
        checked={notifications2Item}
        onChange={() => handleChangeNotification(setNotifications2Item)}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <Typography
        variant="body2"
        flex={5}
      >
        Бесплатные вебинары проходят 1 раз в 2 недели. Вы будете получать 2 письма с напоминанием о предстоящем вебинаре.
      </Typography>
    </Stack>

    <Stack
      direction="row"
      spacing={2}
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography
        variant="subtitle1"
        flex={9}
      >
        Личные сообщения
      </Typography>
      <Typography
        flex={1}
        sx={{display: {xs: "none", sm: "block"} }}
      >
      </Typography>
      <Switch
        flex={2}
        checked={notifications3Item}
        onChange={() => handleChangeNotification(setNotifications3Item)}
        inputProps={{ 'aria-label': 'controlled' }}
      />

      <Box flex={5}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={10}
          value={messageSelect}
          onChange={handleMessageSelect}
          disabled={!notifications3Item}
        >
          <MenuItem value={10}>Мгновенно</MenuItem>
          <MenuItem value={20}>1 раз в день</MenuItem>
          <MenuItem value={30}>Отключить</MenuItem>
        </Select>
      </Box>
    </Stack>
  </Box>
  )
}