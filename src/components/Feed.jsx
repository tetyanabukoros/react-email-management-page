import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";
import Switch from '@mui/material/Switch';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';


export const Feed = () => {
  // const [checked, setChecked] = React.useState(true);
// 
  // const handleChange = (event) => {
  //   setChecked(!checked);
  // };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const [messageSelect, setMessageSelect] = React.useState(10);

  const handleMessageSelect = (event) => {
    setMessageSelect(event.target.value);
  };

  return (
    <Box 
      flex={6} 
      p={2}
    >
      <Typography mb={14} mt={6} variant="h3">
        Управление рассылками
      </Typography>
      <Box  mb={6}>
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
        >
          <Typography 
            variant="subtitle1" 
            flex={7} 
          >
            Приветственная серия
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
            4 полезных и емких письма в течение месяца
          </Typography>
        </Stack>
 
        <Stack
          mb={2}
          direction="row" 
          spacing={2} 
          justifyContent="space-between"
        >
          <Typography 
            variant="subtitle1" 
            flex={7} 
          >
            Образовательные вебинары
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
            Бесплатные вебинары проходят 1 раз в 2 недели. Вы будете получать 2 письма с напоминанием о предстоящем вебинаре.
          </Typography>
        </Stack>

        <Stack
          direction="row" 
          spacing={2} 
          justifyContent="space-between"
        >
          <Typography 
            variant="subtitle1" 
            flex={7} 
          >
            Личные сообщения
          </Typography>
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
            flex={7} 
          >
            Новости
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
        <Stack
          mb={2}
          direction="row" 
          spacing={2} 
          justifyContent="space-between"
        >
          <Box 
            flex={7} 
          >
            <Typography
              variant="subtitle1" 
            >
              Бизнес
            </Typography>
            <Stack
              mb={2}
              direction="row" 
              spacing={1} 
              justifyContent="space-between"
            >
              <Stack direction="row" spacing={1}>
                <Chip label="Seo" onDelete={handleDelete} />
                <Chip label="Продвижение" onDelete={handleDelete} />
                <Chip label="Аналитика" onDelete={handleDelete} />
              </Stack>
              <Link
                underline="none"
                flex={3}
                component="button"
                variant="body1"
                onClick={() => {
                console.info("I'm a button.");
                }}
               >
                Детали
               </Link>
            </Stack>
          </Box>
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
            Поисковый агент присылает 1 письмо в неделю  и только  при условии, что найдены новые площадки
          </Typography>
          

        </Stack>
        <Stack
          mb={2}
          direction="row" 
          spacing={2} 
          justifyContent="space-between"
        >
          <Box 
            flex={7} 
          >
            <Typography
              variant="subtitle1" 
            >
              123
            </Typography>
            <Stack
              mb={2}
              direction="row" 
              spacing={1} 
              justifyContent="space-between"
            >
              <Stack direction="row" spacing={1}>
                <Chip label="Seo" onDelete={handleDelete} />
                <Chip label="Продвижение" onDelete={handleDelete} />
              </Stack>
              <Link
                underline="none"
                flex={3}
                component="button"
                variant="body1"
                onClick={() => {
                console.info("I'm a button.");
                }}
               >
                Детали
               </Link>
            </Stack>
          </Box>
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
            Поисковый агент присылает 1 письмо в неделю  и только  при условии, что найдены новые площадки
          </Typography>
          

        </Stack>
        <Stack
          mb={2}
          direction="row" 
          spacing={2} 
          justifyContent="space-between"
        >
          <Box 
            flex={7} 
          >
            <Typography
              variant="subtitle1" 
            >
              SEO
            </Typography>
            <Stack
              mb={2}
              direction="row" 
              spacing={1} 
              justifyContent="space-between"
            >
              <Stack direction="row" spacing={1}>
                <Chip label="Seo" onDelete={handleDelete} />
                <Chip label="Продвижение" onDelete={handleDelete} />
                <Chip label="Аналитика" onDelete={handleDelete} />
              </Stack>
              <Link
                underline="none"
                flex={3}
                component="button"
                variant="body1"
                onClick={() => {
                console.info("I'm a button.");
                }}
               >
                Детали
               </Link>
            </Stack>
          </Box>
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
            Поисковый агент присылает 1 письмо в неделю  и только  при условии, что найдены новые площадки
          </Typography>
          

        </Stack>
        <Stack
          mb={2}
          direction="row" 
          spacing={2} 
          justifyContent="space-between"
        >
          <Box 
            flex={7} 
          >
            <Typography
              variant="subtitle1" 
            >
              Бурж ссылки
            </Typography>
            <Stack
              mb={2}
              direction="row" 
              spacing={1} 
              justifyContent="space-between"
            >
              <Stack direction="row" spacing={1}>
                <Chip label="Биржи ссылок: Не обнаружен" onDelete={handleDelete} />
              </Stack>
              <Link
                underline="none"
                flex={3}
                component="button"
                variant="body1"
                onClick={() => {
                console.info("I'm a button.");
                }}
               >
                Детали
               </Link>
            </Stack>
          </Box>
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
            Поисковый агент присылает 1 письмо в неделю  и только  при условии, что найдены новые площадки
          </Typography>
          

        </Stack>

      </Box>
      

      <Typography mb={100}>

      </Typography>

    </Box>
  )
}