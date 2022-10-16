import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { Notifications } from "./Notifications";
import SaveModal from "./SaveModal";
import { SitesNotifications } from "./SitesNotifications";
import SuccessModal from "./SuccessModal";
import { TelegramNotifications } from "./TelegramNotifications";


export const Feed = () => {
  const [notifications1Item, setNotifications1Item] = useState(true);
  const [notifications2Item, setNotifications2Item] = useState(false);
  const [notifications3Item, setNotifications3Item] = useState(true);
  const [sitesNotif1Item, setSitesNotif1Item] = useState(false);
  const [sitesNotif2Item, setSitesNotif2Item] = useState(true);
  const [sitesNotif3Item, setSitesNotif3Item] = useState(false);
  const [sitesNotif4Item, setSitesNotif4Item] = useState(false);
  const [sitesNotif5Item, setSitesNotif5Item] = useState(true);
  const [sitesNotif6Item, setSitesNotif6Item] = useState(true);
  const [sitesNotif7Item, setSitesNotif7Item] = useState(false);
  const [notifTelegram, setNotifTelegram] = useState(false);

  const [openSaveModal, setOpenSaveModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const handleChangeNotification = (check) => {
    check(prev => !prev)
  };

  const [messageSelect, setMessageSelect] = React.useState(10);
  const [adsMessageFirst, setAdsMessageFirst] = React.useState(10);
  const [adsMessageSecond, setAdsMessageSecond] = React.useState(10);

  const handleMessageSelect = (event) => {
    setMessageSelect(event.target.value);
  };

  const handleAdsMessageFirst = (event) => {
    setAdsMessageFirst(event.target.value);
  };

  const handleAdsMessageSecond = (event) => {
    setAdsMessageSecond(event.target.value);
  };

  const handleDefaultButton = () => {
    setMessageSelect(10);
    setAdsMessageFirst(10);
    setAdsMessageSecond(10);
    setNotifications1Item(true);
    setNotifications2Item(true);
    setNotifications3Item(true);
    setSitesNotif1Item(true);
    setSitesNotif2Item(true);
    setSitesNotif3Item(true);
    setSitesNotif4Item(true);
    setSitesNotif5Item(true);
    setSitesNotif6Item(true);
    setSitesNotif7Item(true);
    setNotifTelegram(true);
  };

  return (
    <Box
      flex={12}
      p={2}
    >
      <Typography mb={14} mt={6} variant="h3">
        Управление рассылками
      </Typography>

      <Notifications 
        messageSelect={messageSelect}
        setMessageSelect={setMessageSelect}
        handleMessageSelect={handleMessageSelect}
        notifications1Item={notifications1Item}
        notifications2Item={notifications2Item}
        notifications3Item={notifications3Item}
        setNotifications1Item={setNotifications1Item}
        setNotifications2Item={setNotifications2Item}
        setNotifications3Item={setNotifications3Item}
        handleChangeNotification={handleChangeNotification}
      />

      <SitesNotifications 
        adsMessageFirst={adsMessageFirst}
        setAdsMessageFirst={setAdsMessageFirst}
        handleAdsMessageFirst={handleAdsMessageFirst}
        adsMessageSecond={adsMessageSecond}
        setAdsMessageSecond={setAdsMessageSecond}
        handleAdsMessageSecond={handleAdsMessageSecond}
        handleChangeNotification={handleChangeNotification}
        sitesNotif1Item={sitesNotif1Item}
        sitesNotif2Item={sitesNotif2Item}
        sitesNotif3Item={sitesNotif3Item}
        sitesNotif4Item={sitesNotif4Item}
        sitesNotif5Item={sitesNotif5Item}
        sitesNotif6Item={sitesNotif6Item}
        sitesNotif7Item={sitesNotif7Item}
        setSitesNotif1Item={setSitesNotif1Item}
        setSitesNotif2Item={setSitesNotif2Item}
        setSitesNotif3Item={setSitesNotif3Item}
        setSitesNotif4Item={setSitesNotif4Item}
        setSitesNotif5Item={setSitesNotif5Item}
        setSitesNotif6Item={setSitesNotif6Item}
        setSitesNotif7Item={setSitesNotif7Item}
      />

      <TelegramNotifications 
        notifTelegram={notifTelegram}
        setNotifTelegram={setNotifTelegram}
        handleChangeNotification={handleChangeNotification}
      />

      <Stack 
        mb={10} 
        spacing={2} 
        direction="row"
      >
        <Button 
          variant="contained" 
          sx={{
          textTransform: "initial",
          background: "#F0F6FF",
          color: "#3861FB",
          "&:hover":{
            backgroundColor:"#e4ebf5",
          }
          }}
          onClick={handleDefaultButton}
        >
          По умолчанию
        </Button>
        <Button 
          onClick={() => setOpenSaveModal(true)}
          variant="contained" 
          sx={{
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

      {openSaveModal && (
        <SaveModal openModal={openSaveModal} setOpenModal={setOpenSaveModal}/>
      )}

      {openSuccessModal && (
        <SuccessModal openModal={openSuccessModal} setOpenModal={setOpenSuccessModal}/>
      )}
    </Box>
  )
}