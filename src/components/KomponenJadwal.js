import { useJadwal } from "../context/JadwalContext";
import { useEffect, useState } from "react";

const KomponenJadwal = ({ jdwl }) => {
  const { hapusJadwal, editJadwal } = useJadwal();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTugas, setEditedTugas] = useState(jdwl.tugas);

  useEffect(() => {
    console.log(`Tugas ditambahkan: ${jdwl.tugas}`);
    return () => console.log(`Tugas dihapus: ${jdwl.tugas}`);
  }, [jdwl.tugas]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editJadwal(jdwl.id, editedTugas);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <input 
          type="text" 
          value={editedTugas} 
          onChange={(e) => setEditedTugas(e.target.value)} 
        />
      ) : (
        <span>{jdwl.tugas}</span>
      )}
      
      {isEditing ? (
        <button onClick={handleSave}>Simpan</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
      
      <button onClick={() => hapusJadwal(jdwl.id)}>Hapus</button>
    </li>
  );
};

export default KomponenJadwal;
