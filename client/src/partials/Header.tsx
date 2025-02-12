interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <div>
      <header className="bg-emerald-800 shadow-lg">
        <div className="px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white">Bienvenido!</h2>
          <div className="flex gap-2"></div>
        </div>
      </header>
    </div>
  );
};
