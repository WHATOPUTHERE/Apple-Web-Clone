import React from "react";
function Section({title, styleName}){
    return (
        <section class={styleName}>
          <div class="container">
            <div class="title-wraper bold black">{title}</div>
    
            <div class="price-wrapper grey">From $999.</div>
            <div class="links-wrapper">
              <ul>
                <li><a href="">Learn more</a></li>
                <li><a href="">Order</a></li>
              </ul>
            </div>
          </div>
        </section>
    )
}
export default Section