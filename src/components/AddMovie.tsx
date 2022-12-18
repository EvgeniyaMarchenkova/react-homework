import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { MovieData } from '../model';
import { selectSelectedMovie } from '../store/moviesSlice';
import { useAppSelector } from '../store/hooks';

interface AddUpdateMovieProps {
  onAddMovie?: (isDataUpdated: boolean, data: MovieData) => void;
  onUpdateMovie?: (isDataUpdated: boolean, data: MovieData) => void;
}

const AddUpdateMovieWrapper = styled.div``;

const AddUpdateMovie = (props: AddUpdateMovieProps) => {
  const selectedMovie = useAppSelector(selectSelectedMovie);

  const SignupSchema = Yup.object().shape({
    title: Yup.string().required('Required'),
    // releaseDate: Yup.string(),
    // movieUrl: Yup.string().email('Invalid email').required('Required'),
    // rating: Yup.number(),
    // genres: Yup.string().required('Required'),
    runtime: Yup.number().required('Required'),
    overview: Yup.string().required('Required'),
    poster_path: Yup.string().required('Required'),
  });

  const onUpdateMovie = (data: MovieData) => {
    props.onUpdateMovie(true, data);
  };

  const onAddMovie = (data: MovieData) => {
    props.onAddMovie(true, data);
  };

  return (
    <AddUpdateMovieWrapper>
      <h3>{props.onUpdateMovie ? 'UPDATE MOVIE' : 'ADD MOVIE'}</h3>

      <Formik
        initialValues={
          selectedMovie
            ? {
              title: selectedMovie.title,
              overview: selectedMovie.overview,
              poster_path: selectedMovie.poster_path,
              runtime: selectedMovie.runtime,
            }
            : {
              title: '',
              overview: '',
              poster_path: '',
              runtime: 0,
            }
        }
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          if (props.onUpdateMovie) {
            onUpdateMovie(values);
          } else {
            onAddMovie(values);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <span>Title</span>
            <Field name="title" />
            {errors.title && touched.title ? <div>{errors.title}</div> : null}
            <span>Movie URL</span>
            <Field name="poster_path" />
            {errors.poster_path && touched.poster_path ? (
              <div>{errors.poster_path}</div>
            ) : null}
            <span>Overview</span>
            <Field name="overview" />
            {errors.overview && touched.overview ? (
              <div>{errors.overview}</div>
            ) : null}
            <span>Runtime</span>
            <Field name="runtime" />
            {errors.runtime && touched.runtime ? (
              <div>{errors.runtime}</div>
            ) : null}
            <button type="submit">
              {props.onUpdateMovie ? 'UPDATE' : 'ADD'}
            </button>
          </Form>
        )}
      </Formik>
    </AddUpdateMovieWrapper>
  );
};

export default AddUpdateMovie;
