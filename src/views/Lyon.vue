<template>
  <div id="lyon">
      <h1 class="collection with-header center">Bienvenu à Lyon :</h1>
      <form @submit.prevent="like" class="post ogin card-panel gray white-text center">
          <div class="collection-item">
              <img src="https://www.lyoncapitale.fr/wp-content/uploads/2020/03/Vue-de-Lyon-6e-%C2%A9-Tim-Douet_3.jpg" alt="" class="img-content">
              <p class="sign">Par Anto</p>
          </div>
          <button type="submit" class="btn" v-if="isLoggedIn">Like</button>
          <router-link to="/city"><button class="grey btn ">Back</button></router-link>
          <button class="btn green">Upload</button>
      </form>
      <form @submit.prevent="like" class="post ogin card-panel gray white-text center">
          <div class="collection-item">
              <img src="https://www.lyonmag.com/medias/images/32895350167_3e1a7540c6_o-11.jpg" alt="" class="img-content">
              <p class="sign">Par Anto</p>
          </div>
          <button type="submit" class="btn" v-if="isLoggedIn">Like</button>
          <router-link to="/city"><button class="grey btn ">Back</button></router-link>
          <button class="btn green">Upload</button>
      </form>
      <form @submit.prevent="like" class="post ogin card-panel gray white-text center">
          <div class="collection-item">
              <img src="https://www.lyon.fr/sites/lyonfr/files/carte-d%27didentit%C3%A9.jpg" alt="" class="img-content">
              <p class="sign">Par Anto</p>
          </div>
          <button type="submit" class="btn" v-if="isLoggedIn">Like</button>
          <router-link to="/city"><button class="grey btn ">Back</button></router-link>
          <button class="btn green">Upload</button>
      </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.sign {
    text-align: center;
    margin-left: 300px;
}

.img-content {
 width: 700px;
 height: 500px;
}

.post {
    margin: 100px;
}
</style>