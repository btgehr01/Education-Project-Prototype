import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import CircularLoader from "../Components/CircularLoader";
type Props = {
  component: React.FunctionComponent;
};

export const AuthenticationGuard = ({ component }: Props) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <CircularLoader />,
  });

  return <Component />;
};
