import {ref} from 'vue'

import { getAllContacts } from '../servicies/ApiContacts'


const contactList = ref(getAllContacts())

export function useListContacts() {
    const msjEmpty = ref('')

    const showEmpty=(msj) => {
        if(contactList.value.length < 1 ){
            msjEmpty.value = msj
        }else{
            msjEmpty.value = ''
        }
    }

    return {
        contactList,
        msjEmpty,
        showEmpty
    }
}