const RegisterUser = () => {
  return (
    <section>
      <h2>Cadastre-se gratuitamente</h2>
      <div>
        <form>
          <div>
            <h3>Cadastro</h3>
            <span>Imagem</span>
          </div>
          <input type="text" />
          <input type="email" />
          <input type="password" />
          <button>enviar</button>
        </form>
        <p>
          Já possui conta ? <span>Login</span>
        </p>
      </div>
    </section>
  );
};
export default RegisterUser;
