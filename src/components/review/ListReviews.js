import React from "react";

const ListReviews = ({ reviews }) => {
  return (
    <div class="reviews">
      <h3>Reviews section:</h3>
      <hr />
      {reviews &&
        reviews.map((review) => (
          <div key={review._id} class="review-card ">
            <div class="rating-outer">
              <div
                class="rating-inner"
                style={{ width: `${(review.rating / 5) * 100}%` }}
              ></div>
            </div>
            <p class="review_user">by {review.name}</p>
            <p class="review_comment">{review.comment}</p>

            <hr />
          </div>
        ))}
    </div>
  );
};

export default ListReviews;
