import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalWindowType } from './../model';

interface HamburgerMenuProps {
  openModalWindow: (modalWindowType: ModalWindowType) => void;
  selectMovie: () => void;
}

const HamburgerMenuWrapper = styled.div`
  width: 1rem;
  height: 1rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 10;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const HamburgerMenuItem = styled.div`
  width: 1rem;
  height: 0.15rem;
  border-radius: 10px;
  background-color: black;
  transform-origin: 1px;
  transition: all 0.3s linear;
`;

const EditDeleteMenu = styled.div`
  position: absolute;
  top: 0;
  background: whitesmoke;
  padding: 4px;
`;

const HamburgerMenu = (props: HamburgerMenuProps) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const onMenuItemClick = (type: ModalWindowType) => {
    props.selectMovie();
    props.openModalWindow(type);
  };

  return (
    <HamburgerMenuWrapper
      onClick={(event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        setIsMenuOpened(!isMenuOpened);
      }}
    >
      <HamburgerMenuItem />
      <HamburgerMenuItem />
      <HamburgerMenuItem />
      {isMenuOpened && (
        <EditDeleteMenu>
          <div onClick={() => onMenuItemClick(ModalWindowType.DeleteMovie)}>
            Delete
          </div>
          <div onClick={() => onMenuItemClick(ModalWindowType.EditMovie)}>
            Edit
          </div>
        </EditDeleteMenu>
      )}
    </HamburgerMenuWrapper>
  );
};

export default HamburgerMenu;
