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
import { MovieData } from '../model';

interface ModalWindowOpenerProps {
  movie: MovieData;
  type: ModalWindowType;
  onCloseWindow: (isDataUpdated: boolean) => void;
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
  height: 330px;
  width: 400px;
  top: 200px;
  position: relative;
`;

const ModalWindowOpener = (props: ModalWindowOpenerProps) => {
  const [deleteMovie]: any = useDeleteMovieMutation();
  const [editMovie]: any = useEditMovieMutation();
  const [addMovie]: any = useAddMovieMutation();

  const onAddMovie = (isDataUpdated: boolean, data: MovieData) => {
    addMovie(data);
    props.onCloseWindow(isDataUpdated);
  };

  const onUpdateMovie = (isDataUpdated: boolean, data: MovieData) => {
    editMovie({ ...props.movie, ...data });
    props.onCloseWindow(isDataUpdated);
  };

  const onDeleteMovie = (isDataUpdated: boolean) => {
    deleteMovie(props.movie.id);
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
