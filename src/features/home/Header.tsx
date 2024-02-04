import React from "react";
import { createUseStyles } from "react-jss";
import NavigationBar from "./NavigationBar";
import SearchBar from "../../assets/SearchSVG";
import NotificationSVG from "../../assets/NotificationSVG";
import Profile from "./Profile";
import ButtonBase from "../../components/ButtonBase";
import InfoSVG from "../../assets/InfoSVG";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    alignItems: "center",
    padding: "1rem",
    justifyContent: "space-between",
  },
  actions: {
    display: "flex",
    gap: "1rem",
  },
});

const Header = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <NavigationBar
        data={[
          "Overview",
          "Notes",
          "Document",
          "Labs",
          "Schedule",
          "Doctor",
          "Medicine",
          "Settings",
        ]}
      />
      <div className={styles.actions}>
        <ButtonBase>
          <SearchBar />
        </ButtonBase>
        <div>
          <ButtonBase borderRadius="1rem 0 0 1rem">
            <NotificationSVG />
          </ButtonBase>
          <ButtonBase borderRadius="0 1rem 1rem 0">
            <InfoSVG />
          </ButtonBase>
        </div>
      </div>
      <Profile />
    </div>
  );
};

export default Header;
