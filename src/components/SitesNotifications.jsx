import { Box, Chip, Link, MenuItem, Select, Stack, Switch, Typography } from "@mui/material";
import React from "react";


export const SitesNotifications = () => {
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
  const [messageSelect, setMessageSelect] = React.useState(10);

const handleMessageSelect = (event) => {
  setMessageSelect(event.target.value);
};
  
  return (
    <Box>
    <Typography
      variant="h6"
      mb={4}
    >
      Уведомление по Сайтам
    </Typography>
    <Stack
      mb={2}
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
        // checked={checked}
        // onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <Typography
        variant="subtitle1"
        flex={5}
      >
      </Typography>
    </Stack>

    <Typography
      variant="subtitle2"
      mb={4}
    >
      Поисковые агенты
    </Typography>
    <Typography
      variant="subtitle1"
    >
      Бизнес
    </Typography>
    <Stack
      mb={2}
      direction="row"
      spacing={2}
      justifyContent="space-between"
    >
      <Box
        flex={9}
      >
        <Stack flex={3} direction={{ xs: 'column', md: 'row' }} spacing={1}>
          <Chip label="Seo" onDelete={handleDelete} />
          <Chip label="Продвижение" onDelete={handleDelete} />
          <Chip label="Аналитика" onDelete={handleDelete} />
        </Stack>
      </Box>
      <Link
        underline="none"
        flex={1}
        alignSelf="flex=start"
        component="button"
        variant="body1"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        Детали
      </Link>
      <Switch
        flex={2}
        // checked={checked}
        // onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <Typography
        variant="body2"
        flex={5}
      >
        Поисковый агент присылает 1 письмо в неделю  и только  при условии, что найдены новые площадки
      </Typography>


    </Stack>

    <Typography
      variant="subtitle1"
    >
      123
    </Typography>
    <Stack
      mb={2}
      direction="row"
      spacing={2}
      justifyContent="space-between"
    >
      <Box
        flex={9}
      >
        <Stack flex={3} direction={{ xs: 'column', md: 'row' }} spacing={1}>
          <Chip label="Seo" onDelete={handleDelete} />
          <Chip label="Продвижение" onDelete={handleDelete} />
        </Stack>
      </Box>
      <Link
        underline="none"
        flex={1}
        alignSelf="flex=start"
        component="button"
        variant="body1"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        Детали
      </Link>
      <Switch
        flex={2}
        // checked={checked}
        // onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <Typography
        variant="subtitle1"
        flex={5}
      >
      </Typography>


    </Stack>
    <Typography
      variant="subtitle1"
    >
      SEO
    </Typography>
    <Stack
      mb={2}
      direction="row"
      spacing={2}
      justifyContent="space-between"
    >
      <Box
        flex={9}
      >
        <Stack flex={3} direction={{ xs: 'column', md: 'row' }} spacing={1}>
          <Chip label="Seo" onDelete={handleDelete} />
          <Chip label="Продвижение" onDelete={handleDelete} />
          <Chip label="Аналитика" onDelete={handleDelete} />
        </Stack>
      </Box>
      <Link
        underline="none"
        flex={1}
        alignSelf="flex=start"
        component="button"
        variant="body1"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        Детали
      </Link>
      <Switch
        flex={2}
        // checked={checked}
        // onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <Typography
        variant="subtitle1"
        flex={5}
      >
      </Typography>
    </Stack>
    <Typography
      variant="subtitle1"
    >
      Бурж ссылок
    </Typography>
    <Stack
      mb={2}
      direction="row"
      spacing={2}
      justifyContent="space-between"
    >
      <Box
        flex={9}
      >

        <Stack flex={3} direction={{ xs: 'column', md: 'row' }} spacing={1}>
          <Chip label="Биржи ссылок: Не обнаружен" onDelete={handleDelete} />
        </Stack>
      </Box>
      <Link
        underline="none"
        flex={1}
        alignSelf="flex=start"
        component="button"
        variant="body1"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        Детали
      </Link>
      <Switch
        flex={2}
        // checked={checked}
        // onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <Typography
        variant="subtitle1"
        flex={5}
      >
      </Typography>
    </Stack>

    <Typography
      variant="subtitle2"
      mb={4}
    >
      Рекламные компании
    </Typography>
    <Stack
      mb={2}
      direction="row"
      spacing={2}
      justifyContent="space-between"
    >
      <Typography
        variant="subtitle1"
        flex={9}
      >
        Строительство домов
      </Typography>
      <Link
        underline="none"
        flex={1}
        alignSelf="flex=start"
        component="button"
        variant="body1"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
      </Link>
      <Switch
        flex={2}
        // checked={checked}
        // onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />

      <Box flex={5}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={10}
          value={messageSelect}
          onChange={handleMessageSelect}
        >
          <MenuItem value={10}>Мгновенно</MenuItem>
          <MenuItem value={20}>1 раз в день</MenuItem>
          <MenuItem value={30}>Отключить</MenuItem>
        </Select>
      </Box>
    </Stack>
    <Stack
      mb={2}
      direction="row"
      spacing={2}
      justifyContent="space-between"
    >
      <Typography
        variant="subtitle1"
        flex={9}
      >
        Строительство домов
      </Typography>
      <Link
        underline="none"
        flex={1}
        alignSelf="flex=start"
        component="button"
        variant="body1"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
      </Link>
      <Switch
        flex={2}
        // checked={checked}
        // onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />

      <Box flex={5}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={10}
          value={messageSelect}
          onChange={handleMessageSelect}
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