app.component("product-details", {
  props: {
    pDetails: {
      required: true,
    },
  },
  template:
    /*html*/
    `
    <div class="product-details">
    <p>{{pDetails}}</p>
    </div>
  `,
});
