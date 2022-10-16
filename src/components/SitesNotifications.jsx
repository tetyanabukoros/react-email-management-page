import { Box, Chip, Link, MenuItem, Select, Stack, Switch, Typography } from "@mui/material";
import React, { useState } from "react";


export const SitesNotifications = ({ 
  adsMessageFirst,
  handleAdsMessageFirst,
  adsMessageSecond,
  handleAdsMessageSecond,
  handleChangeNotification,
  sitesNotif1Item,
  sitesNotif2Item,
  sitesNotif3Item,
  sitesNotif4Item,
  sitesNotif5Item,
  sitesNotif6Item,
  sitesNotif7Item,
  setSitesNotif1Item,
  setSitesNotif2Item,
  setSitesNotif3Item,
  setSitesNotif4Item,
  setSitesNotif5Item,
  setSitesNotif6Item,
  setSitesNotif7Item,
}) => {

  const [isChip, setIsChip] = useState(true);
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
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
        checked={sitesNotif1Item}
        onChange={() => handleChangeNotification(setSitesNotif1Item)}
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
        checked={sitesNotif2Item}
        onChange={() => handleChangeNotification(setSitesNotif2Item)}
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
        checked={sitesNotif3Item}
        onChange={() => handleChangeNotification(setSitesNotif3Item)}
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
        checked={sitesNotif4Item}
        onChange={() => handleChangeNotification(setSitesNotif4Item)}
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
        checked={sitesNotif5Item}
        onChange={() => handleChangeNotification(setSitesNotif5Item)}
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
        checked={sitesNotif6Item}
        onChange={() => handleChangeNotification(setSitesNotif6Item)}
        inputProps={{ 'aria-label': 'controlled' }}
      />

      <Box flex={5}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={10}
          value={adsMessageFirst}
          onChange={handleAdsMessageFirst}
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
        checked={sitesNotif7Item}
        onChange={() => handleChangeNotification(setSitesNotif7Item)}
        inputProps={{ 'aria-label': 'controlled' }}
      />

      <Box flex={5}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={10}
          value={adsMessageSecond}
          onChange={handleAdsMessageSecond}
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