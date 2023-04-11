const fs = require('fs');
//A function that generates a name for the product
function getProductName() {
  var productHeading='';
  //The characters that are concatenated into a string
  const character = "ABCDEFGHIJKLMNOPRSTUV";
  //Loops through so it becomes a six character name
  for(var i, i = 0; i < 6; i++){
    productHeading += character.charAt(Math.floor(Math.random()* character.length));
  }
  return productHeading;

}
//A function that generates a price for the product
function getproductPrice() {
  const maxPrice = 1000;
  const minPrice = 100;
  //Randomizes a price between the set max and min
  const productPrice = minPrice + (Math.floor(Math.random() * (maxPrice-minPrice)));
  return productPrice;
}
//a function that generate a size for the product
function getProductSize() {
  const maxSize = 3;
  const minSize = 10;
  //Randomizes a size between the set max and min
  const productSize = minSize + (Math.floor(Math.random() * (maxSize-minSize)));
  return productSize + ' ml';
}
//a function that generate a smell for the product
function getProductSmell(){
  //An array consisting of a number of scents
  const smellArray =['vanilj','rosor','citrusfrukter','mandel','päron','äpple'];
  //Randomly selects a scent from the array of scents
  const productSmell = smellArray[(Math.random() * smellArray.length) | 0]
  return 'Doft av ' + productSmell;
}
//a function that generate a images for the product
function getProdutImg(){
  //An array consisting of a images of women perfumes
  let productImgArray = ["https://pixabay.com/get/gd79c8df6fe27f89c061cbe1087e3e350ce2f42355ef2a6029283bd1effc2e2d6dc6f364a394e33595e2d5a5fb58ab50314907283809dbc5614609d6c5b0a182441b2505fe8a855f5c52e72803dc79fbe_1920.jpg", "https://pixabay.com/get/g11ddeddc495c9d792140f72c0f27eedbee3afb1c91a5d4f7fa1554f90e914e9ec912ee0f1d5af2bcafa9dca0ea1d417975dd44ac6143862091811374a38279e723404c9a9313b200c278893e71661c95_1920.jpg", "https://pixabay.com/get/gdf5c42a4cd2bdaa9082a6af5c20188f0612431f317ac681499a6fe82880778f41fee6e40296e518d778c2feb762012f793cdde2fd1759110fbb9058b66efd21141e8993fad0c16f4c456a4d3114336d3_1920.jpg","https://pixabay.com/get/g91b5dbbecbb3d6871be47590d77633a3d5969ef62aa772b62776039eccb52921e4366bef916246e3771b9c8081ba33bcacccab9fc5ffa20141e364843a84461bc94750268f4442ab7008923695efedbc_1920.jpg","https://pixabay.com/get/gd50546b2ecc90a81923b1ff74dacd0e1bd8df5ae19a8474798d96dbc9525b85897d292e8122f5bfb62d1718e86808d3fee418901d7272b5ead68e0f03d610326e3d7db56627eafcec9014215a5ef32aa_1920.jpg"];
  //Randomly selects a images from the array
  const productImg = productImgArray[(Math.random()*productImgArray.length) | 0];
  return productImg;
}
//a function that generate a id for the product
function generateProductId() {
  const time = Date.now().toString(36); 
  const randomCharacters = Math.random().toString(36).substring(2, 8); 
  return time + "-" + randomCharacters;
}
//The function that creates the array of products based on the previous functions
function generatePerfumes(){
  const productArray = [];
  //Loops through as many times as the creator wants products on the page
  for (let i = 0; i < 100; i++) {
    const id = generateProductId();
    const name = getProductName();
    const price = getproductPrice();
    const size = getProductSize();
    const smell = getProductSmell();
    const img = getProdutImg();
    const PRODUCT = {id, name, price, size, smell, img};
		//Push the data to the array
    productArray.push(PRODUCT);
  }
  return productArray;
}

// Anropa din function för att generera produkter
const product = generatePerfumes();

// Konvertera produkterna till JSON-sträng
const jsonWomenProducts = JSON.stringify(product, null, 2);

fs.writeFileSync('womenProduct.json', jsonWomenProducts); // spara produkterna till en fil
console.log('Produkterna sparades i womenProduct.json');