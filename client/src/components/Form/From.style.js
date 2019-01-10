import styled from 'styled-components'
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
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
Modal.TextField = TextField;
Modal.Typography = Typography;

export { Modal };
