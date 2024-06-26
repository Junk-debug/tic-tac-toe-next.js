export const ResetButton = ({ onClick }) => {
  return (
    <button
      className="cursor-pointer bg-transparent border border-gray-400 px-1 py-3 rounded-md"
      onClick={onClick}
    >
      Сбросить
    </button>
  );
};
