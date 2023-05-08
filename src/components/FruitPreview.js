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
      <img width="100px" alt={fruit.name} src={getImage()} />
      <button onClick={() => onClick()}>{fruit.name}</button>
    </div>
  );
}

export default FruitPreview;
