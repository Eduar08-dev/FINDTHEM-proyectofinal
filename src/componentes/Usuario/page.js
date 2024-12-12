"use client";

import { useState } from "react";
import { db, storage, auth } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const InfoUsuario = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [telefono, setTelefono] = useState("");
  const [sexo, setSexo] = useState("");
  const [foto, setFoto] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const handleCrearUsuario = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    if (!usuario || !nombre || !apellido || !correo || !contraseña || !sexo) {
      setSubmitMessage("Todos los campos son obligatorios.");
      setIsSubmitting(false);
      return;
    }

    if (contraseña !== confirmarContraseña) {
      setSubmitMessage("Las contraseñas no coinciden");
      setIsSubmitting(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, correo, contraseña);
      const user = userCredential.user;

      let fotoURL = "";
      if (foto) {
        const storageRef = ref(storage, `fotos_usuarios/${user.uid}`);
        await uploadBytes(storageRef, foto);
        fotoURL = await getDownloadURL(storageRef);
        await updateProfile(user, { photoURL: fotoURL });
      }

      await setDoc(doc(db, "usuarios", user.uid), {
        usuario,
        nombre,
        apellido,
        correo,
        telefono,
        sexo,
        fotoURL,
      });

      setSubmitMessage("Usuario creado con éxito");
      setUsuario("");
      setNombre("");
      setApellido("");
      setCorreo("");
      setContraseña("");
      setConfirmarContraseña("");
      setTelefono("");
      setSexo("");
      setFoto(null);
    } catch (error) {
      setSubmitMessage(`Error al crear el usuario: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleCrearUsuario} className="bg-white p-4 font-sans">
      <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dotted border-blue-600 p-4">
        <span className="mb-4 text-3xl font-bold text-blue-600">Información Usuario</span>
        <div className="w-full">
          <div className="grid grid-cols-1 gap-4 p-3 text-black sm:grid-cols-2 md:grid-cols-3">
            <InputField label="Nombre de usuario:" value={usuario} onChange={setUsuario} placeholder="daisyperez" />
            <InputField label="Nombre:" value={nombre} onChange={setNombre} placeholder="Daisy" />
            <InputField label="Apellido:" value={apellido} onChange={setApellido} placeholder="Perez" />
            <InputField label="Correo:" value={correo} onChange={setCorreo} placeholder="daisy@gmail.com" />
            <PasswordInput
              label="Contraseña:"
              value={contraseña}
              onChange={setContraseña}
              showPassword={showPassword}
              toggleShowPassword={handleTogglePassword}
            />
            <PasswordInput
              label="Repetir contraseña:"
              value={confirmarContraseña}
              onChange={setConfirmarContraseña}
              showPassword={showConfirmPassword}
              toggleShowPassword={handleToggleConfirmPassword}
            />
            <InputField label="Número de teléfono:" value={telefono} onChange={setTelefono} placeholder="+57 3001234567" />
            <SelectField label="Sexo:" value={sexo} onChange={setSexo} options={["Masculino", "Femenino"]} />
            <FileInput label="Foto de perfil:" onChange={setFoto} />
          </div>
          <div className="flex justify-end p-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn ${isSubmitting ? "bg-gray-300" : "bg-blue-500 text-white"} hover:bg-blue-400`}
            >
              {isSubmitting ? "Enviando..." : "Crear usuario"}
            </button>
          </div>
          {submitMessage && (
            <div
              className={`mt-4 p-2 text-center ${
                submitMessage.includes("éxito") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}
            >
              {submitMessage}
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

const InputField = ({ label, value, onChange, placeholder }) => (
  <div className="flex flex-col">
    <label className="text-blue-600">{label}</label>
    <input
      type="text"
      className="input input-bordered h-12 w-full bg-gray-200"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

const PasswordInput = ({ label, value, onChange, showPassword, toggleShowPassword }) => (
  <div className="flex flex-col">
    <label className="text-blue-600">{label}</label>
    <div className="relative w-full">
      <input
        type={showPassword ? "text" : "password"}
        className="input input-bordered h-12 w-full bg-gray-200"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        type="button"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-600"
        onClick={toggleShowPassword}
      >
        {showPassword ? "Ocultar" : "Mostrar"}
      </button>
    </div>
  </div>
);

const SelectField = ({ label, value, onChange, options }) => (
  <div className="flex flex-col">
    <label className="text-blue-600">{label}</label>
    <select
      className="select select-bordered h-12 w-full bg-gray-200"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="" disabled>
        Seleccione
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const FileInput = ({ label, onChange }) => (
  <div className="flex flex-col">
    <label className="text-blue-600">{label}</label>
    <input
      type="file"
      className="file-input file-input-bordered h-12 w-full bg-gray-200"
      accept="image/*"
      onChange={(e) => onChange(e.target.files[0])}
    />
  </div>
);

export default InfoUsuario;
