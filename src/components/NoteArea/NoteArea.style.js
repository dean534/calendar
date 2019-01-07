import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
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
Day.Typography = Typography;
export { Day };

export const WeekTitle = styled.div``;
//Modal

const Conatiner = styled.div`
  width: 400px;
  height: 300px;
  padding: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
`;
Modal.Button = Button;
Modal.Conatiner = Conatiner;
Modal.Input = Input;
Modal.TextField = TextField;
Modal.Typography = Typography;


export { Modal };
