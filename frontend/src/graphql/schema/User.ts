import gql from "graphql-tag";

export const USER_LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      accessToken
    }
  }
`;

export const USER_SIGNUP = gql`
  mutation signUp(
    $email: String!
    $nickname: String!
    $password: String!
    $birthdate: String!
  ) {
    signup(
      data: {
        email: $email
        nickname: $nickname
        password: $password
        birthdate: $birthdate
      }
    ) {
      accessToken
    }
  }
`;
