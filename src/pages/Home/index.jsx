import { UserContext } from "../../providers/UserContext.jsx";
import { useContext } from "react";
import { HomeSection, Header, Nav } from "./styled.js";
import { TechContext } from "../../providers/TechContext.jsx";
import { RegisterTechForm } from "../../components/RegisterTechForm/index.jsx";
import { EditTechForm } from "../../components/EditTechs/index.jsx";
import { useNavigate } from "react-router-dom";

export function Home() {
  const { user, setUser, works } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    techs,
    addTechModal,
    setAddTechModal,
    editTechModal,
    setEditTechModal,
    setTechId,
    setTechName,
  } = useContext(TechContext);

  function logOut() {
    setUser(null);
    localStorage.clear();
    navigate("/");
  }

  function testing(key, title) {
    setEditTechModal(!editTechModal);
    setTechId(key);
    setTechName(title);
  }

  return (
    <>
      <Header>
        <Nav id="nav-home">
          <figure>
            <img src="logo.svg" />
          </figure>
          <button id="logOut" onClick={logOut}>
            Sair
          </button>
          <button id="logout-symbol" onClick={logOut}>
            <img src="logout.svg" alt="" />
          </button>
        </Nav>
        <section id="user-info">
          <h3>Olá, {user.name.toUpperCase()}</h3>
          <p> {user.course_module.toUpperCase()} </p>
        </section>
        {addTechModal && <RegisterTechForm />}
        {editTechModal && <EditTechForm />}
      </Header>
      <HomeSection>
        <div>
          <div className="small-container">
            <h3 id="title">Tecnologias</h3>
            <button
              className="add-btn"
              onClick={() => setAddTechModal(!addTechModal)}
            >
              +
            </button>
          </div>

          {
            <ul>
              {techs.length > 0 ? (
                techs.map((element) => (
                  <li
                    key={element.id}
                    onClick={() => testing(element.id, element.title)}
                  >
                    <h3>{element.title} </h3>
                    <p>{element.status} </p>
                  </li>
                ))
              ) : (
                <p className="no-tech">
                  Você ainda não têm tecnologias cadastradas! Aproveite para
                  adicioná-las :)
                </p>
              )}
            </ul>
          }
        </div>

        <div>
          <div className="small-container">
            <h3 id="title">Projetos</h3>
            <button
              className="add-btn"
              onClick={() => setAddTechModal(!addTechModal)}
            >
              +
            </button>
          </div>

          {
            <ul>
              {works.length > 0 ? (
                works.map((element) => (
                  <li
                    key={element.id}
                    /*                     onClick={() => testing(element.id, element.title)}
                     */
                  >
                    <h3>{element.title} </h3>
                    <p>{element.description} </p>
                  </li>
                ))
              ) : (
                <p className="no-tech">
                  Você ainda não têm projetos cadastrados ://
                </p>
              )}
            </ul>
          }
        </div>
      </HomeSection>
    </>
  );
}
