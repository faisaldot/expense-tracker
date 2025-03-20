import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: Navbar,
});

function Navbar() {
  return (
    <>
      <div className="p-3 flex gap-3">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/expenses" className="[&.active]:font-bold">
          Expenses
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
}
