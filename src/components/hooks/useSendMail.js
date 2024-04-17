import axios from "axios";

export async function useSendMail(init = {}){
    try{
        const res = await axios.post(`${import.meta.env.VITE_APP_API_URL}`,
            {
                "fullname":init.fullName.value,
                "email": init.email.value,
                "phone":"+7 ",
                "campaign":"testcampaign"
        })

        return res.status
    }
    catch (e){
        alert('Нет доступа к ресурсу')
    }
}