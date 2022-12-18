import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { MovieData } from '../model';
import { selectSelectedMovie } from '../store/moviesSlice';
import { useAppSelector } from '../store/hooks';
import { GENRES } from './NavBar';

interface AddUpdateMovieProps {
  onAddMovie?: (isDataUpdated: boolean, data: MovieData) => void;
  onUpdateMovie?: (isDataUpdated: boolean, data: MovieData) => void;
}

const AddUpdateMovieWrapper = styled.div`
  padding: 10px;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ErrorMessageWrapper = styled.span`
  color: red;
`;

const AddUpdateMovie = (props: AddUpdateMovieProps) => {
  const selectedMovie = useAppSelector(selectSelectedMovie);

  const SignupSchema = Yup.object().shape({
    title: Yup.string().required('Required'),
    release_date: Yup.string()
      .required('Required')
      .matches(/\d{4}-\d{2}-\d{2}/, 'The correct format is 2022-12-12'),
    rating: Yup.number(),
    genres: Yup.array().of(Yup.string()).min(1, 'Required'),
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
              release_date: selectedMovie.release_date,
              vote_average: selectedMovie.vote_average,
              genres: selectedMovie.genres,
              overview: selectedMovie.overview,
              poster_path: selectedMovie.poster_path,
              runtime: selectedMovie.runtime,
            }
            : {
              title: '',
              release_date: '',
              vote_average: 0,
              genres: [],
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
        {({ values, errors, touched }) => (
          <Form>
            <ItemWrapper>
              <span>Title</span>
              <div>
                {errors.title && touched.title ? (
                  <ErrorMessageWrapper>{errors.title}</ErrorMessageWrapper>
                ) : null}
                <Field name="title" />
              </div>
            </ItemWrapper>

            <ItemWrapper>
              <span>Release Date</span>
              <div>
                {errors.release_date && touched.release_date ? (
                  <ErrorMessageWrapper>
                    {errors.release_date}
                  </ErrorMessageWrapper>
                ) : null}
                <Field name="release_date" />
              </div>
            </ItemWrapper>

            <ItemWrapper>
              <span>Rating</span>
              <div>
                {errors.vote_average && touched.vote_average ? (
                  <ErrorMessageWrapper>
                    {errors.vote_average}
                  </ErrorMessageWrapper>
                ) : null}
                <Field name="vote_average" />
              </div>
            </ItemWrapper>

            <ItemWrapper>
              <span>Movie URL</span>
              <div>
                {errors.poster_path && touched.poster_path ? (
                  <ErrorMessageWrapper>
                    {errors.poster_path}
                  </ErrorMessageWrapper>
                ) : null}
                <Field name="poster_path" />
              </div>
            </ItemWrapper>

            <ItemWrapper>
              <span>Overview</span>
              <div>
                {errors.overview && touched.overview ? (
                  <ErrorMessageWrapper>{errors.overview}</ErrorMessageWrapper>
                ) : null}
                <Field name="overview" />
              </div>
            </ItemWrapper>

            <ItemWrapper>
              <span>Runtime</span>
              <div>
                {errors.runtime && touched.runtime ? (
                  <ErrorMessageWrapper>{errors.runtime}</ErrorMessageWrapper>
                ) : null}
                <Field name="runtime" />
              </div>
            </ItemWrapper>

            {errors.genres && touched.genres ? (
              <ErrorMessageWrapper>{errors.genres}</ErrorMessageWrapper>
            ) : null}
            <div role="group" aria-labelledby="checkbox-group">
              {GENRES.map((genre) => (
                <label key={genre}>
                  <Field
                    type="checkbox"
                    name="genres"
                    value={genre}
                    checked={values.genres.includes(genre)}
                  />
                  {genre}
                </label>
              ))}
            </div>
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
