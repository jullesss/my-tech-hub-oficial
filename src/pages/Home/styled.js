import styled from "styled-components";

export const Header = styled.header`
  margin: 0 auto;
  max-width: 100%;
  width: 1100px;
  padding: 0px 40px;

  #user-info {
    height: 118px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--gray-3);
    @media (max-width: 680px) {
      flex-direction: column;
      justify-content: space-evenly;
      align-items: baseline;
    }
    @media (max-width: 500px) {
      margin-top: 50px;
    }
  }

  #user-info p {
    font: var(--regular-12);
    color: var(--gray-1);
  }

  nav {
    margin-bottom: 0px;
  }

  p {
    font: var(--regular-16);
  }

  #logout-symbol {
    display: none;
    @media (max-width: 500px) {
      background-color: transparent;
      border: none;
      display: flex;
      position: absolute;
      top: 30px;
      left: 30px;
    }
  }
`;

export const HomeSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  margin-top: 40px;
  gap: 40px;
  height: 100vh;
  margin-bottom: 100px;
  width: 1000px;
  max-width: 100%;

  div {
    display: flex;
    flex-direction: column;
  }

  .small-container {
    flex-direction: row;
    justify-content: space-between;
    width: 450px;
  }

  ul {
    margin-top: 20px;
    width: 450px;

    background-color: var(--gray-3);
    border-radius: var(--radius);
    padding: 23px 26px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    max-width: 100%;
    height: 300px;
  }

  li {
    margin: 0 auto;
    display: flex;
    width: 100%;
    height: 49px;
    padding: 0px 13px;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--radius);
    text-transform: capitalize;
    background-color: var(--gray-4);
    cursor: pointer;
  }

  h3 {
    font: var(--bold-14);
  }

  #title {
    font: var(--bold-16);
  }

  button {
    width: 32px;
    height: 32px;
    background-color: var(--gray-3);
    border: none;
    border-radius: var(--radius);
    color: var(--gray-0);
    font-size: 22px;
  }

  .add-btn {
    outline: 1px solid var(--color-primary);
  }

  p {
    font: var(--regular-12);
    color: var(--gray-1);
  }

  .no-tech {
    margin: 0 auto;
    font-size: 14px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .small-container,
    ul,
    div {
      width: 90%;
      margin: 0 auto;
    }
    ul {
      margin-top: 10px;
    }
  }
`;

export const Nav = styled.nav`
  margin: 0 auto;
  margin-top: 48px;
  margin-bottom: 38px;
  height: 40px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--gray-3);
  padding-bottom: 50px;

  #logOut {
    padding: 5px 16px;
    width: fit-content;
    height: 32px;
    border-radius: var(--radius);
    background-color: var(--gray-3);
    color: var(--gray-0);
    font: var(--bold-12);
    border: none;
    outline: 1px solid var(--color-primary-negative);
  }

  #logOut:hover {
    background-color: var(--color-primary-negative);
  }

  @media (max-width: 500px) {
    flex-direction: column;
    border-bottom: none;
    figure {
      border-bottom: 1px solid var(--gray-3);
    }

    #logOut {
      display: none;
    }
  }
`;
