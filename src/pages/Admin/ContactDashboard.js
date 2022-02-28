import React from "react";
import AdminHeader from "../../admin/AdminHeader/AdminHeader";
import AdminSidebar from "../../admin/AdminSidebar/AdminSidebar";
import ContactContent from "../../admin/ContactContent/ContactContent";
import AdminFooter from "../../admin/AdminFooter/AdminFooter.js";
// import "./css/admin-styles.css";
// import "./js/scripts.js";
// import "./js/datatables-simple-demo.js";

function AdminDashboard() {
  return (
    <div>
      <AdminHeader />
      <div id="layoutSidenav">
        <AdminSidebar />

        <div id="layoutSidenav_content">
          <main>
            <ContactContent />
          </main>
        </div>
      </div>
      <AdminFooter />
    </div>
  );
}

export default AdminDashboard;
