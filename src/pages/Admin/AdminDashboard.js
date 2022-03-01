import React from "react";
import AdminHeader from "../../admin/AdminHeader/AdminHeader";
import AdminSidebar from "../../admin/AdminSidebar/AdminSidebar";
import AdminContent from "../../admin/AdminContent/AdminContent";
import AdminFooter from "../../admin/AdminFooter/AdminFooter.js";
import AdminTable from "../../admin/Table/AdminTable.js";

function AdminDashboard() {
  return (
    <div>
      <AdminHeader />
      <div id="layoutSidenav">
        <AdminSidebar />

        <div id="layoutSidenav_content">
          <main>
            <AdminContent />
            <AdminTable />
          </main>
        </div>
      </div>
      <AdminFooter />
    </div>
  );
}

export default AdminDashboard;
