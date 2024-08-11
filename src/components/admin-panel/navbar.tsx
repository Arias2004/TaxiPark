import { UserNav } from "@/components/admin-panel/user-nav";


export function Navbar() {
  return (
    <header className="sticky top-0 z-10 w-[1050px] bg-[#161d26] shadow backdrop-blur">
      <div className="mx-4 text-white px-8 flex h-14 items-center justify-between">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <h1 className="font-bold">Home</h1>
        </div>
          <UserNav />
      </div>
    </header>
  );
}
