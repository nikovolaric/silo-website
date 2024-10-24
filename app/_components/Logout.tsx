"use client";

import { logout } from "../_lib/actions";

function Logout() {
  return (
    <form action={logout} className="mt-6 text-right">
      <button className="bg-primary uppercase py-1.5 px-3 rounded text-neutral transition-colors duration-200 hover:bg-accent">
        Logout
      </button>
    </form>
  );
}

export default Logout;
