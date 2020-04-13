<template>
  <div id="City">
      <ul class="collection with-header">
         <li class="collection-header"><h4>Ville :</h4></li>
         <li v-for="city in citys" 
         v-bind:key="city.id" class="collection-item">
            <div class="chip">{{city.name}}</div>
            Il y actuellement {{city.nb_like}} personne qui on aimée cette page !
            Il y a actuellement {{city.nb_img}} photos de cette ville ! 
            <br>
             <img class="ml-auto mr-auto" style="width: 30%;height: 280px center;"  v-bind:src="city.img"/>
            <router-link class="secondary-content" 
            v-bind:to="{name: 'one_city', 
            params: {name: city.name}}">
            <i class="fa fa-eye"></i> 
            </router-link> 
        </li>
        <li class="collection-item">
            <div class="chip">Lyon</div>
            Il y actuellement 15  personne qui on aimée cette page ! Il y a actuellement 12 photos de cette ville !
            <router-link class="secondary-content" to="/lyon"><i class="fa fa-eye"></i> </router-link>
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
                'img' : doc.data().img,
                'nb_like' : doc.data().nb_like,
                'nb_img' : doc.data().nb_img,       
                }
                this.citys.push(data)
            });
        })
    },
    
}
</script>

<style>


</style>