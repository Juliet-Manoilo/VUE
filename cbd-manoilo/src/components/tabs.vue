
<template>
  <div class="tabContainer">
    <div class="tabContainer__tabs">
      <a class="tabContainer__tab-link" v-on:click="activetab = 1" v-bind:class="[activetab === 1 ? 'active' : '']">WHAT IS CBD?</a>
      <a class="tabContainer__tab-link" v-on:click="activetab = 2" v-bind:class="[activetab === 2 ? 'active' : '']">BENEFITS</a>
      <a class="tabContainer__tab-link" v-on:click="activetab = 3" v-bind:class="[activetab === 3 ? 'active' : '']">OUR DIFFERENCE</a>
    </div>

    <div class="tabContainer__content">
      <div v-if="activetab === 1" class="tabContainer__tabcontent">
        <div class="tabContainer__left-block"><h3 class="tabContainer__title">WHAT IT IS AND HOW IT WORKS</h3>
        <p class="tabContainer__text">CBD is short for cannabidiol. It is a phytocannabinoid found in hemp and known for supporting the body and mind in many ways.* Charlotte’s Web products have cannabinoids with CBD extract.</p>
        <p class="tabContainer__text">Not to be confused with oil from hemp seeds (which doesn’t contain cannabinoids), CBD comes from the flowers and leaves of the hemp plant.</p>
        <p class="tabContainer__text">Why does CBD work? The human body has a vast network of receptors, the endocannabinoid system.</p>
  </div>
  <div class="tabContainer__right-block"><img class="tabContainer__image" src="../assets/tabs1.png" alt="mountain">
  <img src="../assets/tabs2.png" alt="wheat"></div>
  </div>
      <div v-if="activetab === 2" class="tabContainer__tabcontent">
           <div class="tabContainer__left-block"><h3 class="tabContainer__title">Lorem ipsum dolor sit amet.</h3>
         <p class="tabContainer__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi laborum inventore amet blanditiis necessitatibus eveniet distinctio, dolorem nihil aut velit dolor, ipsa dolorum explicabo enim maxime consectetur. Dolore, dignissimos nulla! </p>
         <p class="tabContainer__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloribus eum distinctio suscipit eveniet alias quo delectus pariatur quae asperiores!</p>     
      
        </div>
      <div class="tabContainer__right-block"><img class="tabContainer__image" src="../assets/tabs2.png" alt="mountain">
  <img src="../assets/tabs1.png" alt="wheat"></div></div>
      <div v-if="activetab === 3" class="tabContainer__tabcontent">
       <div class="tabContainer__left-block"><h3 class="tabContainer__title">de Finibus Bonorum et Malorum</h3>
         <p class="tabContainer__text">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.  </p>
      <p class="tabContainer__text">No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>
      </div><div class="tabContainer__right-block"><img class="tabContainer__image" src="../assets/tabs1.png" alt="mountain">
  <img src="../assets/tabs2.png" alt="wheat"></div></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tabs",
  data() {
    return {
      activetab: 1
    };
  }
};
</script>

<style lang="scss">
@import "../styles/core/vars.scss";
.tabContainer {
  background-color: $bgc-color;
  text-align: left;
  font-size: 30px;
  width: 70%;
  position: relative;
  margin: auto;
  min-height: 85vh;
  &__tab-link {
     margin-right: 75px;
     font-size: $logo-size;
     letter-spacing: 4px;
     cursor: pointer;
     line-height: 75px;
     border-bottom: 2px solid transparent; 
     &:hover {
        border-bottom: 2px solid $black; 
     }
     
     
  }
  &__tabs {
border-bottom: 1px solid $tabs-border;
margin-bottom: 80px;
width: 95%;
text-align: left;
  }
  &__left-block {
      width: 39%;
      padding-top: 50px;
      margin: 0;
      display: inline-block;
  }
  &__right-block {
      width: 60%;
      text-align: right;
      display: inline-block;
      position: absolute;
      top: 0;
      right: 0;
  }
  &__tabcontent {
      position: relative;
  }
  &__content {
      width: 100%;
  }
  &__image {
      margin-bottom: 30px;
  }
  &__title {
      font-size: $sub-title-size;
      line-height: 40px;
      width: 70%;
      letter-spacing: 3px;
      margin-bottom: 40px;
      text-transform: uppercase;
  }
  &__text {
      color: $text-color;
      font-weight: 300;
      margin-bottom: 55px;
      font-size: $link-size;
      &:last-child {
          margin-bottom: 0;
      }
  }
}


</style>