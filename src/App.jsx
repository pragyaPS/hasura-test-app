import DashBoardPage from "./components/pages/Dashboard";
import styled from "styled-components";


const Main = styled.div`
margin: 20px;
`;

const App = () => {
  return (
    <Main>
      <DashBoardPage />
    </Main>
  );
};

export default App;
