import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <>
      <section className="main-content">
          <Outlet/>
      </section>
    </>
  )
}
