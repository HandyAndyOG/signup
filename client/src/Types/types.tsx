import React from "react";

export interface States {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    addedUser: number | null;
    setAddedUser: React.Dispatch<React.SetStateAction<number>>;
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
    nameError: string;
    setNameError: React.Dispatch<React.SetStateAction<string>>;
    emailError: string;
    setEmailError: React.Dispatch<React.SetStateAction<string>>;
}
export interface Prop {
    setUsers: React.Dispatch<React.SetStateAction<string[] | undefined>>;
    setLocalstorage: React.Dispatch<React.SetStateAction<string | undefined>>
}

export interface FormData {
    name: string;
    email: string;
    isChecked: boolean;
    nameError: string;
    emailError: string;
  }
  
export interface FormHandlers {
    setName: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setUsers: React.Dispatch<React.SetStateAction<string[] | undefined>>;
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
    setNameError: React.Dispatch<React.SetStateAction<string>>;
    setEmailError: React.Dispatch<React.SetStateAction<string>>;
    setLocalstorage: React.Dispatch<React.SetStateAction<string | undefined>>;
  }
