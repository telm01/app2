import { useState } from "react";
import "../csss/Admin.css";


type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
};

const Admin = () => {
  const [activePage, setActivePage] = useState("Dashboard");

  const users: User[] = [
    {
      id: 1,
      name: "Admin User",
      email: "admin@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "John Smith",
      email: "john@example.com",
      role: "User",
      status: "Active",
    },
    {
      id: 3,
      name: "Sarah Lee",
      email: "sarah@example.com",
      role: "User",
      status: "Inactive",
    },
  ];

  return (
    <div className="admin-page">

      {/* Sidebar */}
      <aside className="admin-sidebar">

        <div className="admin-logo">
          <h2>Admin Panel</h2>
        </div>

        <nav className="admin-nav">

          <button
            className={activePage === "Dashboard" ? "active" : ""}
            onClick={() => setActivePage("Dashboard")}
          >
            📊 Dashboard
          </button>

          <button
            className={activePage === "Products" ? "active" : ""}
            onClick={() => setActivePage("Products")}
          >
            📦 Products
          </button>

          <button
            className={activePage === "Users" ? "active" : ""}
            onClick={() => setActivePage("Users")}
          >
            👥 Users
          </button>

          <button
            className={activePage === "Orders" ? "active" : ""}
            onClick={() => setActivePage("Orders")}
          >
            🛒 Orders
          </button>

          <button
            className={activePage === "Settings" ? "active" : ""}
            onClick={() => setActivePage("Settings")}
          >
            ⚙ Settings
          </button>

        </nav>

        <button className="admin-logout">
          Logout
        </button>

      </aside>

      {/* Main content */}
      <main className="admin-main">

        {/* Compass */}
        <div className="Compass">
          <p>/Admin/{activePage}</p>
        </div>

        {/* Dashboard */}
        {activePage === "Dashboard" && (
          <div className="admin-content">

            <h1>Dashboard</h1>

            <p className="admin-description">
              Welcome to your administration panel. Manage your
              products, users, orders, and website settings.
            </p>

            <div className="admin-cards">

              <div className="admin-card">
                <div className="admin-card-icon">👥</div>
                <h3>Total Users</h3>
                <strong>1,245</strong>
                <p>Registered users</p>
              </div>

              <div className="admin-card">
                <div className="admin-card-icon">📦</div>
                <h3>Products</h3>
                <strong>328</strong>
                <p>Available products</p>
              </div>

              <div className="admin-card">
                <div className="admin-card-icon">🛒</div>
                <h3>Orders</h3>
                <strong>892</strong>
                <p>Total orders</p>
              </div>

              <div className="admin-card">
                <div className="admin-card-icon">💰</div>
                <h3>Revenue</h3>
                <strong>$24,680</strong>
                <p>Total revenue</p>
              </div>

            </div>

            <section className="admin-section">

              <h2>Recent Users</h2>

              <div className="admin-table">

                <div className="table-header">
                  <span>Name</span>
                  <span>Email</span>
                  <span>Role</span>
                  <span>Status</span>
                </div>

                {users.map((user) => (
                  <div className="table-row" key={user.id}>

                    <span>{user.name}</span>

                    <span>{user.email}</span>

                    <span>{user.role}</span>

                    <span
                      className={
                        user.status === "Active"
                          ? "status active-status"
                          : "status inactive-status"
                      }
                    >
                      {user.status}
                    </span>

                  </div>
                ))}

              </div>

            </section>

          </div>
        )}

        {/* Products */}
        {activePage === "Products" && (
          <div className="admin-content">

            <div className="admin-title-row">
              <div>
                <h1>Products</h1>
                <p>Manage your medical products.</p>
              </div>

              <button className="add-button">
                + Add Product
              </button>
            </div>

            <div className="product-admin-grid">

              <div className="product-admin-card">
                <img
                  src="KitsForRespons.jpg"
                  alt="Laboratory analyzers"
                />

                <h2>Laboratory analyzers</h2>

                <p>
                  Laboratory analyzers, testing devices,
                  and precision equipment.
                </p>

                <button className="edit-button">
                  Edit
                </button>
              </div>

              <div className="product-admin-card">
                <img
                  src="BioBaseRefrigerator.jpg"
                  alt="Laboratory equipment"
                />

                <h2>Laboratory equipment</h2>

                <p>
                  Refrigerators, incubators, and controlled
                  storage solutions.
                </p>

                <button className="edit-button">
                  Edit
                </button>
              </div>

              <div className="product-admin-card">
                <img
                  src="D3.jpg"
                  alt="Medicine and consumables"
                />

                <h2>Medicine & Consumables</h2>

                <p>
                  Certified pharmaceuticals and everyday
                  medical supplies.
                </p>

                <button className="edit-button">
                  Edit
                </button>
              </div>

            </div>

          </div>
        )}

        {/* Users */}
        {activePage === "Users" && (
          <div className="admin-content">

            <div className="admin-title-row">

              <div>
                <h1>Users</h1>
                <p>Manage registered users.</p>
              </div>

              <button className="add-button">
                + Add User
              </button>

            </div>

            <section className="admin-section">

              <div className="admin-table">

                <div className="table-header">
                  <span>Name</span>
                  <span>Email</span>
                  <span>Role</span>
                  <span>Status</span>
                </div>

                {users.map((user) => (
                  <div className="table-row" key={user.id}>

                    <span>{user.name}</span>

                    <span>{user.email}</span>

                    <span>{user.role}</span>

                    <span
                      className={
                        user.status === "Active"
                          ? "status active-status"
                          : "status inactive-status"
                      }
                    >
                      {user.status}
                    </span>

                  </div>
                ))}

              </div>

            </section>

          </div>
        )}

        {/* Orders */}
        {activePage === "Orders" && (
          <div className="admin-content">

            <h1>Orders</h1>

            <p className="admin-description">
              Manage customer orders and order status.
            </p>

            <div className="empty-admin">

              <div>🛒</div>

              <h2>No orders to display</h2>

              <p>
                Orders will appear here when customers
                make purchases.
              </p>

            </div>

          </div>
        )}

        {/* Settings */}
        {activePage === "Settings" && (
          <div className="admin-content">

            <h1>Settings</h1>

            <p className="admin-description">
              Manage your website settings.
            </p>

            <div className="settings-box">

              <label>
                Website Name
              </label>

              <input
                type="text"
                defaultValue="Medical Equipment"
              />

              <label>
                Admin Email
              </label>

              <input
                type="email"
                defaultValue="admin@example.com"
              />

              <button className="save-button">
                Save Changes
              </button>

            </div>

          </div>
        )}

      </main>

    </div>
  );
};

export default Admin;
