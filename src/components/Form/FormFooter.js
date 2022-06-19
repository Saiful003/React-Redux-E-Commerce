import styled from "styled-components";
import { Linked } from "../../styled-component/common";

function FormFooter({ route, role, children }) {
  return (
    <Wrapper>
      {children}
      <Linked to={`/${route}`}> {role && ` ${role} instead`} </Linked>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 7px;
`;

export default FormFooter;
