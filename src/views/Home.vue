<template>
  <div id="home">
    <div class="vide"></div>
    <div class="login card-panel green white-text">
        <h1 class="titre">Bienvenue sur Le Mega Site !</h1>
    </div>
    <div class="login card-panel green white-text ml-100 vide titre" v-if="!isLoggedIn">
        <p>Tu n'est pas connectés ! N'hésite pas :</p>
        <div class="fixe-actions-btn">
          <i class="fa fa-arrow-right space"></i>
            <router-link to="/city">  
              <button class="btn btn-primary">Login</button>           
            </router-link>
        </div>
    </div>
    <div class="login card-panel green white-text ml-100 vide titre" v-if="isLoggedIn">
      <p>Te revoila ! Tu devrais aller visiter la page photos</p> 
      <div class="fixe-actions-btn">
          <i class="fa fa-arrow-right space"></i>
            <router-link to="/city">  
              <button class="btn btn-primary">Les villes !</button>           
            </router-link>
        </div> 
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'Home',
  components: {
    
    
  },
  created() {
      if (firebase.auth().currentUser) {
        this.isLoggedIn = true;
        this.currentUser = firebase.auth().currentUser.email;
      }
    }
}
</script>


<style>
.vide {
  margin-top: 100px;
}
.titre {
  font-size: 20px;
}
.space {
  margin-right: 15px;
}
</style>