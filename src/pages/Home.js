import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/slider';
import './Home.css';


const productImages = [
    { src: 'image1.jpg' },
    { src: 'image2.jpg' },
    { src: 'image3.jpg' },
    { src: 'image4.jpg' },
    { src: 'image5.jpg' },
    { src: 'image6.jpg' },
    { src: 'image7.jpg' },
    { src: 'image8.jpg' },
    { src: 'image9.jpg' },
    { src: 'image10.jpg' },
    { src: 'image11.jpg' },
    { src: 'image12.jpg' },
    { src: 'image13.jpg' },
    { src: 'image14.jpg' },
    { src: 'image15.jpg' },
    { src: 'image16.jpg' },
    { src: 'image17.jpg' },
    { src: 'image18.jpg' },
    { src: 'image19.jpg' },
    { src: 'image20.jpg' },
    { src: 'image21.jpg' },
    { src: 'image22.jpg' },
    { src: 'image23.jpg' },
    { src: 'image24.jpg' },
    { src: 'image1.jpg' },
    { src: 'image2.jpg' },
    { src: 'image3.jpg' },
    { src: 'image4.jpg' },
    { src: 'image5.jpg' },
    { src: 'image6.jpg' },
    { src: 'image7.jpg' },
    { src: 'image8.jpg' },
    { src: 'image1.jpg' },
    { src: 'image2.jpg' },
    { src: 'image3.jpg' },
    { src: 'image4.jpg' },
    { src: 'image5.jpg' },
    { src: 'image6.jpg' },
    { src: 'image7.jpg' },
    { src: 'image8.jpg' },
    { src: 'image1.jpg' },
    { src: 'image2.jpg' },
    { src: 'image3.jpg' },
    { src: 'image4.jpg' },
    { src: 'image5.jpg' },
    { src: 'image6.jpg' },
    { src: 'image7.jpg' },
    { src: 'image8.jpg' },
    
];

const products = [
    { name: 'Toyota', price: 310 },
    { name: 'Honda', price: 200 },
    { name: 'Benz', price: 330 },
    { name: 'Fureniture', price: 440 },
    { name: 'Foods', price: 50 },
    { name: 'Drinks', price: 60 },
    { name: 'Grocery', price: 270 },
    { name: 'Meats', price: 80 },
    { name: 'Product 9', price: 90 },
    { name: 'Product 10', price: 210 },
    { name: 'Product 11', price: 130 },
    { name: 'Product 12', price: 420 },
    { name: 'Product 13', price: 350 },
    { name: 'Product 14', price: 610 },
    { name: 'Product 15', price: 170 },
    { name: 'Product 16', price: 80 },
];

const Home = () => {
    return (
        <div className="container">
            <Navbar />
            <div className="container1">
                <div className="dropdown-container1"></div>
                <select>
                    <option value="Select">----Select----</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Books">Books</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Home Appliances">Home Appliances</option>
                </select>

                <div className="dropdown-container2">
                    <select>
                        <option value="Select">----Select----</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div className="dropdown-container3">
                    <select>
                        <option value="Select">----Select----</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                    </select>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Line Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {}
                    </tbody>
                </table>
            </div>

            <div className="container2" >
                <div className="dropdown-container4">
                    <select>
                        <option value="Select">----Select----</option>
                        <option ></option>
                        <option ></option>

                    </select>
                    <div className="dropdown-container5">
                    <select>
                        <option value="Select">----Select----</option>
                        <option ></option>
                        <option ></option>

                    </select>
                    <div className="dropdown-container6">
                    <select>
                        <option value="Select">----Select----</option>
                        <option ></option>
                        <option ></option>

                    </select>
                    <div className="product-section">
                        {products.map((product, index) => (
                            <div key={index} className="product-row">

                                <Slider
                                    name={product.name}
                                    price={product.price}
                                    images={productImages.slice(index * 3, index * 3 + 3)}
                                />
                                <h3>{product.name}</h3>
                                <p>Price: ${product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Home;


