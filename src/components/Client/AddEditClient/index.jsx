import React, { useState, useEffect, useRef } from "react";

import {
  ContainerCentral,
  Container,
  PositionTitle,
  H1,
  Input,
  Form,
  Label,
  DivName,
  DivEmail,
  DivBusiness,
  DivCustomer,
  DivRelease,
  DivTag,
  DivStatus,
  DivButton,
  ClickButton,
  PositionButtonCancel,
} from "./styles";
import SingleSelect from "../../Geral/Input/SingleSelect";
import ButtonDefault from "../../../assets/Buttons/ButtonDefault";
import { TagComponent } from "../../Geral/TagComponent";
import { useUserContext } from "../../../hook/useUserContext";
import { useFetchCustomer } from "../../../hook/useFetchCustomer";
import { useFetchClient } from "../../../hook/useFetchClient";
import { useFetchRole } from "../../../hook/useFetchRole";
import { useFetchTag } from "../../../hook/useFetchTag";
import { useCustomerContext } from "../../../hook/useCustomerContext";
import { useReleaseContext } from "../../../hook/useReleaseContent";

const AddEditClient = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [customer, setCustomer] = useState({});
  const { userTarget } = useUserContext();
  const [business] = useState("");
  const [role, setRole] = useState({});
  const [status, setStatus] = useState("");
  const { release: releaseList } = useReleaseContext("release");
  const { loadCustomerList } = useCustomerContext();

  const { loadCustomerOptions } = useFetchCustomer();
  const [customerList, setCustomerList] = useState([]);
  const { roleList } = useFetchRole("Role");
  const { tagList } = useFetchTag("Tag");
  const [releaseObj, setReleaseObj] = useState({
    release_name: "",
    business_name: "",
  });
  const [releaseOptions, setReleaseOptions] = useState([]);

  const [tags, setTags] = useState([]);
  const { insertClient } = useFetchClient();
  const [flag, setFlag] = useState(false);
  const { setModal } = props;

  useEffect(() => {
    loadCustomerList();
    setCustomerList(loadCustomerOptions());
  }, []);

  useEffect(() => {
    if (releaseList) {
      setReleaseOptions(
        releaseList
          .map((item) => ({
            id: item.id,
            value: item.id,
            label: item.name,
            //status: item.status,
          }))
          .sort((a, b) => (a.label || "").localeCompare(b.label || ""))
      );
    }
  }, [releaseList]);

  const closeModal = () => {
    setModal(false);
  };

  const handleSubmit = () => {
    if (props.title === "Create Client") {
      createClient();
    } else {
    }
  };

  const createClient = () => {
    const newClient = {
      client_email: email,
      client_name: name,
      client_role: role.id,
      status_description: status,
      customer_id: customer.id,
      business_id: parseInt(releaseObj.business_id),
      release_id: releaseObj.id,
      user_id: userTarget.id,
      tags: tags.map((tag) => ({ tag_id: tag.value })),
    };
    if (name && email && role.id && customer.id && releaseObj.id) {
      insertClient(newClient);
      setModal(false);
    } else {
      setFlag(true);
    }
  };

  const handleSelectRelease = (release_id) => {
    setReleaseObj(releaseList.filter((item) => item.id === release_id)[0]);
  };

  const handleSelectCustomer = (customer_id) => {
    setCustomer(customerList.filter((c) => c.id === customer_id)[0]);
  };

  const handleSelectRole = (role_id) => {
    setRole(roleList.filter((c) => c.id === role_id)[0]);
  };

  return (
    <>
      <ContainerCentral>
        <Container>
          <PositionTitle>
            <H1>{props.title} </H1>
          </PositionTitle>
          <Form>
            <DivCustomer>
              <SingleSelect
                key="2"
                set={(customer_id) => handleSelectCustomer(customer_id)}
                label={"Customer"}
                value={customer.label}
                placeholder={flag && !customer.id ? "Required field" : ""}
                sizeSingle={"100%"}
                sizeMenu={"100%"}
                options={customerList ? customerList : []}
              />
            </DivCustomer>

            <DivRelease>
              <SingleSelect
                key="3"
                set={(release_id) => handleSelectRelease(release_id)}
                label={"Release Train"}
                value={releaseObj.name}
                placeholder={flag && !releaseObj.id ? "Required field" : ""}
                sizeSingle={"100%"}
                sizeMenu={"100%"}
                options={releaseOptions}
              />
            </DivRelease>
            <DivBusiness>
              <Label>
                Business
                <Input
                  disabled
                  widthInput={"98% !important"}
                  value={releaseObj.business_name}
                  placeholder={
                    flag && !releaseObj._name ? "Required field" : ""
                  }
                  required={flag && !releaseObj.business_name ? true : false}
                  name={business}
                />
              </Label>
            </DivBusiness>

            <DivName>
              <Label>
                Client Name
                <Input
                  widthInput={"98% !important"}
                  placeholder={flag && !name ? "Required field" : ""}
                  value={name}
                  required={flag && !name ? true : false}
                  onChange={(event) => setName(event.target.value)}
                />
              </Label>
            </DivName>

            <DivEmail>
              <Label>
                Email
                <Input
                  widthInput={"93% !important"}
                  name={email}
                  value={email}
                  placeholder={flag && !email ? "Required field" : ""}
                  required={flag && !email ? true : false}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Label>

              <SingleSelect
                key="1"
                set={(role) => handleSelectRole(role)}
                placeholder={flag && !role.id ? "Required field" : ""}
                name={role}
                value={role.label}
                label={"Role"}
                sizeSingle={"100%"}
                sizeMenu={"100%"}
                sizeHeightList={"25vh"}
                options={roleList ? roleList : []}
              />
            </DivEmail>

            <DivTag>
              <TagComponent
                set={(tags) => setTags(tags)}
                tags={tags}
                label={"Tags"}
                placeholder={flag && !tags ? "Required field" : ""}
                required
                sizeMenu={"37%"}
                width={"90%"}
                widths={"100%"}
                marginLeft={"1%"}
                options={tagList ? tagList : []}
              />
            </DivTag>

            <DivStatus>
              {true && props.title === "Edit Client" && (
                <SingleSelect
                  set={(status) => setStatus(status)}
                  label={"Status"}
                  value={status}
                  placeholder={flag && !status ? "Required field" : ""}
                  sizeSingle={"40%"}
                  required
                  sizeMenu={"40%"}
                  options={status_mok}
                />
              )}
            </DivStatus>
          </Form>{" "}
          <DivButton>
            <ClickButton onClick={handleSubmit}>
              <ButtonDefault
                type="userSave"
                weightFont={"500"}
                sizeFont={"18px"}
                name={"Save"}
              />
            </ClickButton>
            <PositionButtonCancel onClick={closeModal}>
              <ButtonDefault type="userCancel" name={"Cancel"} />
            </PositionButtonCancel>
          </DivButton>
        </Container>
      </ContainerCentral>
    </>
  );
};

export default AddEditClient;

const status_mok = [
  { id: 1, value: "ATIVO", label: "ATIVO" },
  { id: 2, value: "INATIVO", label: "INATIVO" },
];
