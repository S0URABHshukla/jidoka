import React from 'react';
import './SingleProduct.css';
import { useParams } from 'react-router-dom';
import { products } from '../products.js';
function SingleProduct() {
  const { id } = useParams();

  return (
    <div className="singleProduct">
      <div className="singleProductHeader">
        <p>
          Home <span style={{ margin: '0 2px 0 2px' }}>/</span>
          <span>Product Category</span>
          <span style={{ margin: '0 2px 0 2px' }}>/</span>
          <span>{products[id].name}</span>
        </p>
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{width:"100%"}}>
          <div >
            <img
              style={{ width:"100%", height:"270px", border: '1px solid #EBEBEB' }}
              src={products[id].image}
              alt={products[id].name}
            />
          </div>
          <div>
            <img
              style={{ width: '30%', height:"60px", border: '1px solid #09A2A5',marginBottom:"80px" }}
              src={products[id].image}
              alt={products[id].name}
            />
          </div>
        </div>
        <div style={{ width: '100%',padding:"10px" }}>
          <p className="singleproductHeaderd">
          {products[id].name} <br />
            <span className="parameters"> View the parameters</span>
          </p>
          <form action="">
            <label
              style={{
                marginBottom: '10px',
                marginRight: '10px',
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '21px',
                color: '#333333',
              }}
              htmlFor=""
            >
              Parameter selection:
            </label>
            <input
              style={{
                marginBottom: '10px',
                background: 'white',
                border: '1px solid grey',
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '22px',
                color: '#1a1a1a',
                padding: '1px 2px 0 2px',
              }}
              type="button"
              value="Material"
            />
            <select
              style={{
                fontFamily: 'Arial',
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '24px',
                color: '#09a2a5',
                border: '1px solid #09a2a5',
              }}
              className="singleProductSelect"
              name=""
              id=""
            >
              <option value="">please select</option>
              <option value="">SUS304</option>
              <option value="">S45C</option>
            </select>
            <br />
            <input
              style={{
                marginLeft: '148px',
                marginBottom: '10px',
                background: 'white',
                border: '1px solid grey',
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '22px',
                color: '#1a1a1a',
                padding: '2px 2px 0 2px',
              }}
              type="button"
              value="Shaft body processed"
            />
            <select
              style={{ border: '1px solid #09a2a5' }}
              className="singleProductSelect"
              name=""
              id=""
            >
              <option value="">please select</option>
              <option value="">With wrench Flats</option>
              <option value="">Shaft body unprocessed</option>
            </select>
            <br />
            <label
              style={{
                marginRight: '10px',
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '21px',
                color: '#333333',
              }}
              htmlFor=""
            >
              The product configuration:
            </label>
            <input
              style={{
                marginBottom: '10px',
                background: 'white',
                border: '1px solid grey',
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '22px',
                color: '#1a1a1a',
                padding: '2px 2px 0 2px',
              }}
              type="button"
              value="Code"
            />
            <select
              style={{ border: '1px solid #09a2a5' }}
              className="singleProductSelect"
              name=""
              id=""
            >
              <option value="">please select</option>
              <option value="">SCD11</option>
              <option value="">SCD14</option>
              <option value="">SCE11</option>
              <option value="">SCE14</option>
            </select>
            &nbsp;
            <input
              style={{
                background: 'white',
                border: '1px solid grey',
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '22px',
                color: '#1a1a1a',
                padding: '2px 2px 0 2px',
              }}
              type="button"
              value="D"
            />
            <select
              style={{ border: '1px solid #09a2a5' }}
              className="singleProductSelect"
              name=""
              id=""
            >
              <option value="">please select</option>
              <option value="">18</option>
              <option value="">35</option>
              <option value="">40</option>
              <option value="">50</option>
              <option value="">6</option>
              <option value="">8</option>
              <option value="">10</option>
              <option value="">12</option>
              <option value="">13</option>
              <option value="">15</option>
              <option value="">16</option>
              <option value="">20</option>
              <option value="">25</option>
              <option value="">30</option>
            </select>
            <br />
            <input
              style={{
                marginLeft: '189px',
                background: 'white',
                border: '1px solid grey',
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '22px',
                color: '#1a1a1a',
                padding: '2px 2px 0 2px',
              }}
              type="button"
              value="L"
            />
            <input
              className="singleProductSelect"
              type="text"
              name=""
              id="inputPlaceholder"
              placeholder="please enter"
              style={{ border: '1px solid #09a2a5' }}
            />
            <input style={{ height: '26px' }} type="button" value="15~1500/1" />
            &nbsp;
            <input
              style={{
                background: 'white',
                border: '1px solid grey',
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '22px',
                color: '#1a1a1a',
                padding: '2px 2px 0 2px',
              }}
              type="button"
              value="M"
            />
            <select
              style={{ width: '120px', border: '1px solid #09a2a5' }}
              className="singleProductSelect"
              name=""
              id=""
            >
              <option value="">please select</option>
              <option value="">24</option>
              <option value="">30</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">8</option>
              <option value="">10</option>
              <option value="">12</option>
              <option value="">16</option>
              <option value="">20</option>
              <option value="">Optional processing MC</option>
            </select>
          </form>
          <p
            style={{
              marginRight: '10px',
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontWeight: '600',
              fontSize: '14px',
              lineHeight: '21px',
              color: '#333333',
            }}
          >
            Product model: -
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              background: '#FEF2E8',
              border: '1px solid #EBEBEB',
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '21px',
              color: '#666666',
            }}
          >
            <div style={{ display: 'flex' }}>
              <p>Price:</p>
              <p style={{ color: '#F96868' }}> &nbsp; --</p>
            </div>
            <div style={{ display: 'flex' }}>
              <p>Sum:</p>
              <p style={{ color: '#F96868' }}>&nbsp; --</p>
            </div>
            <div style={{ display: 'flex' }}>
              <p>Lead time:</p>
              <p style={{ color: '#F96868' }}>&nbsp; --</p>
            </div>
          </div>
          <div style={{ border: '1px solid #FEF2E8', padding: '7px' }}>
            <p className="singleproductQnty">
              Different product input different quantity can get corresponding
              discount.
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '21px',
                color: '#333333',
                marginRight: '10px',
              }}
            >
              Amount:
            </div>
            <div style={{ display: 'flex', height: '42px' }}>
              {' '}
              <input style={{ width: '80px' }} type="text" placeholder="1" />
              <button
                style={{ height: '21px', marginLeft: '-24px', width: '25px' }}
              >
                {' '}
                +{' '}
              </button>
              <button
                style={{
                  height: '21px',
                  marginTop: '21px',
                  marginLeft: '-25px',
                  width: '25px',
                }}
              >
                -
              </button>
            </div>
            <div
              style={{
                marginLeft: '10px',
                color: '#666666',
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '21px',
              }}
            >
              PCS
            </div>
            <button
              style={{
                height: '42px',
                background: '#F8A865',
                color: 'white',
                border: 'none',
                width: '240px',
                margin: '0 10px 0 10px',
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '21px',
              }}
            >
              Order
            </button>
            <button
              style={{
                height: '42px',
                background: '#52BEC0',
                color: 'white',
                border: 'none',
                width: '240px',
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '21px',
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="singleProductButtonDiv">
          <button className="resetNdown">Rest the parameters</button> <br />
          <button className="resetNdown">Download PDF</button> <br />
          <button disabled="true">3D model Download</button> <br />
          <button disabled="true">Exchange Rate</button> <br />
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
