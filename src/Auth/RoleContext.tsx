import React from "react";

type RoleProviderProps = {
  children: React.ReactNode;
};

interface RoleContextValue {
  userRoles: string[];
  setUserRoles: (roles: string[]) => void;
}

export const RoleContext = React.createContext<RoleContextValue>({
  userRoles: [],
  setUserRoles: () => {},
});

export const RoleProvider: React.FC<RoleProviderProps> = ({ children }) => {
  const [userRoles, setUserRoles] = React.useState<string[]>([]);

  return (
    <RoleContext.Provider value={{ userRoles, setUserRoles }}>
      {children}
    </RoleContext.Provider>
  );
};
