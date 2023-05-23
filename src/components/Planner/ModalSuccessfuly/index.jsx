import ButtonDefault from "../../../assets/Buttons/ButtonDefault";
import {
  Container,
  Overlay,
  Content,
  DivSave,
  DivCancel,
  Circle,
  Span,
  ContainerFather,
} from "./styles";
import { useClientContext } from "../../../hook/useClientContent";
import { useEffect, useRef } from "react";
import IconSystem from "../../../assets/IconSystem";
import { usePlannerContext } from "../../../hook/usePlannerContext";
import { useBusinessContext } from "../../../hook/useBusinessContent";
import { useReleaseContext } from "../../../hook/useReleaseContent";
import { useRemarkContext } from "../../../hook/useRemarkContent";

const ModalSave = (props) => {
  const { setModalSucess } = useRemarkContext();
  const { setModalSave } = usePlannerContext();
  const { setModalSaveBusiness, sucessBusiness, setSucessBusiness } =useBusinessContext();
  const { setModalSaveRelease, sucessRelease, setSucessRelease } =useReleaseContext();
  const { setModalSaveRemark, sucessRemark, setSucessRemark } = useRemarkContext();

  const editSave = sucessBusiness || sucessRelease || sucessRemark ? "Edit" : "Created";


  const handleSave = () => {
    setSucessBusiness(false);
    setSucessRelease(false);
    setModalSave(false);
    setModalSaveBusiness(false);
    setModalSaveRelease(false);
    setModalSucess(false);
  } 
  return (
    <ContainerFather onClick={() => handleSave()}>
      <Container subject={props.subject}>
        <Content>
          <Circle>
            <span>
              <IconSystem icon={"CheckWhite"} />{" "}
            </span>
          </Circle>
          <Span> {`Successfuly ` + editSave}</Span>
        </Content>
      </Container>
    </ContainerFather>
  );
};

export default ModalSave;
