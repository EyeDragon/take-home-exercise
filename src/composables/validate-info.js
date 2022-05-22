import { computed } from "vue";
import { useStore } from "vuex"

export default function () {
    const store = useStore();

    return  {
        invalid: computed(() => {
            const live = store.state.personalInfo.live;
            const packageData = store.state.personalInfo.packageData;
            const age = store.state.personalInfo.age;
            const name = store.state.personalInfo.name;

            return !live || !packageData || age > 100 || age < 1 || (name?.trim() ?? "") === "";
        })
    };
}