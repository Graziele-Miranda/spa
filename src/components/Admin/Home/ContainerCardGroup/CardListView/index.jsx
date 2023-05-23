import React from "react";
import Body from "../../../../../assets/FontSystem/Body";
import Subtitle from "../../../../../assets/FontSystem/Subtitle";
import {
  ContainerCards,
  DivInfo,
  NameGroup,
  DivPhoto,
  DivUserInformation,
  DivTextCard,
  TextSubject,
  ClientContent,
  UserContent,
  DivResponsible,
  DivNameEmail,
  NameUser,
  TitleDiv,
  H1,
  DivDonut,
} from "./styles";
import { Link } from "react-router-dom";
import { useGroupListContext } from "../../../../../hook/useGroupListContext";
import { useSubjectContext } from "../../../../../hook/useSubjectContent";
import { usePlannerContext } from "../../../../../hook/usePlannerContext";

const Group = (props) => {
  const {
    group: groupList,
    setModalInfo,
    setId,
    setInfoGroup,
    setToggleState,
    setActiveTab,
  } = useGroupListContext();
  const group = groupList.filter((g) => g.id === props.id)[0];
  const { subject } = useSubjectContext();

  const { planner } = usePlannerContext();
  const plannerGroup = planner
    ? planner.filter((p) => group.usersId.includes(p.user_id))
    : [];
  const subjectGroup = subject
    ? subject.filter((s) => group.usersId.includes(s.user_id))
    : [];

  const handleClickViewGroup = () => {
    setInfoGroup(false);
    setToggleState(0);
    setActiveTab(0);
    setModalInfo(true);
    setId(group.id);
  };

  return (
    <>
      <Link
        to="/groups"
        onClick={() => handleClickViewGroup()}
        style={{ textDecoration: "none" }}
      >
        <ContainerCards>
          <ClientContent>
            <TitleDiv>
              <H1>{}</H1>
            </TitleDiv>
            <NameGroup>
              <Body type={"Body2"} name={group.group_name} />
            </NameGroup>
            <DivInfo>
              <Body
                type={"Body3"}
                name={group.textCustomer}
                colorFont={"rgba(0, 0, 0, 1)"}
              />
              <Body
                type={"Body3"}
                name={`${group.usersCount}  Users`}
                colorFont={"rgba(0, 0, 0, 1)"}
              />
            </DivInfo>
            <DivTextCard>
              <TextSubject>
                <Subtitle
                  type={"TextDescription"}
                  name={"Subjects"}
                  colorFont={"rgba(136, 136, 136, 1)"}
                />
                <DivDonut>
                  <Body
                    type={"Body2"}
                    name={subjectGroup.length}
                    colorFont={"rgba(0, 0, 0, 0.6);"}
                  />
                </DivDonut>
              </TextSubject>
              <TextSubject>
                <Subtitle
                  type={"TextDescription"}
                  name={"Planners "}
                  colorFont={"rgba(136, 136, 136, 1)"}
                />
                <DivDonut>
                  <Body
                    type={"Body2"}
                    name={plannerGroup.length}
                    colorFont={"rgba(0, 0, 0, 0.6);"}
                  />
                </DivDonut>
              </TextSubject>
            </DivTextCard>
          </ClientContent>
          <UserContent>
            <DivResponsible>
              <Body
                type={"Body3"}
                name={"TCS Responsible"}
                colorFont={"rgba(0, 0, 0, 1)"}
              />
            </DivResponsible>
            <DivUserInformation>
              <DivPhoto>
                <Body type={"Body2"} name={Split(group.responsible_name)} />
              </DivPhoto>
              <DivNameEmail>
                <NameUser>{group.responsible_name}</NameUser>
                {/*<Subtitle
                type={"TextDescription"}
                name={"props.emailUser"}
                colorFont={"#888888"}
              ></Subtitle>*/}
              </DivNameEmail>
            </DivUserInformation>
          </UserContent>
        </ContainerCards>
      </Link>
    </>
  );
};
export default Group;

function Split(n) {
  const name = n ? n : "";
  var nameSplit = name.split(" ");
  var name2 =
    nameSplit[0].split("")[0] +
    " " +
    nameSplit[nameSplit.length - 1].split("")[0] +
    "";
  return name2.toUpperCase();
}
