import { createContext, useState } from "react";
export const PlannerContext = createContext();

export const PlannerContextProvider = ({ children }) => {
  const [planner, setPlanner] = useState(plannerList);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDiscard, setModalDiscard] = useState(false);
  const [modalSave, setModalSave] = useState(false);
  const [modalCreate, setModalCreate] = useState(false);
  const [modalRemark, setModalRemark] = useState(false);

  const [modalFollowUp, setModalFollowUp] = useState(false);
  const [modalPopUpCanceled, setModalPopUpCanceled] = useState(true);
  const [modalReschedule, setModalReschedule] = useState(false)
  const [modalPopUpFinished, setModalPopUpFinished] = useState(false)
  const [modalSubject, setModalSubject] = useState(false)

  return (
    <PlannerContext.Provider value={{ planner, setPlanner, 
    modalEdit, setModalEdit, 
    modalDiscard, setModalDiscard,
    modalSave, setModalSave, 
    modalCreate, setModalCreate,
    modalRemark, setModalRemark,
    modalFollowUp, setModalFollowUp,
    modalPopUpCanceled, setModalPopUpCanceled,
    modalReschedule, setModalReschedule,
    modalPopUpFinished, setModalPopUpFinished,
    modalSubject, setModalSubject,
    }}>
      {children}
    </PlannerContext.Provider>
  );
};


const plannerList = [
  {
    id: 1,
    subject: "ICT Expo 2023",
    date: new Date(2023, 2, 3, 8, 30),
    duration: "09:30",
    subject_id: 1,
    subject_name: "ICT Expo 2023",
    remark_id: 1,
    remark_name: "AWS FACTURE",
    client_id: 1,
    client_name: "Igor Sena Soares Silva",
    cleint_email: "igorsena@tcs.com",
    release_id: 1,
    release_name: "Experiência Digital",
    status:"Done",
    user_id: 21345678,
    user_name: "joão da silva"
  },
  {
    id: 2,
    subject: "Contest",
    date: new Date(2023, 2, 3, 10, 0),
    duration:"11:30",
    subject_id: 1,
    remark_id: 1,
    subject_name: "Contest",
    remark_name: "AWS FACTURE",
    client_name: "Ariel Soares",
    client_email: "soares.ariel@tcs.com",
    client_id: 2,
    release_id: 1,
    release_name:"Cliente PJ Itaú",
    status:"Done",
    user_id: 21344469,
    user_name: "Evandro",
  },  
  {
    id: 3,
    subject: "Crain's New York",
    date: new Date(2023, 2, 9, 8, 30),
    duration: "09:00",
    subject_id: 1,
    subject_name: "Crain's New York",
    remark_id: 1,
    remark_name: "AWS FACTURE",
    client_name: "Graziele Miranda",
    client_id: 3,
    client_email: "graziele.miranda@tcs.com",
    release_id: 1,
    release_name: "Plataformas de Produtos",
    status:"Canceled",
    user_id: 21345555,
    user_name: "Helio",
  },  
  {
    id: 4,
    subject: "Conference",
    date: new Date(2023, 2, 9, 13, 30),
    duration: "14:00",
    subject_id: 1,
    subject_name: "Conference",
    remark_id: 1,
    remark_name: "AWS FACTURE",
    client_name: "Luana Nogueira",
    client_id: 4,
    client_email: "luana.nogueira1@email.com",
    release_id: 1,
    release_name: "Receber e Arrecadar PJ",
    status:"Done",
    user_id: 21344488,
    user_name: "Lucas",
  },  
  {
    id: 5,
    subject: "Boot Camp",
    date: new Date(2023, 2, 9, 11, 10),
    duration: "12:00",
    subject_id: 1,
    subject_name: "Boot Camp",
    remark_id: 1,
    remark_name: "AWS FACTURE",
    client_name: "Maycon Cabo",
    client_id: 5,
    client_email: "maycon.cabo@tcs.com",
    release_id: 1,
    release_name: "Jornada do Cliente",
    status:"Done",
    user_id: 21345678,
    user_name: "joão da silva"
  },  
  {
    id: 6,
    subject: "Event with URI",
    date: new Date(2023, 2, 15, 12, 30),
    duration: "14:00",
    subject_id: 1,
    remark_id: 1,
    subject_name: "Event with URI",
    remark_name: "AWS FACTURE",
    client_name: "João Pedro",
    client_id: 6,
    client_email: "j.pedro@tcs.com",
    release_id: 1,
    release_name: "Investment Services",
    status:"Canceled",
    user_id: 21345678,
    user_name: "joão da silva"
  },  
  {
    id: 7,
    subject: "Compettion in europe at this day",
    date: new Date(2023, 2, 15, 8, 30),
    duration: "09:00",
    subject_id: 1,
    subject_name: "Compettion in europe at this day",
    remark_id: 1,   
    remark_name: "AWS FACTURE",
    client_name: "João Pedro",
    client_email: "j.pedro@tcs.com",
    client_id: 6,
    release_id: 1,
    release_name: "Investment Services",
    status:"Done",
    user_id: 21345678,
    user_name: "joão da silva"
  },  
  {
    id: 8,
    subject: "Apresentação institucional",
    date: new Date(2023, 2, 15, 16, 0),
    duration: "17:00",
    subject_id: 1,
    remark_id: 1,
    remark_name: "AWS FACTURE",
    client_name: "Mateus Silveira",
    client_id: 8,
    client_email: "silveira.mateus2@tcs.com",
    release_id: 1,
    release_name: "Proteção e Comunicação com o Cliente ",
    status:"Done", 
    user_id: 21345678,
    user_name: "joão da silva"
  },  
  {
    id: 9,
    subject: "Retorno Aspirantes",
    date: new Date(2023, 2, 22, 8, 30),
    duration: "09:00",
    subject_id: 1,
    subject_name: "Retorno Aspirantes",
    remark_id: 1,
    remark_name: "AWS FACTURE",
    client_name: "Guilherme Rezende",
    client_id: 9,
    client_email: "guilherme@tcs.com",
    release_id: 1,
    release_name:"Soluções Vic e Cartões",
    status:"Done", 
    user_id: 21345678,
    user_name: "joão da silva"
  },
  {
    id: 10,
    subject: "Condeference",
    date: new Date(2023, 2, 22, 13, 30),
    duration: "15:00",
    subject_id: 1,
    subject_name: "Condeference",
    remark_id: 1,
    remark_name: "AWS FACTURE",
    client_name: "Guilherme Rezende",
    client_id: 9,
    client_email: "guilherme@tcs.com",
    release_id: 1,
    release_name:"Soluções Vic e Cartões",
    status:"Canceled",
    user_id: 21345678,
    user_name: "joão da silva"
  },
  {
    id: 11,
    subject: "Contest",
    date: new Date(2023, 2, 30, 8, 30),
    duration: "09:00",
    subject_id: 1,
    subject_name: "Contest",
    remark_id: 1,
    remark_name: "AWS FACTURE",
    client_name: "Guilherme Rezende",
    client_id: 9,
    client_email: "guilherme@tcs.com",
    release_id: 1,
    release_name:"Soluções Vic e Cartões",
    status:"Scheduled",
    user_id: 21345678,
    user_name: "joão da silva"
  },
];

