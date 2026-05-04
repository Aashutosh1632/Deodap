function setRecentlyViewedPdp(){let e={productTitle:"{{ product.title }}",productImg:"{{ product.featured_image | img_url: '' }}",productPrice:"{{ product.price | money | remove_first: '' }}",productUrl:"{{ product.url }}"},t=[];t.push(e);let r=e.productTitle,i=JSON.stringify(t),c=localStorage.getItem("recently_viewed");if(null==c)localStorage.setItem("recently_viewed",i);else{let l=JSON.parse(c);l.length;let n=l.some(e=>e.productTitle===r);!1==n&&(l.unshift(e),l.length>15&&l.pop()),localStorage.setItem("recently_viewed",JSON.stringify(l))}}function getRecentPdp(){let e=JSON.parse(localStorage.getItem("recently_viewed"));if(!e||0===e.length)return;let t=[];if(e.forEach(function(e){e.productTitle&&e.productImg&&e.productUrl&&e.productPrice&&t.push(`
        <div class="swiper-slide recent-view-card">
          <section id="Recent">
            <div class="c-product">
             <div class="c-product__img"> 
               <a href="${e.productUrl}">
                 <img src='${e.productImg}' alt="${e.productTitle}"/>
                </a> 
              </div> 
              <h3 class="c-product__title"> 
                <a class="c-product__url" href="${e.productUrl}"> ${e.productTitle} </a> 
              </h3> <p class="c-productPrice">${e.productPrice}</p>
            </div>
          </section>
        </div>
      `)}),t.length>0){let r=t.join(""),i=document.querySelector(".js-recentPdpBlock");i.innerHTML=r,new Swiper(".recently-swiper-container",{slidesPerView:5,spaceBetween:10,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1024:{slidesPerView:5},768:{slidesPerView:3},576:{slidesPerView:2}}})}}function clearRecentlyViewed(){localStorage.removeItem("recently_viewed");let e=document.querySelector(".js-recentPdpBlock");e.innerHTML="";let t=document.querySelector(".recently-swiper-container");t.style.display="none";let r=document.createElement("div");r.textContent="No recently viewed products.",r.style.textAlign="center",r.style.fontSize="18px",r.style.marginTop="20px",t.appendChild(r)}setRecentlyViewedPdp(),getRecentPdp();