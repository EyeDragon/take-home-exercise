import { computed } from "vue";
import { useStore } from "vuex"

export default function () {
    const store = useStore();
    
    const calculate = (live, packageData, age ) => {
        const rate = live.rate;
        const price = 10 * age * rate;
        return price + price * packageData.sale;
    };

    const price = computed(() => {
        const live = store.state.personalInfo.live;
        const packageData = store.state.personalInfo.packageData;
        const age = store.state.personalInfo.age;

        if(!live || !packageData || age > 100 || age < 1) {
            return -1 ;
        }

        return calculate(live, packageData, age);
    });
    
    const sale = computed (() => {
        const packageData = store.state.personalInfo.packageData;
        return price.value * packageData.sale;
    });
    
    const premium = computed(() => {
        const live = store.state.personalInfo.live;
        if(price.value === -1) {
            return "" ;
        }
        return `${(price.value + sale.value)}${live.currency}`;
    });

    return  {
        price, sale, premium
    };
}