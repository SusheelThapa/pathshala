import { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const AssignRoles = () => {
  const [users, setUsers] = useState<{ username: string }[]>([]);
  const [userRoles, setUserRoles] = useState<{ [key: string]: string[] }>({});

  useEffect(() => {
    // Fetch user data from the API
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/auth/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleCheckboxChange = (username: string, role: string) => {
    setUserRoles((prevRoles) => {
      const userRoles = prevRoles[username] || [];
      if (userRoles.includes(role)) {
        return {
          ...prevRoles,
          [username]: userRoles.filter((r) => r !== role),
        };
      } else {
        return {
          ...prevRoles,
          [username]: [...userRoles, role],
        };
      }
    });
  };

  const handleUpdateRoles = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/auth/update-roles",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userRoles),
        }
      );

      if (response.ok) {
        alert("Roles updated successfully");
      } else {
        alert("Failed to update roles");
      }
    } catch (error) {
      console.error("Error updating roles:", error);
      alert("An error occurred while updating roles");
    }
  };

  return (
    <Layout>
      <NavBar />
      <div className="container mx-auto my-12 p-4 py-8 w-11/12 bg-stone-100 shadow-lg px-10">
        <h2 className="text-4xl font-semibold text-center mb-8 text-[#f96a46]">
          Assign Roles
        </h2>
        <table className="w-full bg-white rounded-xl overflow-hidden">
          <thead className="bg-[#f96a46] py-6 text-white text-lg">
            <tr>
              <th className="py-3 px-4">Username</th>
              <th className="py-3 px-4">Admin</th>
              <th className="py-3 px-4">Delta-group</th>
              <th className="py-3 px-4">Beta-group</th>
              <th className="py-3 px-4">Gaming</th>
              <th className="py-3 px-4">Kontribution</th>
              <th className="py-3 px-4">Hostel</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className="bg-white border-b-2 hover:bg-gray-200 transition duration-150"
              >
                <td className="py-4 px-4 text-left text-lg">{user.username}</td>
                {[
                  "admin",
                  "delta-group",
                  "beta-group",
                  "gaming",
                  "kontribution",
                  "hostel",
                ].map((role) => (
                  <td key={role} className="py-4 px-4 text-center">
                    <input
                      type="checkbox"
                      name={`role_${role}_${user.username}`}
                      className="w-4 h-4 border border-slate-300 rounded-sm accent-orange-600"
                      checked={(userRoles[user.username] || []).includes(role)}
                      onChange={() => handleCheckboxChange(user.username, role)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center mt-8">
          <button
            onClick={handleUpdateRoles}
            className="bg-[#f96a46] text-white py-2 px-6 rounded-lg hover:bg-[#e55b35] transition duration-150"
          >
            Update Roles
          </button>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default AssignRoles;
