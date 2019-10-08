import React, { useReducer } from "react";
import axios from "axios";
import uuid from "uuid";
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
    ],
    current: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // add contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
    console.log(addContact);
  };

  // delete contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // set current contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // clear current contact
  const clearCurrent = id => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // update contact
  const updateContact = id => {
    dispatch({ type: UPDATE_CONTACT, payload: id });
  };

  // filter contact

  // clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        updateContact,
        setCurrent,
        clearCurrent
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
