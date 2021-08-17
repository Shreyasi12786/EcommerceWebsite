import React from "react";
import "./Home.css";
import hogwarts from "./hogwarts.png";
import Product from "./Product";
import prod1 from './prod1.PNG'
import prod2 from './prod2.PNG'
import prod3 from './prod3.PNG'
import prod4 from './prod4.PNG'
import prod5 from './prod5.PNG'
import prod6 from './prod6.PNG'

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img src={hogwarts} className="home-image" />
      
      <div className="home-row">
        <Product 
        title='Harry Potter Tshirt (ALWAYS)'
        price={1499}
        rating={5}
        image={prod1}
        />
        <Product
          title='Harry Potter Always NeckPiece'
          price={1299}
          rating={3}
          image={prod2}
        />
                <Product
          title='Harry Potter Always NeckPiece'
          price={1299}
          rating={5}
          image={prod2}
        />
                <Product
          title='Harry Potter Always NeckPiece'
          price={2299}
          rating={5}
          image={prod2}
        />

        {/* Product */}
      </div>
      <div className="home-row">{/* Product */}
      <Product 
        title='Harry Potter Magic Mug'
        price={1299}
        rating={5}
        image={prod3}
      />
        <Product
          title='Harry Potter Cushion'
          price={1499}
          rating={5}
          image={prod4}
        />
        <Product
          title='Harry Potter Gryffindor Scarf'
          price={2499}
          rating={5}
          image={prod5}
        />
         <Product
          title='Harry Potter Gryffindor Scarf'
          price={2499}
          rating={5}
          image={prod5}
        />
         <Product
          title='Harry Potter Gryffindor Scarf'
          price={499}
          rating={5}
          image={prod5}
        />
      </div>
      <div className="home-row">{/* Product */}
          <Product
            title='Harry Potter Complete Book Collection'
            price={1499}
            rating={5}
            image={prod6}/>
            <Product
            title='Harry Potter Complete Book Collection'
            price={1499}
            rating={5}
            image={prod6}/>
            <Product
            title='Harry Potter Complete Book Collection'
            price={1499}
            rating={5}
            image={prod6}/>
            <Product
            title='Harry Potter Complete Book Collection'
            price={1499}
            rating={5}
            image={prod6}/>
          </div>
    </div>
    </div>
  );
}

export default Home;
