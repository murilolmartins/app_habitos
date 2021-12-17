import { useContext, useState } from "react";
import api from "../../services/api";
import Modal from "../Modal";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import Button from "../Button";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "./style";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/Auth";
import { useGroups } from "../../providers/Groups";
const ModalSearchGroups = ({ isOpen, setIsOpen }) => {
  const { token } = useContext(AuthContext);
  const [groupsList, setGroupsList] = useState([]);
  const [search, setSearch] = useState("");
  const { subscribeOnGroup } = useGroups();
  const callGroups = (info) => {
    api
      .get(`/groups/?search=${info}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
        setGroupsList([...res.data.results]);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Campo Invalido");
      });
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <header>
          <h2>Procura de grupos</h2>
          <CloseIcon
            onClick={() => {
              setIsOpen(false);
            }}
          ></CloseIcon>
        </header>
        <div>
          <input
            placeholder="Nome, descrição e categoria."
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button onClick={() => callGroups(search)}>
            <SearchIcon></SearchIcon>
          </Button>
        </div>
        <ul>
          {groupsList.map((group, index) => (
            <li key={index}>
              <p>{group.name}</p>
              <Button onClick={() => subscribeOnGroup(group.id)}>
                <CardMembershipIcon />
              </Button>
            </li>
          ))}
        </ul>
      </Container>
    </Modal>
  );
};
export default ModalSearchGroups;
