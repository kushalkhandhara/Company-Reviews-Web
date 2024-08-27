import "./ViewReview1.css"
import image from "../../../assets/viewReview.jpg";
import { IoSearch } from "react-icons/io5";

export default function ViewReview1() {
  return (
    <div className="viewreview1">
        <div className="viewreview1-main">           
            <div className="viewreview-side1">
                <div className="viewreview-side1-header">
                    <h2>
                    Real Reviews from Real Customers! 
                    </h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores mollitia a, placeat expedita ratione labore hic veritatis, velit magnam molestias accusantium vel fugiat reprehenderit eveniet earum porro, nisi rem rerum.
                    </p>
                </div>
                <div className="searchinp">
                    <input type="text" placeholder="Search Here By Company Name..." />
                    <IoSearch size={25} />
                </div>
                <div className="reviews-data mt-4 d-flex gap-5">
                    <div className="review1 ">
                        <h6>
                            10k+ Reviews
                        </h6>
                    </div>
                    <div className="review1">
                        <h6>
                            4k+ Companies
                        </h6>
                    </div>
                </div> 
            </div>

            <div className="viewreview-side2">
                <img src={image} className="img-fluid" alt="" />
            </div>
        </div>
    </div>
  )
}
