<template>
    <div >

      <div class="container">
        <HouseDetails :house="house" />
        <b-button type="button" class="btn btn-warning" @click="updateHouse" v-b-modal.modal-house>Modifier</b-button>&nbsp;&nbsp;
        <button class="btn btn-danger" @click="deleteHouse">Supprimer</button>
       <b-button v-b-modal.modal-1>Launch demo modal</b-button>

      <b-modal id="modal-house" :title="houseTitle">
        <form @submit.prevent="onSubmit" :method="action">
          <input v-model="title" placeholder="title" />
          <input v-model="description" placeholder="description" />
          <input v-model="imageUrl" placeholder="image" />
          <input v-model="userId" placeholder="id" />
          <input v-model="price" placeholder="price" />
          <input class="button" type="submit" value="Submit">  
        </form>
      </b-modal>
      </div>
        
    </div>
    
</template>

<script>
import axios from 'axios';
export default {
      data(){
        return{
          houseTitle: '',
          action: '',
          title:'',
            description:'',
            imageUrl:'',
            userId:'',
            price:''
          
        }
      },
      methods: {
        updateHouse(){
          this.houseTitle = `Modification de la maison ${this.house._id}`
          this.action = "put"
        },
        deleteHouse(){
          axios.delete('http://localhost:3001/house/' + this.house._id)
          .then(function (response) {
              console.log(response);
          })
          .catch(function (error) {
              console.log(error);
          });
        },
        onSubmit() {
        if (this.title === '' || this.description === '' || this.imageUrl === null || this.userId === null || this.price === null) {
          alert('form is incomplete. Please fill out every field.')
          return
        }
          axios.put('http://localhost:3001/house/' + this.house._id, {
            title: this.title,
            description: this.description,
            imageUrl: this.imageUrl,
            userId: this.userId,
            price: this.price
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

        
      },
        
      },
      async asyncData({ $axios, error, params }) {
        try {
          const { data } = await $axios.get(
            'http://localhost:3001/house/' + params.id
          )
          return {
            house: data
          }
        } catch (e) {
          error({
            statusCode: 503,
            message: 'Unable to fetch house #' + params.id
          })
        }
      }
}
</script>