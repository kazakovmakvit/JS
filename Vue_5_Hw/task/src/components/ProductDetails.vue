<template>
  <div>
    Выберите валюту:
    <select size="1" name="" id="" v-model="valuta">
      <option>₽</option>
      <option>€</option>
      <option>$</option>
    </select>
    <br><br><br>
    <div v-for="product in products" :key="product.id">
      <p>Название: {{ product.name }}</p>
      <p>Цена: {{ formattedPrice(product.price) }}</p>
      <p v-if="product.available">Статус: Available</p>
      <p v-else>Статус: Out of stock</p>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',

  data () {
    return {
      price: '',
      valuta: '',
      products: [
        {
          id: 1,
          name: 'Бегемот',
          price: 5000,
          available: true
        },
        {
          id: 2,
          name: 'Слон',
          price: 8000,
          available: false
        },
        {
          id: 3,
          name: 'Заяц',
          price: 1000,
          available: true
        },
      ]
    };
  },

  computed: {
    formattedPrice () {
      if (this.valuta === '₽') {
        return price => `${price} рублей`
      } else if (this.valuta === '€') {
        return price => `€ ${(price / 100.3).toFixed(2)}`;
      } else {
        return price => `$ ${(price / 94.71).toFixed(2)}`
      }
    }
  },

  mounted () {

  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>
</style>
