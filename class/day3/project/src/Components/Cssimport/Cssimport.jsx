import style from "./Cssimport.module.css"
const Cssimport = () => {
  return (
    <div className={style.Container}>
      <div className= {style.Card}>
        <h1 className= {style["Card-header"]}>Title here</h1>
        <p className={style["Card-header"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sequi quod
          animi aperiam perspiciatis eligendi quia placeat autem voluptatibus
          voluptate?
        </p>
        <a href="" className={style.cardLink}>Click Me</a>
      </div>
    </div>
  );
};
export default Cssimport;
