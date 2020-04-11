<template>
  <div id="City">
      <ul class="collection with-header">
         <li class="collection-header"><h4>Ville</h4></li>
         <li v-for="city in citys" 
         v-bind:key="city.id" class="collection-item">
            <div class="chip">{{city.name}}</div>
            </li>
        </ul>
  </div>
</template>

<script>
import {db} from "../main.js";
export default {
    name: 'city',
    data () {
        return {
            citys: []

        }
    },
    firestore() {
        db.collection('citys').orderBy('name').get().then(
            querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'id' : doc.id,
                    'name': doc.data().name,
                    'img' : doc.data().img         
                }
                this.citys.push(data)
            });
        })
    }
}
</script>

<style>


</style>