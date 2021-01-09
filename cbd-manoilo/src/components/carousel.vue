

<template>
        <div id="splide" class="splide" >
	<div class="splide__track">
		<ul class="splide__list">
			<li class="splide__slide">
				<img src="image01.jpg">
				<h4>Heading 01</h4>
				<div>
					Description 01
				</div>
			</li>
			<li class="splide__slide">
				<img src="image02.jpg">
				<h4>Heading 02</h4>
				<div>
					Description 02
				</div>
			</li>
		</ul>
	</div>
</div>


</template>
<script>
import { Splide } from '@splidejs/vue-splide';
new Splide( '#splide', {
	type   : 'loop',
	perPage: 3,
	focus  : 'center',
} ).mount();
export default {
  name: "Carousel",
  data() {
    
  }}
  //components: {Splide}}


</script>