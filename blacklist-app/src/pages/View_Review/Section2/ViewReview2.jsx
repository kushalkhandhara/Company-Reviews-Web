import Card from "./Card/Card";
import "./ViewReview2.css";

export default function ViewReview2() {
  return (
    <div className="viewreview2">
        <div className="viewreview-main d-flex justify-content-center flex-wrap mt-5 p-3 gap-4">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}
