const fs = require('fs');
//A function that generates a name for the product
function getMenProductName() {
    var productMenHeading='';
    //The characters that are concatenated into a string
    const character = "ABCDEFGHIJKLMNOPRSTUV";
    //Loops through so it becomes a six character name
    for(var i, i = 0; i < 6; i++){
      productMenHeading += character.charAt(Math.floor(Math.random()* character.length));
    }
    return productMenHeading;
  
  }
  //A function that generates a price for the product
  function getMenProductPrice() {
    const maxPrice = 1000;
    const minPrice = 100;
    //Randomizes a price between the set max and min
    const menProductPrice = minPrice + (Math.floor(Math.random() * (maxPrice-minPrice)));
    return menProductPrice;
  }
  //a function that generate a size for the product
  function getMenProductSize() {
    const maxSize = 3;
    const minSize = 10;
    //Randomizes a size between the set max and min
    const menProductSize = minSize + (Math.floor(Math.random() * (maxSize-minSize)));
    return menProductSize + ' ml';
  }
  //a function that generate a smell for the product
  function getMenProductSmell(){
    //An array consisting of a number of scents
    const menSmellArray =['kastanj','lavensel','mynta','salvia','ceder','violblad'];
    //Randomly selects a scent from the array of scents
    const menProductSmell = menSmellArray[(Math.random() * menSmellArray.length) | 0]
    return 'Doft av ' + menProductSmell;
  }
  //a function that generate a images for the product
  function getMenProdutImg() {
    //An array consisting of a images of women perfumes
    const menProductImgArray = ["https://pixabay.com/get/g90970f011503215077694221f0ee8b1a673b57bb50017d45cc2cde8e964c734eefaf318eff3b8b16492d98086b4a76aa73321b87e621e2a2a15f50ee7d9b73d5abe13a820b1dbcdec6950f2748108a28_1920.jpg", "https://pixabay.com/get/g3e38d33ee934caf8d1f3777a293550fbca84b5d22259a5245cd330162003af1e573e5fbb3b9135c5b614f5dc6d511032cb7f9e458ed47196f14a626ddcd21bc982f5aa433b66c2acf629a4ca1699e352_1920.jpg", "https://pixabay.com/get/g741186d6b82d1f2f63deba7d768a71aded91aaa4b9c8e8671b2d7718fb52d7fec2fa850e64f480d4690435f5bbfc2a58a29b19f944f13bb33f893962cb1ec47a378e02525011a69440482d98f899309f_1920.jpg", "https://pixabay.com/get/g52461ca1664c7f67ba0423b4d3599d96ddee7f7aa250bab811c51246dc289f260f0603b224872385ac438feabb04ab96bf4670d7129f53156f83f5d16eecfb6c6610543f7d1e3c8cafca620fe0559bfd_1920.jpg","https://pixabay.com/get/g98fb40f5a7a0f8b2f64a0a983f71ea676a9b86bf587969bb324d4719317a49a3dbbc37f64d5a29a63c86e68f7563cdd8bfe587631ad8c6827fbba00df8301278aa4b893ec49928ccab6af7dacd6fb128_1920.jpg"];
    //Randomly selects a images from the array
    const menProductImg = menProductImgArray[(Math.random()*menProductImgArray.length) | 0];
    return menProductImg;
  }
  //a function that generate a id for the product
  function generateMenProductId() {
    const time = Date.now().toString(36); 
    const randomCharacters = Math.random().toString(36).substring(2, 8); 
    return time + "-" + randomCharacters;
  }
  //The function that creates the array of products based on the previous functions
  function generateMenPerfumes(){
    const menProductArray = [];
    //Loops through as many times as the creator wants products on the page
    for (let i = 0; i < 100; i++) {
      const id = generateMenProductId();
      const name = getMenProductName();
      const price = getMenProductPrice();
      const size = getMenProductSize();
      const smell = getMenProductSmell();
      const img = getMenProdutImg();
      const PRODUCTS = {id, name, price, size, smell, img};
      //Push the data to the array
      menProductArray.push(PRODUCTS);
    }
    //localStorage.setItem('menProduct', JSON.stringify(menProductArray));
    return menProductArray;
    //}
  }
  const productMen = generateMenPerfumes();

// Konvertera produkterna till JSON-sträng
const jsonMenProducts = JSON.stringify(productMen, null, 2);

fs.writeFileSync('menProduct.json', jsonMenProducts); // spara produkterna till en fil
console.log('Produkterna sparades i menProduct.json');