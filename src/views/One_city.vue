<template>
  <div id="one_City">
      <h1 class="collection with-header center">Bienvenue à {{name}} :</h1>
      <form class="post ogin card-panel gray white-text center">
        <div class="collection-item">
              <img src="" alt="" class="img-content">
              <p class="sign">{{auth}}</p>
          </div>
          <button type="submit" class="btn" v-if="isLoggedIn">Like</button>
          <router-link to="/city"><button class="grey btn ">Back</button></router-link>
          <button class="btn green" v-if="isLoggedIn">Upload</button>
          <input 
          type="file"
          class="form-control"
          v-if="isLoggedIn">
      </form>
  </div>
</template>

<script>
import {db} from "../main.js";
import firebase from 'firebase'
export default {
    name: 'one_city',
    data () {
        return {
            name: null,
            img: null,
            nb_like: null,
            nb_photo: null,
        }
    },
    beforeRouteEnter (to, from, next) {
            db.collection('citys').where('name', '==', to.params.name).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
                    next(vm => {
                        vm.name = doc.data().name
                        vm.img = doc.data().img
                        vm.nb_like = doc.data().nb_like
                        vm.nb_photo = doc.data().nb_photo
                    })
                })
            })
    },
    methods : {
      like () {
       return {
         nb_like: this.nb_like + 1
       }
    }
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
.sign {
    text-align: center;
    margin-left: 300px;
}

.img-content {
 width: 70%;
 height: 50%;
}

.post {
    margin: 100px;
}
</style>