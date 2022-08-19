window.onload = () => {

        document.getElementById("username").value = localStorage.getItem("username");
        document.getElementById("date").value = localStorage.getItem("date");
        document.getElementById("email").value = localStorage.getItem("email");
        document.getElementById("image").value = localStorage.getItem("image");
        /* Aqui você pode adicionar mais entradas para definir o valor. se for salvo*/

        //Salve a função value - salve-a em localStorage como (ID, VALUE)
        function saveValue(e){
            var id = e.id;  // pega o id do elemento
            var val = e.value; // pega o valor do elemento
            localStorage.setItem(id, val);// Toda vez que o usuário escrever algo, o valor do localStorage substituirá .
        }

        //obtenha a função de valor salvo - retorne o valor de "v" de localStorage.
        function getSavedValue  (v){
            if (!localStorage.getItem(v)) {
                return "";// se não houver nenhum valor salvo, retorne vazio. 
            }
            return localStorage.getItem(v);
        }
        
}