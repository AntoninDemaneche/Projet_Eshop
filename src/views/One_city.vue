<template>
  <div id="one_City">
      <h1 class="collection with-header">{{name}}</h1>
      <form @submit.prevent="like" class="col s12">
          <button type="submit" class="btn">Like</button>
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
    like () {
      db.collection('city').where('name', '==', this.$route.params.name).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) =>{
          doc.ref.update({
            nb_like: this.nb_like + 1,
          })
          .then(() => {
            this.$router.push({name:'one_city', params: { name: this.name }})
          })
        })
      })

    }
}   
</script>

<style>

</style>