import { useData } from "../context/DataContext";
import { useEffect } from "react";

const DataList = () => {
  const { data } = useData();

  // Logging setiap kali data berubah (Updating)
  useEffect(() => {
    console.log("Data diperbarui:", data);
  }, [data]);

  return (
    <div>
      <h2>Daftar Pengguna</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
