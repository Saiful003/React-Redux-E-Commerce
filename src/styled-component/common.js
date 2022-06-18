import { Link } from "react-router-dom";
import styled from "styled-components";
// styles
const Container = styled.div`
  max-width: 90%;
  margin-inline: auto;
  padding-inline: 1em;
`;

const Wrapper = styled.div``;
const FormWrapper = styled.div`
  width: 37em;
  display: flex;
  flex-direction: column;
  gap: 0.8em;
  border: 1px solid #ddd;
  padding: 1.5em;
`;
const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Linked = styled(Link)`
  color: hsl(133deg 100% 40%);
  font-weight: 700;
  text-decoration: none;
  &:hover {
    color: hsl(133deg 100% 35%);
    text-decoration: underline;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  position: relative;
`;

export { Container, Wrapper, FormWrapper, FormContainer, Linked, IconWrapper };
