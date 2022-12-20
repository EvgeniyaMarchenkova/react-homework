import React from 'react';
import styled from 'styled-components';
import { ModalWindowType } from './../model/modal-window';
import AddUpdateMovie from './AddMovie';
import DeleteMovie from './DeleteMovie';
import {
  useDeleteMovieMutation,
  useEditMovieMutation,
  useAddMovieMutation,
} from '../query/movies';
import { selectSelectedMovie } from '../store/moviesSlice';
import { useAppSelector } from '../store/hooks';

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
  const selectedMovieId = useAppSelector(selectSelectedMovie).id;
  const [deleteTask]: any = useDeleteMovieMutation();
  const [editTask]: any = useEditMovieMutation();
  const [addMovie]: any = useAddMovieMutation();

  const onAddMovie = (isDataUpdated: boolean) => {
    console.log('ModalWindowOpener', isDataUpdated);
    addMovie();
    props.onCloseWindow(isDataUpdated);
  };

  const onUpdateMovie = (isDataUpdated: boolean) => {
    console.log('ModalWindowOpener', isDataUpdated);
    editTask(selectedMovieId);
    props.onCloseWindow(isDataUpdated);
  };

  const onDeleteMovie = (isDataUpdated: boolean) => {
    console.log('ModalWindowOpener', isDataUpdated);
    deleteTask(selectedMovieId);
    props.onCloseWindow(isDataUpdated);
  };

  const onClose = () => {
    props.onCloseWindow(false);
  };

  const getModalWindow = () => {
    switch (props.type) {
      case ModalWindowType.AddMovie:
        return <AddUpdateMovie onAddMovie={onAddMovie} />;
      case ModalWindowType.EditMovie:
        return <AddUpdateMovie onUpdateMovie={onUpdateMovie} />;
      case ModalWindowType.DeleteMovie:
        return <DeleteMovie onDeleteMovie={onDeleteMovie} />;
    }
  };

  return (
    <ModalWrapper>
      <ModalContent>
        {getModalWindow()}
        <button onClick={onClose}>Close window</button>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ModalWindowOpener;
