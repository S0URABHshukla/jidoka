import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState();
  const fetchData = async () => {
    const res = await fetch(`http://localhost:3000/products/${id}`);
    const data = await res.json();
    console.log(data);
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="singleProduct">
      <div className="singleProductHeader">
        <p>
          Home <span style={{ margin: "0 2px 0 2px" }}>/</span>
          <span>Product Category</span>
          <span style={{ margin: "0 2px 0 2px" }}>/</span>
          <span>Linear motion</span>{" "}
          <span style={{ margin: "0 2px 0 2px" }}>/</span> <span>Shafts</span>{" "}
          <span style={{ margin: "0 2px 0 2px" }}>/</span>
          <span
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: "400",
              color: "#999999",
            }}
          >
            Shafts One End Tapped Standard/With Wrench Flats f8
          </span>
        </p>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <div>
            <img
              style={{ height: "300px", border: "1px solid #EBEBEB" }}
              // src={data?.url}
              src="data:image/jpeg;base64,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"
              alt={data?.title}
            />
          </div>
          <div>
            <img
              style={{ width: "80px", border: "1px solid #09A2A5" }}
              src="data:image/jpeg;base64,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"
              alt="shafts"
            />{" "}
          </div>
        </div>
        <div style={{ width: "675px" }}>
          <p className="singleproductHeaderd">
            Shafts One End Tapped Standard/With Wrench Flats f8 <br />
            <span className="parameters"> View the parameters</span>
          </p>
          <form action="">
            <label
              style={{
                marginBottom: "10px",
                marginRight: "10px",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "21px",
                color: "#333333",
              }}
              htmlFor=""
            >
              Parameter selection:
            </label>
            <input
              style={{
                marginBottom: "10px",
                background: "white",
                border: "1px solid grey",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "22px",
                color: "#1a1a1a",
              }}
              type="button"
              value="Material"
            />
            <select
              style={{
                fontFamily: "Arial",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "24px",
                color: "#09a2a5",
              }}
              className="singleProductSelect"
              name=""
              id=""
            >
              <option value="">please select</option>
              <option value="">SUS304</option>
              <option value="">S45C</option>
            </select>{" "}
            <br />
            <input
              style={{
                marginLeft: "148px",
                marginBottom: "10px",
                background: "white",
                border: "1px solid grey",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "22px",
                color: "#1a1a1a",
              }}
              type="button"
              value="Shaft body processed"
            />
            <select className="singleProductSelect" name="" id="">
              <option value="">please select</option>
              <option value="">With wrench Flats</option>
              <option value="">Shaft body unprocessed</option>
            </select>{" "}
            <br />
            <label
              style={{
                marginRight: "10px",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "21px",
                color: "#333333",
              }}
              htmlFor=""
            >
              The product configuration:
            </label>
            <input
              style={{
                marginBottom: "10px",
                background: "white",
                border: "1px solid grey",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "22px",
                color: "#1a1a1a",
              }}
              type="button"
              value="Code"
            />
            <select className="singleProductSelect" name="" id="">
              <option value="">please select</option>
              <option value="">SCD11</option>
              <option value="">SCD14</option>
              <option value="">SCE11</option>
              <option value="">SCE14</option>
            </select>
            &nbsp;
            <input
              style={{
                background: "white",
                border: "1px solid grey",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "22px",
                color: "#1a1a1a",
              }}
              type="button"
              value="D"
            />
            <select className="singleProductSelect" name="" id="">
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
                marginLeft: "189px",
                background: "white",
                border: "1px solid grey",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "22px",
                color: "#1a1a1a",
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
            />
            <input style={{ height: "26px" }} type="button" value="15~1500/1" />
            &nbsp;
            <input
              style={{
                background: "white",
                border: "1px solid grey",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "22px",
                color: "#1a1a1a",
              }}
              type="button"
              value="M"
            />
            <select
              style={{ width: "120px" }}
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
              marginRight: "10px",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "21px",
              color: "#333333",
            }}
          >
            Product model: -
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              background: "#FEF2E8",
              border: "1px solid #EBEBEB",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "21px",
              color: "#666666",
            }}
          >
            <div style={{ display: "flex" }}>
              <p>Price:</p>
              <p style={{ color: "#F96868" }}> &nbsp; --</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>Sum:</p>
              <p style={{ color: "#F96868" }}>&nbsp; --</p>
            </div>
            <div style={{ display: "flex" }}>
              <p>Lead time:</p>
              <p style={{ color: "#F96868" }}>&nbsp; --</p>
            </div>
          </div>
          <div style={{ border: "1px solid #FEF2E8", padding: "7px" }}>
            <p className="singleproductQnty">
              Different product input different quantity can get corresponding
              discount.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "21px",
                color: "#333333",
                marginRight: "10px",
              }}
            >
              Amount:
            </div>
            <div style={{ display: "flex", height: "42px" }}>
              {" "}
              <input style={{ width: "80px" }} type="text" placeholder="1" />
              <button
                style={{ height: "21px", marginLeft: "-24px", width: "25px" }}
              >
                {" "}
                +{" "}
              </button>
              <button
                style={{
                  height: "21px",
                  marginTop: "21px",
                  marginLeft: "-25px",
                  width: "25px",
                }}
              >
                -
              </button>
            </div>
            <div
              style={{
                marginLeft: "10px",
                color: "#666666",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "21px",
              }}
            >
              PCS
            </div>
            <button
              style={{
                height: "42px",
                background: "#F8A865",
                color: "white",
                border: "none",
                width: "240px",
                margin: "0 10px 0 10px",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "21px",
              }}
            >
              Order
            </button>
            <button
              style={{
                height: "42px",
                background: "#52BEC0",
                color: "white",
                border: "none",
                width: "240px",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "21px",
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
