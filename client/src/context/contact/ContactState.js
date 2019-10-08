import React, { useReducer } from "react";
import axios from "axios";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "robi hamdani",
        email: "robi4us@gmail",
        phone: "899-888-555",
        type: "personal"
      },
      {
        id: 2,
        name: "Asep Saepullah",
        email: "asep@gmail",
        phone: "454-888-555",
        type: "personal"
      },
      {
        id: 3,
        name: "Jaenudin",
        email: "jawee@gmail.com",
        phone: "1212-787-251",
        type: "professional"
      },
      {
        id: 4,
        name: "robi hamdani",
        email: "robi4us@gmail",
        phone: "899-888-555",
        type: "personal"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // add contact

  // delete contact

  // set current contact

  // clear current contact

  // update contact

  // filter contact

  // clear filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
