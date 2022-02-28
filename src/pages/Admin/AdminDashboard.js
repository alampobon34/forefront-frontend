import React from "react";
import AdminHeader from "../../admin/AdminHeader/AdminHeader";
import AdminSidebar from "../../admin/AdminSidebar/AdminSidebar";
import AdminContent from "../../admin/AdminContent/AdminContent";
import "./css/admin-styles.css";
import "./js/scripts.js";

import "./js/datatables-simple-demo.js";

function AdminDashboard() {
  return (
    <div>
      <AdminHeader />
      <div id="layoutSidenav">
        <AdminSidebar />
        <AdminContent />
      </div>
    </div>
  );
}

export default AdminDashboard;
