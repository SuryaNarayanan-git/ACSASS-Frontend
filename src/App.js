import React, { useEffect, useState } from "react";
import userApi from "./api/userApi";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import Logo from "../src/assets/logo.png";
import "./App.css"; // Add a CSS file for additional styling

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await userApi.get("/");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const addUser = async (user) => {
    try {
      const response = await userApi.post("/", user);
      setUsers([...users, response.data]);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const updateUser = async (user) => {
    try {
      const response = await userApi.put(`/${editingUser._id}`, user);
      setUsers(
        users.map((u) => (u._id === editingUser._id ? response.data : u))
      );
      setEditingUser(null);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await userApi.delete(`/${id}`);
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleFormSubmit = (user) => {
    if (editingUser) {
      updateUser(user);
    } else {
      addUser(user);
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const styles = {
    appContainer: {
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      textAlign: "center",
    },
    title: {
      fontSize: "2rem",
      color: "#333",
      marginBottom: "20px",
    },
    logo: {
      maxWidth: "50px",
      marginBottom: "15px",
    },
  };

  return (
    <div className="App" style={styles.appContainer}>
      <img src={Logo} alt="Company Logo" style={styles.logo} />
      <h1 style={styles.title}>ACSASS - Employee Management</h1>
      <UserForm onSubmit={handleFormSubmit} initialData={editingUser} />
      <UserList users={users} onEdit={handleEditUser} onDelete={deleteUser} />
      <footer className="footer">
        This project was created according to the specifications provided by
        ACSASS Company and is intended solely for their use.
      </footer>
    </div>
  );
};

export default App;
