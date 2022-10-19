<template>
    <form @submit.prevent="onSubmit" method="post" >
        <input v-model="title" placeholder="title" />
        <input v-model="description" placeholder="description" />
        <input v-model="imageUrl" placeholder="image" />
        <input v-model="userId" placeholder="id" />
        <input v-model="price" placeholder="price" />
        <input class="button" type="submit" value="Submit">  
    </form>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            title:'',
            description:'',
            imageUrl:'',
            userId:'',
            price:''
        }
    },
     methods: {
      onSubmit() {
        if (this.title === '' || this.description === '' || this.imageUrl === null || this.userId === null || this.price === null) {
          alert('form is incomplete. Please fill out every field.')
          return
        }
  
        axios.post('http://localhost:3001/house/create', {
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
      

    }
}
</script>