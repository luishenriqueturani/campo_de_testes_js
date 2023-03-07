
const filter = async function filterClassifieds(classifieds, paramsSearch){

    // obtém os campos para filtragem
    let keys = Object.keys(paramsSearch)

    // percorre os classificados e retorna os resultados obtidos na filtragem
    let filtered = classifieds.filter(function(e){

        let ret = false

        // percorre os campos
        for (const k of keys) {

            if(k == undefined || k == null || k == '') continue

            if(e[k] == undefined) continue
            
            // obtém o tipo de dado para saber como comparar 
            let type = typeof(e[k])

            if(type == `object`){

                // obtém os campos desta posição
                let ks = Object.keys(paramsSearch[k])

                // se for um array precisa percorrer
                if(Array.isArray(e[k])){

                    for (const el of e[k]) {
                        for (const d of ks) {

                            if(d == undefined || d == null || d == '') continue

                            if(el[d] == undefined) continue

                            let t = typeof(el[d])
    
                            if(t == `string`){
                                if( el[d].includes(paramsSearch[k][d]) ){
                                    ret = true
                                }
                
                            }else if(t == `number`){
                                if( el[d] == paramsSearch[k][d] ){
                                    ret = true
                                }
                            }
                            
                        }
                    }


                }else{

                    for (const d of ks) {
                        if(d == undefined || d == null || d == '') continue

                        if(e[k][d] == undefined) continue
                        
                        let t = typeof(e[k][d])

                        if(t == `string`){
                            if( e[k][d].includes(paramsSearch[k][d]) ){
                                ret = true
                            }
            
                        }else if(t == `number`){
                            if( e[k][d] == paramsSearch[k][d] ){
                                ret = true
                            }
                        }
                        
                    }

                }


            }else if(type == `string`){
                if( e[k].includes(paramsSearch[k]) ){
                    ret = true
                }

            }else if(type == `number`){
                if( e[k] == paramsSearch[k] ){
                    ret = true
                }
            }

        }
        
        return ret
    })

}

export default filter
