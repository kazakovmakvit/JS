new Vue({
   el: '.root',
   data: {
      nameButton: 'Перевернуть',
      lists: [
         'Элемент списка 1',
         'Элемент списка 2',
         'Элемент списка 3',
      ],
   },
   methods: {
      reverseMessage: function () {
         this.nameButton = this.nameButton.split('').reverse().join('')
      },
      addItemList: function () {
         this.lists.push("Созданный элемент");
      },
      remove: function (idx) {
         this.lists.splice(idx, 1);
      },
   }
})

