<template>
  <div id="features">
    <h1 class="section-title"><span class="primary-color">Features</span></h1>
    <br />

    <div class="container">
      <div class="card-outer-container">

        <div :data-aos= 'obj.aos' data-aos-duration="800" class="card feature-card" style="width: 18rem; background-color: rgb(48, 90, 117); color: white" v-for="(obj, key) in cardJSON" :key="key">
          <div class="card-body">
            <i :class="obj.icon" aria-hidden="true"></i>
            <br />
            <h5 class="card-title">{{obj.title}}</h5>
            <p class="card-text">
              {{obj.description}}
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

  data: () => ({
    cardJSON: [
      {
        aos:"fade-right",
        icon:"fa-3x fa fa-desktop mb-3",
        title:"EASY TO USE",
        description: "By just embedding few lines of code, get ready-to-use ChatBot UI designs! It's as simple as that."
      },
      {
        aos:"zoom-in",
        icon:"fa-3x fa fa-trophy mb-3",
        title:"AWESOME DESIGN",
        description: " Attractive designs with spectacular colour schemes available alongside responsive features for you at your fingertips! "
      },{
        aos:"fade-left",
        icon:"fa-3x fa fa-magic mb-3",
        title:"EASY TO CUSTOMIZE",
        description: "Explore different colour schemes and designs available for you. You can also customize it according to your taste!"
      }
    ]
  })
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