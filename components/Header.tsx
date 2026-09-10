import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Morrison Eli</h1>

        <NavLinks />
      </div>
    </header>
  );
}
