
function Product(id,name,description,price,discount,image,category){
    this.id= id + 1;
    this.name=name.trim();
    this.description=description.trim();
    this.price=price;
    this.discount=discount;
    this.image= image ? image[0].filename : null;
    this.category=category
}


module.exports =Product