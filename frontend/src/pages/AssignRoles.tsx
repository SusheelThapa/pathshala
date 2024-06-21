import { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import axios from "axios";

const AssignRoles = () => {
  const [users, setUsers] = useState<{ username: string; role: string[] }[]>(
    []
  );

  useEffect(() => {
    // Fetch user data from the API
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/auth/users"
        );
        const { data } = response;
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Layout>
      <NavBar />
      <div className="container mx-auto my-12 p-4 py-8 w-11/12 bg-stone-100 shadow-lg px-10">
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
                      checked={(user.role || []).includes(role)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </Layout>
  );
};

export default AssignRoles;
