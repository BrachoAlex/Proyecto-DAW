import React from 'react';
import Catalog from "react-catalog-view";
import axios from "axios";
    
    function ProductData(){
      let products = axios.get("http://localhost:5000/getAllProducts")
      console.log(products)

      const CONTENT_KEYS = 
      {             
         imgKey: "imageUrl",
         cardTitleKey: "name",
         cardDescriptionKey: "description",
         priceKey: "price",
         discountedPriceKey: "countInStock",
         priceCurrencyKey: "price",
         discountCurrencyKey: "price"
      };
	
      return(
        <Catalog
           data = {products}		
           // Array of JSON Objects (required)
           contentKeys={CONTENT_KEYS}  
           // JSON Object defining the keys that will be 
           // used from the data array, keys should match. (required)
           skeleton={0}
           // Any non zero number will override default cards
           // and will show that many skeleton cards.           
           cardSize="sm"
           // Card sizes, sm, md and lg for small, medium  and large
           btnOneText="View"
           // Enter text for action button one 
           // or pass empty string to hide.  
           btnTwoText="Purchase Now"
           // Enter text for action button two 
           // or pass empty string to hide.
           btnOneHandler={(args, event, objectData)=>{
            // 'objectData' returns object data from 'data' prop
            // any arguments passed will be before 'event' 
            // and 'objectData'
           }}
           btnTwoHandler={(args, event, row)=>{
            // 'objectData' returns object data from 'data' prop
            // any arguments passed will be before 'event' 
            // and 'objectData'
           }}
           imageClickHandler={(args, event, row)=>{
            // 'objectData' returns object data from 'data' prop
            // any arguments passed will be before 'event' 
            // and 'objectData'
           }}
           cardControls={ dataObj => {
               return(
                  <div>
                     <input className='my-custom-input' placeholder='custom-input' />
                     <button className='my-custom-button' type='submit'> OK </button> 
                  </div>
               )
            }}
            // Pass a function which returns JSX to be rendered inside card
            // This function will have 'dataObj' containing JSON of
            // the item each card represents
        />
      )
  }

  export default ProductData;
