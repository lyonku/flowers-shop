import { useEffect, useState, useContext } from "react";
import { Context } from "..";

function Login({}) {
  const { firestore } = useContext(Context);
  const [login, setLogin] = useState();

  const handleSetLogin = (e) => {
    setLogin(e.target.value);
  };
  console.log(login);

  const auth = async () => {
    const ref = firestore.collection("Managers");
    const docRef = ref.doc(login);
    const doc = await docRef.get();

    console.log(doc.data());
    // doc.get().then((querySnapshot) => {
    //   console.log(querySnapshot);
    //   querySnapshot.forEach((doc) => {
    //     if (doc.data()) {

    //     }
    //   });
    // });
  };

  return (
    <section className="bg-light ">
      <div className="container pb-5 login">
        <form onSubmit={auth}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Логин
            </label>
            <input
              type="login"
              class="form-control"
              aria-describedby="emailHelp"
              onChange={handleSetLogin}
              value={login}
            />
            <div id="emailHelp" class="form-text">
              Никому не давайте доступ в свой аккаунт
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Пароль
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Сохрани меня
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Войти
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
