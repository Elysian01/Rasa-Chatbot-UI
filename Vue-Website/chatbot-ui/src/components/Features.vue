<template>
  <div id="features">
    <h1 class="section-title"><span class="primary-color">Features</span></h1>

    <br />

    <div class="container">
      <div class="card-outer-container">
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          class="card feature-card"
          style="width: 18rem; background-color: rgb(48, 90, 117); color: white"
        >
          <div class="card-body">
            <i class="fa-3x fa fa-desktop mb-3" aria-hidden="true "></i>
            <br />
            <h5 class="card-title">EASY TO USE</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="800"
          class="card feature-card"
          style="width: 18rem; background-color: rgb(14, 55, 74); color: white"
        >
          <div class="card-body">
            <i class="fa-3x fa fa-trophy mb-3" aria-hidden="true"> </i>
            <br />
            <h5 class="card-title">AWESOME DESIGN</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="800"
          class="card feature-card"
          style="width: 18rem; background-color: rgb(48, 90, 117); color: white"
        >
          <div class="card-body">
            <i class="fa-3x fa fa-magic mb-3" aria-hidden="true"></i>
            <br />
            <h5 class="card-title">EASY TO CUSTOMIZE</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Features",
};
</script>

<style>
#features {
  overflow-x: hidden;
}
@media (max-width: 768px) {
    body{overflow-x: hidden}
}
</style>