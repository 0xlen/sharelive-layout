import Vue from 'vue'

Vue.component('bill-item', require('./components/BillItem.vue'))

new Vue({
    el: '#bills',
    data: {
        bill_link: "https://localhost",
        bills: null,
    },
    methods: {
        showBills: function(bill_id) {
            var self = this;
            $('#loading.modal').fadeIn(200).addClass('in').fadeOut();
            $.get("data/" + bill_id + '.json', function(data) {
                self.bills = data;
            });

        }
    }
});
