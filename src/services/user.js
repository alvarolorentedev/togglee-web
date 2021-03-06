import axios from 'axios';
import { loader } from 'graphql.macro';

const mutationCreateUser = loader('./mutations/createUser.graphql');
const mutationLoginUser = loader('./mutations/loginUser.graphql');
const queryUser = loader('./querys/user.graphql');

const settings = {
  headers: {
    Authorization: `Basic ${btoa(
      `${process.env.REACT_APP_SERVICE_USERNAME}:${process.env.REACT_APP_SERVICE_PASSWORD}`
    )}`,
  },
};

export const createUser = async (
  email,
  password
) => (await axios.post(
      `${process.env.REACT_APP_SERVICE_URL}/graphql`,
      {
        query: mutationCreateUser.loc.source.body,
        variables: {
          email,
          password,
        },
      },
      settings
    )
  ).data.data.createUser;
  
export const loginUser = async (
  email,
  password
) => (await axios.post(
      `${process.env.REACT_APP_SERVICE_URL}/graphql`,
      {
        query: mutationLoginUser.loc.source.body,
        variables: {
          email,
          password,
        },
      },
      settings
    )
  ).data.data.validateCredentialsUser;

export const getUser = async (
  id
) => (await axios.post(
      `${process.env.REACT_APP_SERVICE_URL}/graphql`,
      {
        query: queryUser.loc.source.body,
        variables: {
          id,
        },
      },
      settings
    )
  ).data.data.user;