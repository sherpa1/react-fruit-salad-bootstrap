import "./FruitPreview.css";

function FruitPreview({ fruit }) {
  function onClick() {
    console.log(fruit.name);
  }

  function getImage() {
    return "/images/" + fruit.name.toLowerCase() + ".png";
  }

  return (
    <div className={"FruitPreview " + fruit.name.toLowerCase()}>
      <a href={"/fruits/" + fruit.name.toLowerCase()} rel="">
        <img alt={fruit.name} src={getImage()} />
      </a>
      <button onClick={() => onClick()}>{fruit.name}</button>
    </div>
  );
}

export default FruitPreview;
