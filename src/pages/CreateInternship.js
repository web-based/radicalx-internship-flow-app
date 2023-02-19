import styled from "@emotion/styled";

// Components
import HeaderContainer from "../components/reusable-comp/Header";
import ProgressBar from "../components/reusable-comp/Progress";
import FormData from "../components/create-internship/FormData";

function CreateInternship() {
  return (
    <CreateContainer>
      <HeaderContainer next="/internshipGuide" />
      <ProgressBar name="Internship Description" />
      <FormData />
    </CreateContainer>
  );
}

// Styles
const CreateContainer = styled.div`
  background-color: #f1f4f8;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 1400px;
  height: 100vh;
  overflow: auto;
`;

export default CreateInternship;
