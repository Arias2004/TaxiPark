import { UserNav } from "@/components/admin-panel/user-nav";


export function Navbar() {
  return (
    <header className="sticky top-0 z-10 w-full bg-[#161d26] shadow backdrop-blur">
      <div className="mx-4 text-white sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <h1 className="font-bold">Home</h1>
        </div>
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <UserNav />
        </div>
      </div>
    </header>
  );
}
