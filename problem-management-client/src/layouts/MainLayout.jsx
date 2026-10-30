import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <section className="flex flex-col mx-auto min-h-screen  max-w-7xl">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="grow">
          <Outlet></Outlet>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </section>
    </div>
  );
};

export default MainLayout;
