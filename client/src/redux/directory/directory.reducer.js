const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "https://i.ibb.co/7VK9dzC/kilyan-sockalingum-q-U9u-Fpbf-XUo-unsplash.jpg",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl:
        "https://i.ibb.co/TTKFMHf/adrian-ordonez-P0-W27-GRvyww-unsplash.jpg",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl:
        "https://i.ibb.co/7t7fmVS/alexandru-zdrobau-dj-RG1v-B1pw-unsplash.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl:
        "https://i.ibb.co/dtWjXxz/raghav-bhadoriya-7-U0-Wwu-Js9-M-unsplash-1.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
