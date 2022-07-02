import {
  Carrossel,
  ContainerInput,
  ContainerList,
  DivButtons,
  ListGroups,
  MobileList,
} from "./indexStyle";
import {
  AiOutlineSearch,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import Button from "../../Components/Button/index";
import CardGroup from "../../Components/CardGroup";

import { useEffect, useRef, useState, useTransition } from "react";
import api from "../../Services";
import { Link, useHistory } from "react-router-dom";
import { useGroup } from "../../Providers/Grupos";

const Group = () => {
  const carrossel = useRef(null);
  const [groups, setGroups] = useState();
  const [atualPage, setAtualPage] = useState(1);
  const [search, setSearch] = useState("");
  const [filteredGroups, setFilteredGroups] = useState("");
  const history = useHistory();
  const { getSpecificGroup } = useGroup();

  const navigation = () => {
    return console.log("aqui");
  };
  const slideLeft = (e) => {
    e.preventDefault();
    carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
  };

  const slideRight = (e) => {
    e.preventDefault();
    carrossel.current.scrollLeft += carrossel.current.offsetWidth;
  };

  const searchGroups = (name) => {
    api.get(`/groups/?page=${atualPage}&search=${name}`).then((response) => {
      setFilteredGroups(response.data.results);
      console.log(filteredGroups);
    });
  };

  useEffect(() => {
    api.get(`/groups/?page=${atualPage}`).then((response) => {
      setGroups(response.data.results);
    });
  }, [atualPage]);

  const cleanFilter = () => {
    setFilteredGroups("");

    setSearch("");
    setAtualPage(1);
  };

  //console.log(search);
  return (
    <ContainerList>
      <h1>Grupos</h1>
      <button onClick={() => cleanFilter()}>Limpar Pesquisa</button>
      <ContainerInput>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type={"text"}
          placeholder={"Pesquise um Grupo"}
          value={search}
        />
        <Button onClick={() => searchGroups(search)}>
          <AiOutlineSearch size={25} />
        </Button>
      </ContainerInput>
      <h3>Conheça os grupos relacionados a pessoas com tdah :</h3>

      <ListGroups>
        <AiOutlineArrowLeft
          className="icon"
          cursor="pointer"
          onClick={slideLeft}
          size={90}
        />
        <Carrossel ref={carrossel}>
          {filteredGroups !== ""
            ? filteredGroups.map((group) => {
                return (
                  <div onClick={getSpecificGroup(group)}>
                    <CardGroup key={group.id} groups={group} />
                  </div>
                );
              })
            : groups
            ? groups.map((group) => {
                return (
                  <div onClick={getSpecificGroup(group)}>
                    <CardGroup key={group.id} groups={group} />
                  </div>
                );
              })
            : null}
        </Carrossel>
        <AiOutlineArrowRight
          className="icon"
          cursor="pointer"
          onClick={slideRight}
          size={90}
        />
        <MobileList ref={carrossel}>
          {filteredGroups !== ""
            ? filteredGroups.map((group) => {
                return (
                  <div onClick={getSpecificGroup(group)}>
                    <CardGroup key={group.id} groups={group} />
                  </div>
                );
              })
            : groups
            ? groups.map((group) => {
                return (
                  <div onClick={getSpecificGroup(group)}>
                    <CardGroup key={group.id} groups={group} />
                  </div>
                );
              })
            : null}
        </MobileList>
      </ListGroups>
      <DivButtons>
        <Button
          onClick={() =>
            setAtualPage(atualPage > 1 ? atualPage - 1 : atualPage)
          }
        >
          Previos Page
        </Button>
        <Button
          onClick={() => {
            setAtualPage(atualPage + 1);
          }}
        >
          Next Page
        </Button>
      </DivButtons>
    </ContainerList>
  );
};

export default Group;
