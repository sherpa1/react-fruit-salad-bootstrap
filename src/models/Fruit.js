class Fruit{
    constructor(name="", color="#FFFFFF", image=null,  id=0,price=0, stock=0, origin="France", season=null) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.color = color;
        this.stock = stock;
        this.origin = origin;
        this.season = season;
    }
}

export default Fruit;