import { useState } from "react"


const useUploadForm = () =>{
    const [loading,setLoading] = useState()



    const uploadForm = async(data) =>{

        try{
            setLoading(true)

            console.log(data)
            
            const response = await fetch("http://192.168.0.106:5000/save-form", {
                method: 'POST', // Ensure the method is POST
                body: data
              });
              

            if(response.ok){
                alert("Boom")
            }else{
                alert("fooo")
            }

        }catch(error){
            console.log(error)

        }finally{
            setLoading(false)
        }

    }

    return {loading,uploadForm}
}

export default useUploadForm