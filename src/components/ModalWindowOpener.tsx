import React from 'react';
import styled from 'styled-components';
import { ModalWindowType } from './../model/modal-window';
import AddUpdateMovie from './AddMovie';
import DeleteMovie from './DeleteMovie';

interface ModalWindowOpenerProps {
  type: ModalWindowType;
  onCloseWindow: any;
  movieHandlers: {
    delete: Function;
    edit: Function;
    add: Function;
  };
}

export const ModalWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  text-align: center;
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

export const ModalContent = styled.div`
  background: gray;
  height: 180px;
  width: 200px;
  top: 200px;
  position: relative;
`;

const ModalWindowOpener = (props: ModalWindowOpenerProps) => {
  const onAddMovie = () => {
    props.movieHandlers.add();
    props.onCloseWindow();
  };

  const onUpdateMovie = () => {
    props.movieHandlers.edit();
    props.onCloseWindow();
  };

  const onDeleteMovie = () => {
    props.movieHandlers.delete();
    props.onCloseWindow();
  };

  return (
    <ModalWrapper>
      <ModalContent>
        {(props.type === ModalWindowType.AddMovie && (
          <AddUpdateMovie onAddMovie={onAddMovie} />
        )) ||
          (props.type === ModalWindowType.EditMovie && (
            <AddUpdateMovie onUpdateMovie={onUpdateMovie} />
          )) ||
          (props.type === ModalWindowType.DeleteMovie && (
            <DeleteMovie onDeleteMovie={onDeleteMovie} />
          ))}
        <button onClick={props.onCloseWindow}>Close window</button>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ModalWindowOpener;
