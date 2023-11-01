interface ItemSwitchProps {
  text: string;
  state: {
    isCreateRoom: boolean;
    setIsCreateRoom: (isCreateRoom: boolean) => void;
  };
  set: boolean;
}

export const ItemSwitch = ({ text, state, set }: ItemSwitchProps) => {
  const { isCreateRoom, setIsCreateRoom } = state;

  return (
    <div
      className={`z-10 flex w-1/2 items-center justify-center rounded-2xl py-5 transition-colors ${
        isCreateRoom !== set
          ? "cursor-pointer hover:bg-white/10"
          : "cursor-default"
      }`}
      onClick={() => setIsCreateRoom(set)}
    >
      <span className="text-base font-semibold">{text}</span>
    </div>
  );
};
