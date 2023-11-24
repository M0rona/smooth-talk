import { useContext, createContext, useState, ReactNode } from "react";

interface UserContextTypes {
  userName: string;
  setUserName: (userName: string) => void;
}

const UserContext = createContext<UserContextTypes | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userName, setUserName] = useState<string>("");

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error(
      "useCharacterContext must be used within a CharacterProvider",
    );
  }

  return context;
};
