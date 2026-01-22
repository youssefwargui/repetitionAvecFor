//1 — Somme de N

function sommeDeN(n) {
  
    var result = 0

   for (var i = n; i > 0; i--) {
    
      result += i
    
   }
   return result
}

//2 — Factorielle de N

function factorielleDeN(n) {
   var result = 1

   for (var i = n; i > 0 ; i--) {
    result *= i
    
   }
   return result
}

//3 — Répéter une chaîne

function répéterChaîne(c, n) {
  var result = ""
  for (var i = 0; i < n; i++) {
    
    result += c
    
  }
  return result
}


//4 — Somme de Min à Max

function sommeMinÀMax(minimum, maximum) {
  var result = 0
  for (var i = minimum; i < maximum ; i++) {
    
    result += i
    
  } 
  return result
}

//5 — Produit de Min à Max

function produitMinÀMax(minimum, maximum) {
    var result = 1
  for (var i = minimum; i < maximum ; i++) {
    
    result *= i
    
  } 
  return result
}

//Plus de pratique
//1 — Multiplier par 10 N fois

function multiplierPar10NFois(num, n) {
   var result = 1 
   for (var i = 0; i < n; i++) {
    
    result *= 10 
    
   }
   result *= num
   return result
}

//2 — Compter un caractère par index

function compterCaractèreÀIndex(string1, index, string2) {
   var result = 0
   for (var i = 0; i < string2.length ; i++) {
    
    result += string1.length
   }
   return result
}

//3 — Inverser une chaîne

function inverserChaîne(chaine) {
   var result = ""
   for (var i = chaine.length-1 ; i >= 0 ; i--) {
    
     result += chaine[i];
    
   }
   return result
}

//4 — Obtenir l’indice d’un caractère

function obtenirIndiceDe(chaine, caractere) {
   var result = 0
   for (var i = chaine.length; i >= 0  ; i++) {
    
    
    
   }
   return result
}

//5 — Somme des nombres pairs

function sommePairs(nombre1, nombre2) {
   var result = 0
   for (var i = nombre1 ; i < nombre2  ; i++) {
     
    if (i % 2 === 0) {
       result +=1
    }
   }
   return result
}
