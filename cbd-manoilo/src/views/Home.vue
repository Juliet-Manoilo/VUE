<template>
<section>
  <section class="home">
      <div class="home__top-panel">
        <nav class="home__nav">
          <a href="#" class="home__nav-links">HOME</a>
          <a href="#" class="home__nav-links">PRODUCTS</a>
          <a href="#" class="home__nav-links">FAQS</a>
          <a href="#" class="home__nav-links">CONTACT US</a>
        </nav>
        <div class="home__logo">
          <a href="#">CBD</a>
        </div>
        <div class="home__user-buttons">
          <div class="home__link-wrapper"><a href="#" class="home__btn-links">LOGIN</a></div>
          <div class="home__link-wrapper"><i class="fas fa-search"></i><a href="#" class="home__btn-links--search">SEARCH </a></div>
         <div class="home__link-wrapper"> <a href="#" class="home__btn-links">CART (0)</a></div>
        </div>
      </div>
      <div class="home__content">
        <h1 class="home__title">Enhancing Life  Excelling in Care</h1>
        <h2 class="home__subtitle"> Choose Wisely. Choose CBD.</h2>
        <div class="home__btn"><a href="#" class="home__shop-link">START SHOPPING</a></div>
        <a href="#" class="home__prod-link">See all products <i class="fas fa-long-arrow-alt-right"></i></a>

      </div>
      <h3 class="home__vertical-text"> CBD POTION HEALTH</h3>
  </section>
  <section class="about">
    <div class="about__what-we-are">
<img class="about__border" src="../assets/about-border.png" alt="border">
<h3 class="about__title">WE ARE WHAT WE ARE</h3>
<img class="about__logos" src="../assets/Logos.png" alt="Logos">
    </div>
   <div class="tabs">
<tabs />
  </div>

<splide><div id="splide" class="splide" >
	<div class="splide__track">
		<ul class="splide__list">
			<li class="splide__slide">
				<img src="../assets/tabs1.png">
				<h4>Heading 01</h4>
				<div>
					Description 01
				</div>
			</li>
			<li class="splide__slide">
				<img src="../assets/tabs2.png">
				<h4>Heading 02</h4>
				<div>
					Description 02
				</div>
			</li>
		</ul>
	</div>
</div> </splide>
 </section>
</section>
</template>

<script>
import Tabs from "../components/tabs";
import { Splide } from '@splidejs/vue-splide';
//import Carousel from '../components/carousel.vue';
document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#splide', {
		type   : 'loop',
	perPage: 3,
	focus  : 'center',
	} ).mount();
} );
export default {
  name: 'Home',
  components: {
    Tabs,
   Splide, 
   
    
  },
  data () {
  return {
    
     };
}
  
};
</script>
<style lang="scss">
@import '../styles/core/vars.scss';

.home {
  min-height: 100vh;
  
  background-image: linear-gradient( rgba(0, 0, 0, 0.5) ,rgba(255, 255, 255, 0.1)), url('../assets/bg-header.png');
  color: white; 
  position: relative;
  font-weight: 400;
  font-family: $main-font;
  &__top-panel {
    position: fixed;
    top: 0;
    height: 7%;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $white;
  }
  &__nav {
    min-width: 25%;
    display: flex;
    justify-content: space-around;
    font-size: $nav-size;
  }
  &__nav-links {
    &:hover {
      
opacity: 0.7;
    }
    }
  
  &__logo {
    font-size: 30px;
    &:hover {
opacity: 0.7;
    }
  }
  &__user-buttons {
    font-size: $nav-size;
    display: flex;
    width: 25%;
    justify-content: space-around;
    height: 100%;
    align-items: center;
  }
 
  &__link-wrapper {
    height: 100%;
    width: 100%;
    border-left: 1px solid $white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    
  }
  &__btn-links {
    width: 100%;
    &--search {
      width: 50%;
&:hover {
opacity: 0.7;
    }
    }
    &:hover {
opacity: 0.7;
    }
    
  }
  &__content {
    display: flex;
    margin: auto;
    flex-direction: column;
    height: 90vh;
    width: 60%;
    justify-content: center;
    align-items: flex-end;
    padding-top: 100px;
  }
  &__title {
    font-size: $title-size;
    line-height: 75px;
    letter-spacing: 13px;
    text-transform: uppercase;
    text-align: right;
    width: 70%;
    margin-bottom: 15px;
    font-weight: 400;
  }&__subtitle {
    font-size: $sub-title-size;
    line-height: 75px;
    font-weight: 300;
    letter-spacing: 7px;
    margin-bottom: 50px;
  }
  &__btn {
    min-width: 280px;
    min-height: 70px;
    border: 1px solid $white;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    font-size: $btn-size;
    margin-bottom: 30px;
    &:after {
      position: absolute;
      content: "";
      border-top: 2px solid $white;
      width: 45px;
      right: 40px;
    }
  }
  &__shop-link {
    width: 200px;
    &:hover {
opacity: 0.7;
    }
  }
  &__prod-link {
    font-weight: 300px;
    font-size: $link-size;
  line-height: 75px;
  letter-spacing: 5px;
  &:hover {
opacity: 0.7;
    }
  }
  &__vertical-text {
    transform: rotate(270deg);
    position: absolute;
    left: 30px;
    font-size: $middle-size;
    bottom: 170px;
    display: block;
    &:before {
      content: "";
      border-bottom: 2px solid $white;
      width: 70px;
      height: 2px;
      position: absolute;
      bottom:18px;
      left: -90px;
    }
  }
.fa-long-arrow-alt-right {
  padding-left: 15px;
}


}
.about {
  background-color: $bgc-color;
  min-height: 100vh;
  text-align: center;
  padding-top: 2%;
  
  
  &__border {
    position: absolute;
    left: 50%;
    top: 5%;
	-webkit-transform: translate(-50%);
    -ms-transform: translate(-50%);
        transform: translate(-50%);
        margin-bottom: 80px;
  }
  &__title {
    position: absolute;
    top: 45%;
    left: 50%;
    z-index: 100;
    font-size: $sub-title-size;
    line-height: 75px;
    letter-spacing: 6px;
    -webkit-transform: translate(-50%);
    -ms-transform: translate(-50%);
        transform: translate(-50%);
  }
  
  &__logos {
position: absolute;
top: 70%;
left: 50%;
-webkit-transform: translate(-50%);
    -ms-transform: translate(-50%);
        transform: translate(-50%);
  }
  &__what-we-are {
    width: 100%;
    height: 300px;
    position: relative;
    margin-bottom: 100px;
  }
}


</style>