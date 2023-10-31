import { useContext, createContext, useState, ReactNode } from "react";

interface UserContextTypes {
  userName: string;
  setUserName: (userName: string) => void;
}

const UserContext = createContext<UserContextTypes | null>(null);

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

  if (context === undefined) {
    throw new Error(
      "useCharacterContext must be used within a CharacterProvider",
    );
  }

  return context;
};
