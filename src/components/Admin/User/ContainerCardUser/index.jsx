import React from "react";
import {
  Active,
  BoardStyle,
  ButtonActive,
  ButtonInactive,
  CardsContainer,
  ContainerGlobal,
  ContainerHeaderAndCards,
  DivButton,
  DivClose,
  DivInfo,
  DivModal,
  DivSpans,
  DivTitlePage,
  H1,
  HeaderContainerCards,
  HowManyActive,
  HowManyClientList,
  HowManyInactive,
  Inactive,
  LineDivisor,
  Top,
} from "./styles";
import UserCard from "./CardListView/index";
import AddEditClient from "../AddEditUser";
import ButtonAdd from "../../../../assets/Buttons/ButtonAdd";
import { useState, useEffect } from "react";
import { useUserContext } from "../../../../hook/useUserContext";
import ModalPopUp from "../ModalPopUP";
import ModalPassword from "../ModalPassword";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { ReactComponent as Info } from "../../../../assets/svg/Info.svg";
import { useSearchContext } from "../../../../hook/useSearchContext";
const abaStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
};

const ContainerCards = () => {
  const { loadUserList, userList: users, modalPassword } = useUserContext();
  const { search } = useSearchContext();

  const [userList, setUserList] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalPopUp, setModalPopUp] = useState(false);
  const [id, setId] = useState(null);
  const [isEdit, setEdit] = useState(false);
  const [active, setActive] = useState(abaStatus.ACTIVE);

  const handleClick = (selectedTab) => {
    setActive(selectedTab);
  };

  useEffect(() => {
    loadUserList();
  }, []);

  useEffect(() => {
    if (users)
      if (search) {
        setUserList(
          users.filter((u) =>
            u.name.toLowerCase().includes(search.toLowerCase())
          )
        );
      } else {
        setUserList(users);
      }
  }, [search, users]);

  const getTabColor = (status) => {
    return { borderBottom: active === status ? "2px solid #E41165" : "" };
  };

  const createClient = () => {
    setModal(true);
    setEdit(false);
  };

  const EditClient = () => {
    setModal(true);
    setEdit(true);
  };

  return (
    <ContainerGlobal>
      <ContainerHeaderAndCards>
        <HeaderContainerCards>
          <Top>
            <DivTitlePage>
              <H1>User List </H1>
              <HowManyClientList>
                ({userList ? userList.length : 0})
              </HowManyClientList>{" "}
              <Tippy content="List of all system users">
                <DivInfo>
                  <Info
                    width="25px"
                    style={{
                      fill: "#E41165",
                    }}
                  />
                </DivInfo>
              </Tippy>
            </DivTitlePage>

            <DivButton onClick={() => createClient()}>
              <ButtonAdd
                mode="#E41165"
                width="169px"
                height="38px"
                name="Create User"
                color="white"
              />
            </DivButton>
          </Top>

          <DivSpans>
            <ButtonActive
              key={abaStatus.ACTIVE}
              onClick={() => handleClick(abaStatus.ACTIVE)}
              style={getTabColor(abaStatus.ACTIVE)}
            >
              <Active>
                Active (
                <HowManyActive>
                  {userList
                    ? userList.filter((item) => item.status === "ACTIVE").length
                    : 0}
                </HowManyActive>
                )
              </Active>
            </ButtonActive>
            <ButtonInactive
              key={abaStatus.INACTIVE}
              onClick={() => handleClick(abaStatus.INACTIVE)}
              style={getTabColor(abaStatus.INACTIVE)}
            >
              <Inactive>
                Inactive (
                <HowManyInactive>
                  {userList
                    ? userList.filter((item) => item.status === "INACTIVE")
                        .length
                    : 0}
                </HowManyInactive>
                )
              </Inactive>
            </ButtonInactive>
          </DivSpans>
        </HeaderContainerCards>

        <CardsContainer>
          <LineDivisor />

          <BoardStyle>
            {userList &&
              userList
                .filter((u) => u.status === active)
                .map((u) => (
                  <UserCard
                    setId={(i) => setId(i)}
                    openModalPopUp={() => setModalPopUp(true)}
                    key={u.id}
                    id={u.id}
                    openModal={() => EditClient()}
                  />
                ))}
          </BoardStyle>
        </CardsContainer>
      </ContainerHeaderAndCards>

      <DivModal $mode={modal} />

      {modal && (
        <AddEditClient
          id={id}
          setModal={setModal}
          title={isEdit ? "Edit User" : "Create User"}
        />
      )}
      {modalPopUp && (
        <ModalPopUp id={id} modalClose={() => setModalPopUp(false)} />
      )}
      {modalPassword && (
        <>
          <DivClose />
          <ModalPassword />
        </>
      )}
    </ContainerGlobal>
  );
};
export default ContainerCards;
