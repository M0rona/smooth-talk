export const Item = ({ text }: { text: string }) => {
  return (
    <div className="z-10 flex w-1/2 justify-center py-5">
      <span className="text-lg font-semibold">{text}</span>
    </div>
  );
};
