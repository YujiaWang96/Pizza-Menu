import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
}

function Header() {
  //const style = { color: "red", fontSize: "42px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

//rendering Lists
/*
上面pizza有很多信息，按理每一个都要把信息放进<pizza/>标签，写出6个展示
这时就可以用到rendering lists来循环放入，一次写好
1.首先最起码<pizza>里面放一个props，里面有个属性集，属性集里有名称，原料.....
2.在<div>里面开始循环用map来得到每一个pizza信息，输出的时候，信息填入一个pizza标签中输出。
3.这时候<pizza>标签中会有每个pizza传入的名称原料等信息。分开写就是
<Pizza name={pizza.name} photoname={pizza.photoName} />
但是方便一点。又把这些name，photoName封装成一个属性集 pizzaObj，所有属性都在里面
最后<Pizza pizzaObj={pizza}，这个pizzaObj属性集就等于{pizza}循环的每个pizza信息
但是这个pizzaObj把属性合并起来不是必须，我自己还是宁愿多写几行
注意要加个key唯一标识符 key={pizza.name}
 */
function Menu() {
  // var pizzaData = [];
  const len = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {len > 0 ? ( //在这里用 &&，如果pizzaData是空的，或长度为0，或直接false，就不加载每个pizza信息.改用三元运算符一样
        //之所以不用if，else是因为不会产生结果，无输出。只能做操作，没有return
        <>
          <p>
            Authentic Italian Pizza, 6 creative dishes are waiting for you
            choose
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza
                // pizzaObj = {pizza}
                name={pizza.name}
                ingredients={pizza.ingredients}
                photoName={pizza.photoName}
                price={pizza.price}
                soldOut={pizza.soldOut}
                key={pizza.name}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>Sorry, We still working on the menu :)</p>
      )}

      {/* <Pizza
        name="Pizza Margherit"
        ingredients="Tomato and mozarella"
        photoName="pizzas/margherita.jpg"
        price={12}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={12.5}
      />
      <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozzarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={12}
      />

      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozzarella, and pepperoni"
        photoName="pizzas/salamino.jpg"
        price={15}
      />

      <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozzarella, ham, arugula, and burrata cheese"
        photoName="pizzas/prosciutto.jpg"
        price={18.0}
      /> */}
    </main>
  );
}
//先写上面的各种参数，然后写下面的props，默认props就会具有上面特征
function Pizza(props) {
  return (
    <li className={props.soldOut ? "pizza sold-out" : "pizza"}>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.soldOut ? "Sold Out" : props.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour < closeHour;
  console.log(isOpen);

  if (!isOpen) {
    return (
      <p>
        We're currently closed, our open hour from {openHour}AM to {closeHour}
        PM
      </p>
    );
  }

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're currently closed, our open hour from {openHour}AM to {closeHour}
          PM
        </p>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p style={{ marginTop: "2rem" }}>
        We are happy to serve you from {props.openHour} until {props.closeHour}!
      </p>
      <button className="btn">Order Now!</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
