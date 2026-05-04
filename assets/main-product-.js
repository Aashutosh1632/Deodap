
function setRecentlyViewedPdp() {
  {%- if customer -%}
    const productData = {
      id: "{{ product.id }}", 
      variantId: "{{ product.variants.first.id }}", 
      title: "{{ product.title | escape }}", 
      image: "{{ product.featured_image | img_url: '' }}", 
      price: "{{ product.price | money }}", 
      compareAtPrice: "{{ product.compare_at_price | money }}", 
      url: "{{ product.url }}", 
      inventory: {{ product.variants.first.inventory_quantity }},
      tag: [{% for tag in product.tags %}"{{ tag | escape }}"{% if forloop.last == false %}, {% endif %}{% endfor %}]
    };
    if (!productData.id || !productData.variantId) {
      console.warn("Product ID or Variant ID is missing. Skipping storage.");
      return;
    }
    let recentlyViewed = JSON.parse(localStorage.getItem("recently_viewed")) || [];
    recentlyViewed = recentlyViewed.filter(item => Array.isArray(item.tag) && item.tag.length > 0);
    const exists = recentlyViewed.some(item => item.id === productData.id);
    if (!exists) {
      recentlyViewed.push(productData);
      localStorage.setItem("recently_viewed", JSON.stringify(recentlyViewed));
    } else {
      localStorage.setItem("recently_viewed", JSON.stringify(recentlyViewed)); // Still update in case cleanup happened
    }
  {%- else -%}
    console.log("User is not logged in. Skipping.");
  {%- endif -%}
}
setRecentlyViewedPdp();

function setpdpViewedPdp() {
    const productData = {
      id: "{{ product.id }}", 
      variantId: "{{ product.variants.first.id }}", 
      title: "{{ product.title | escape }}", 
      image: "{{ product.featured_image | img_url: '' }}", 
      price: "{{ product.price | money }}", 
      compareAtPrice: "{{ product.compare_at_price | money }}", 
      url: "{{ product.url }}", 
      inventory: {{ product.variants.first.inventory_quantity }},
      tag: [{% for tag in product.tags %}"{{ tag | escape }}"{% if forloop.last == false %}, {% endif %}{% endfor %}]
    };
    if (!productData.id || !productData.variantId) {
      console.warn("Product ID or Variant ID is missing. Skipping storage.");
      return;
    }
    let recentlyViewed = JSON.parse(localStorage.getItem("pdp_viewed")) || [];
    recentlyViewed = recentlyViewed.filter(item => Array.isArray(item.tag) && item.tag.length > 0);
    const exists = recentlyViewed.some(item => item.id === productData.id);
    if (!exists) {
      recentlyViewed.push(productData);
      localStorage.setItem("pdp_viewed", JSON.stringify(recentlyViewed));
    } else {
      localStorage.setItem("pdp_viewed", JSON.stringify(recentlyViewed)); // Still update in case cleanup happened
    }
}
setpdpViewedPdp();
