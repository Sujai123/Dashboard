import React from "react";
import { createUseStyles } from "react-jss";
import Calendar from "../../components/Calendar";
import Profile from "./Profile";
import PatientDetail from "./PatientDetail";
import MessageSVG from "../../assets/MessageSVG";
import PhoneSVG from "../../assets/PhoneSVG";
import Button from "../../components/Button";
import Heading2 from "../../components/Heading2";
import BoldParagraph from "../../components/BoldParagraph";
import Paragraph from "../../components/Paragraph";
import ButtonBase from "../../components/ButtonBase";
import theme from "../../constants/theme";
import Legend from "../../components/Legend";

const useStyles = createUseStyles({
  container: {
    padding: "2rem",
    backgroundColor: "#252736",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  },
  patientList: {
    display: "flex",
    gap: "1rem",
  },
  actions: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  calendarContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginBlock: "1rem",
  },
  availability: {
    display: "flex",
    justifyContent: "space-around",
  },
});

const DoctorAppointment = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div>
      <Heading2>Doctor's Appointment</Heading2>
      <Paragraph>prepared to discuss with doctor</Paragraph>
      </div>
      <div className={styles.calendarContainer}>
        <Paragraph variant="bold">Available date for consultations</Paragraph>
        <Calendar />
        <div className={styles.availability}>
          <Legend color={theme.text.primary}>Available</Legend>
          <Legend color={theme.text.secondary}>Fully booked</Legend>
          <Legend color={theme.background.secondary}>Not available</Legend>
        </div>
      </div>

      <div className={styles.calendarContainer}>
        <Profile />
        <p>Our Patient Today</p>
        <div className={styles.patientList}>
          <PatientDetail />
          <PatientDetail />
        </div>
        <div className={styles.actions}>
          <ButtonBase borderRadius="50%" backgroundColor={theme.background.secondary}>
            <MessageSVG />
          </ButtonBase>
          <ButtonBase borderRadius="50%" backgroundColor={theme.background.secondary}>
            <PhoneSVG />
          </ButtonBase>
          <Button>Book Consultations</Button>
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointment;
