
window.onload = function() {
      alert("Vou tentar adivinhar o seu nome?");
      
      var letra = prompt("Digite a primeira letra do seu nome:");
      
      var nome;
      switch (letra) {
        case "A":
          nome = "Amanda";
          break;
        case "B":
          nome = "Beatriz";
          break;
        case "C":
          nome = "Carla";
          break;
        case "D":
          nome = "Diego";
          break;
        case "E":
          nome = "Eduardo";
          break;
        case "F":
          nome = "Fabiana";
          break;
        case "G":
          nome = "Gabriela";
          break;  
        case "H":
          nome = "Helena";
          break;  
        case "I":
          nome = "Icaro";
          break;  
        case "J":
          nome = "Jackeline";
          break;  

        
        default:
          nome = "Nome desconhecido";
          break;
      }
    
      alert("Seu nome é: " + nome);
    };
