app.component("review-list", {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },

  template:
    /*html*/
    `
  <div className="review-container">
    <h3>Reviews: </h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{review.name}} gave this {{review.rating}} stars
        <br />
        {{review.review}}
        <br />
        <p v-if="review.recommend === 'Yes'" >Likes</p>
        <p v-else>Dislikes</p>
        {{review.recommend}}
      
      </li>
    </ul>
  </div>
  `,
});
