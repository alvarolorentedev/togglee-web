import axios from 'axios';
import { loader } from 'graphql.macro';

const mutationUpsertProject = loader('./mutations/upsertProject.graphql');

const settings = {
  headers: {
    Authorization: `Basic ${btoa(
      `${process.env.REACT_APP_SERVICE_USERNAME}:${process.env.REACT_APP_SERVICE_PASSWORD}`
    )}`,
  },
};

export const upsertProject = async (
  owner,
  name,
  toggles,
) => {
  return (await axios.post(
      `${process.env.REACT_APP_SERVICE_URL}/graphql`,
      {
        query: mutationUpsertProject.loc.source.body,
        variables: {
            owner,
            name,
            toggles,
        },
      },
      settings
    )
  ).data.data.upsertProject;
    }
