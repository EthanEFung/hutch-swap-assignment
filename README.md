# hutch-swap-assignment

The goal of this project is to recreate a sample room with a product swap functionality. Feel free to use `create-react-app` or whichever boilerplate you feel comfortable with. Regarding the UI you should only worry about the generic layout but not waste too much time with the design details (those are not fundamental for this assignment). Follow practices you are comfortable with for a scalable React app.

You can use the function provided to retrieve the data.

```
const getData = () => ({
  room_type: 'living_room',
  room_photo: 'https://hutch-clean-photos.s3.amazonaws.com/render-b9d536c0-8430-433f-9280-2d0d970f14a1.jpeg',
  products: [
    {
      id: 110,
      index: 1,
      top: 58.1371,
      left: 20.914,
      width: 58.1189,
      height: 27.7761,
      type: 'sofa',
      url: 'https://d32n2fbipjm5yj.cloudfront.net/RANCH-COUCH/preview/RANCH-COUCH_Couches_0792.png',
      price: 2000.00,
      similar_producs: [{
        url: 'https://d32n2fbipjm5yj.cloudfront.net/GWSOFA1/preview/GWSOFA1_Couches_0792.png',
        price: 199.99,
      },{
        price: 1200.00,
        url: 'https://d32n2fbipjm5yj.cloudfront.net/STYSOFA/preview/STYSOFA_Couches_0792.png',
      }]
    },{
      id: 111,
      index: 0,
      top: 39.4818,
      left: 57.1159,
      width: 7.87608,
      height: 7.90381,
      type: 'art',
      url: 'https://d32n2fbipjm5yj.cloudfront.net/MIN-FCC-GNA/preview/MIN-FCC-GNA_WallArt_0351.png',
      price: 100.00,
      similar_producs: [],
    },{
      id: 112,
      index: 3,
      top: 76.284,
      left: 39.6117,
      width: 6.10141,
      height: 7.29,
      type: 'plant',
      url: 'https://d32n2fbipjm5yj.cloudfront.net/VBPLANT4/preview/VBPLANT4_Decor_0432.png',
      price: 250.00,
      similar_producs: [],
    },{
      id: 113,
      index: 2,
      top: 81.6894,
      left: 32.4119,
      width: 34.4195,
      height: 16.5034,
      type: 'table',
      url: 'https://d32n2fbipjm5yj.cloudfront.net/MOCOFFETABLE/preview/MOCOFFETABLE_Main_0864.png',
      price: 300.00,
      similar_producs: [],
    },{
      id: 114,
      index: 4,
      top: 68.5516,
      left: 2.43159,
      width: 26.9852,
      height: 28.1286,
      type: 'chair',
      url: 'https://d32n2fbipjm5yj.cloudfront.net/ARMCHAIR21/preview/ARMCHAIR21_Main_0848.png',
      price: 150.00,
      similar_producs: [],
    }
  ],
});
```

You can use this gif as a reference for the functionality:
![example room](https://gyazo.com/80a0b6fc1123d17bf7284e8423e84587.gif)

You can assume that the `room_photo` will always be a square picture. Each product that will populate the room has the following fields:
 - `index`: it defines the order in which products are displayed, index `0` means it needs to be displayed first, this is important to respect depth perception
 - `top`, `left`: these represent where the top left corner of the image should be positioned, they are expressed in terms of percentages of the room image they belong to
 - `width`, `height`: these represent the product image dimenions, just like its position they are represented in terms of percentages of the room they belong to
 - `url`: this is the url of the image to be displayed
 - `price`
 - `id`
 - `type`: this represents the type of product
 - `similar_products`: this is a list of similar products, you can use the url to replace the current one showing in the project render (more about this later)

Following are the expected functionalities to be implemented:

- When a user clicks on a product in the room, the list of similar products should be updated showing the related products, the type of the selected product should also be displayed (e.g. Sofa, Plant, ...). Be aware, some product images have transparent areas, if the user clicks on that area the item behind it should be selected (if any). If you closely look at the gif, the inital mouse cursor shows an are of interest for this behavior
- If the clicked product has no similar products, the user should be provided with some feedback saying that no similar products were found
- If the clicked product has similar products then each one should show a preview image and its price (see the gif)
- When clicking on a similar product, the product in the room should be replaced with the similar product. You can assume that position and dimensions will be the same, only the url will be updated
- The first element on the list of similar products (if there are any) should be the inital one, this will allow the user to swap back to it if needed (see the gif)

For extra points you can Promisify the provided function, and treat it like you would treat an async call (e.g. an API call).
