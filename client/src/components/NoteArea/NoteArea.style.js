import styled from "styled-components";

import Button  from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export const Calendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1rem;
  grid-template-rows: 20px auto;
  height: 600px;
  margin-top: 1rem;
`;
export const Day1 = styled.div`
  color: green;
  grid-column-start: ${props => props.monFirst};
`;

//Day component
const Day = styled.div`
  overflow: hidden;
`;

const Note = styled.div`
display:flex;
justify-content:space-between; 
`;

Day.Typography = Typography;
Day.Note = Note;
Day.Button  = Button ;
export { Day };

export const WeekTitle = styled.div``;
