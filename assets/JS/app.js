// Begin Full Frame Buy Now

    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'soar-strong.myshopify.com',
          storefrontAccessToken: '25da77451fe099cecbd373dc121636c0',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [1943505207392],
            node: document.getElementById('product-component-7164ec7456d'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
  "product": {
    "buttonDestination": "checkout",
    "layout": "horizontal",
    "variantId": "all",
    "width": "100%",
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "description": true,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "text": {
      "button": "BUY NOW"
    },
    "styles": {
      "product": {
        "text-align": "left",
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#000000",
        "font-family": "Montserrat, sans-serif",
        ":hover": {
          "background-color": "#000000"
        },
        ":focus": {
          "background-color": "#000000"
        },
        "font-weight": "normal"
      },
      "variantTitle": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      },
      "title": {
        "font-size": "26px"
      },
      "description": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Montserrat, sans-serif",
        "font-size": "18px",
        "font-weight": "normal"
      },
      "compareAt": {
        "font-size": "15px",
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Montserrat",
      "Montserrat",
      "Montserrat",
      "Montserrat",
      "Montserrat"
    ]
  },
  "cart": {
    "contents": {
      "button": true
    },
    "text": {
      "title": "Shopping Cart"
    },
    "styles": {
      "button": {
        "background-color": "#000000",
        "font-family": "Montserrat, sans-serif",
        ":hover": {
          "background-color": "#000000"
        },
        ":focus": {
          "background-color": "#000000"
        },
        "font-weight": "normal"
      },
      "footer": {
        "background-color": "#ffffff"
      }
    },
    "googleFonts": [
      "Montserrat"
    ]
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#000000",
        "font-family": "Montserrat, sans-serif",
        ":hover": {
          "background-color": "#000000"
        },
        ":focus": {
          "background-color": "#000000"
        },
        "font-weight": "normal"
      },
      "variantTitle": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      },
      "description": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      },
      "compareAt": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Montserrat",
      "Montserrat",
      "Montserrat",
      "Montserrat",
      "Montserrat"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Montserrat, sans-serif",
        "background-color": "#000000",
        ":hover": {
          "background-color": "#000000"
        },
        ":focus": {
          "background-color": "#000000"
        },
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Montserrat"
    ]
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Montserrat, sans-serif"
      },
      "select": {
        "font-family": "Montserrat, sans-serif"
      }
    },
    "googleFonts": [
      "Montserrat",
      "Montserrat"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();
// End Full Frame Buy Now