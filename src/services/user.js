import axios from 'axios';
import { loader } from 'graphql.macro';

const queryCreateUserMutation = loader('./mutations/createUser.graphql');

const settings = {
  headers: {
    Authorization: `Basic ${btoa(
      `${process.env.REACT_APP_SERVICE_USERNAME}:${process.env.REACT_APP_SERVICE_PASSWORD}`
    )}`,
  },
};

/* eslint-disable-next-line import/prefer-default-export */
export const createUser = async (
  email,
  password
) => (await axios.post(
      `${process.env.REACT_APP_SERVICE_URL}/graphql`,
      {
        query: queryCreateUserMutation.loc.source.body,
        variables: {
          email,
          password,
        },
      },
      settings
    )
  ).data.data.createUser;