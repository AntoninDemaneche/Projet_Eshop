<template>
  <div id="one_City">
      <h1 class="collection with-header center">Bienvenue à {{name}} :</h1>
      <form @submit.prevent="like" class="col s12">
          <button type="submit" class="btn">Like</button>
          <router-link to="/city"><button class="grey btn ">Back</button></router-link>
      </form>
  </div>
</template>

<script>
import {db} from "../main.js";
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
      db.collection('city').where('name', '==', this.$route.params.name).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) =>{
          doc.ref.update({
            nb_like: this.nb_like + 1,
            name:this.name,
            img: this.img,
            nb_photo: this.nb_photo,
          })
          .then(() => {
            this.$router.push({name:'one_city', params: { name: this.name }})
          })
        })
      })

    }

    }
}   
</script>

<style>

</style>