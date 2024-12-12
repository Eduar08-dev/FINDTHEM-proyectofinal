import React from "react";

const BotonLogin = () => {

    return (
        <dialog id="my_modal_2" className="modal backdrop-blur-lg">
        <div className="modal-box flex flex-col items-center justify-center overflow-hidden bg-Azul-Fuerte">
          <AnimatePresence mode="wait">
            {isLoginView ? (
              <motion.div
                key="login"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <h3 className="mb-4 text-center text-lg font-bold text-white">
                  Iniciar sesión
                </h3>
                <form
                  onSubmit={handleLogin}
                  className="flex w-full flex-col items-center"
                >
                  <label className="input input-bordered my-2 flex w-72 items-center gap-3 bg-white text-Azul-Fuerte">
                    <FaEnvelope />
                    <input
                      type="email"
                      className="grow"
                      placeholder="Correo electrónico"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                    />
                  </label>
                  <label
                    htmlFor="loginPassword"
                    className="input input-bordered my-2 flex w-72 items-center gap-3 bg-white text-Azul-Fuerte"
                  >
                    <FaKey />
                    <input
                      type={showPassword ? "text" : "password"}
                      className="grow"
                      id="loginPassword"
                      placeholder="**********"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                    />
                    <input
                      className="flex"
                      type="checkbox"
                      id="showPassword"
                      checked={showPassword}
                      onChange={handleToggle}
                    />
                  </label>
                  <Link href="/">
                    <span className="my-2 hover:underline">
                      ¿Has olvidado la contraseña?
                    </span>
                  </Link>
                  <button
                    type="submit"
                    className="btn my-2 w-72 bg-Azul-Suave text-white hover:bg-Azul-Mediano"
                  >
                    Ingresar
                  </button>
                  <div className="divider divider-neutral">o</div>
                  <button
                    type="button"
                    className="btn my-2 w-72 bg-Azul-Suave text-white hover:bg-Azul-Mediano"
                    onClick={toggleView}
                  >
                    Crear cuenta
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="register"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <h3 className="mb-4 text-center text-lg font-bold text-white">
                  Crear cuenta
                </h3>
                <form
                  onSubmit={handleRegister}
                  className="flex w-full flex-col items-center"
                >
                  <label className="input input-bordered my-2 flex w-72 items-center gap-3 bg-white text-Azul-Fuerte">
                    <FaUser />
                    <input
                      type="text"
                      className="grow"
                      placeholder="Usuario"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </label>
                  <label className="input input-bordered my-2 flex w-72 items-center gap-3 bg-white text-Azul-Fuerte">
                    <FaEnvelope />
                    <input
                      type="email"
                      className="grow"
                      placeholder="Correo electrónico"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                  <label
                    htmlFor="password"
                    className="input input-bordered my-2 flex w-72 items-center gap-3 bg-white text-Azul-Fuerte"
                  >
                    <FaKey />
                    <input
                      type={showPassword ? "text" : "password"}
                      className="grow"
                      id="password"
                      placeholder="*******"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                      className="flex"
                      type="checkbox"
                      id="showPassword"
                      checked={showPassword}
                      onChange={handleToggle}
                    />
                  </label>
                  <label
                    htmlFor="confirmPassword"
                    className="input input-bordered my-2 flex w-72 items-center gap-3 bg-white text-Azul-Fuerte"
                  >
                    <FaKey />
                    <input
                      type={showPassword ? "text" : "password"}
                      className="grow"
                      id="confirmPassword"
                      placeholder="Confirmar contraseña"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <input
                      className="flex"
                      type="checkbox"
                      id="showPassword"
                      checked={showPassword}
                      onChange={handleToggle}
                    />
                  </label>
                  <button
                    type="submit"
                    className="btn my-2 w-72 bg-Azul-Suave text-white hover:bg-Azul-Mediano"
                  >
                    Registrar
                  </button>
                  <div className="divider divider-neutral">o</div>
                  <button
                    type="button"
                    className="btn my-2 w-72 bg-Azul-Suave text-white hover:bg-Azul-Mediano"
                    onClick={toggleView}
                  >
                    Iniciar sesión
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        </dialog>
    );
};

export default BotonLogin;