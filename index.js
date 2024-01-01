//declara minha variável - nome do personagem hério
let personagem = "Pauleanderson Development"

//o número de pontos de experiência do personagem
let nivelXp = 20815


//estrutura de decisão
let nivelPersonagem;

if (nivelXp < 1000){
	nivelPersonagem = "Ferro"
}
else if (nivelXp >= 1001 &&  nivelXp <=2000) {
	nivelPersonagem = "Bronze"
}
else if (nivelXp >=2001 && nivelXp <=5000) {
	nivelPersonagem = "Prata"
}
else if(nivelXp >=5001 && nivelXp <=7000) {
	nivelPersonagem = "Ouro"
}
else if (nivelXp >=7001 && nivelXp <=8000){
	nivelPersonagem = "Platina"
}
else if (nivelXp >=8001 && nivelXp <=9000){
	nivelPersonagem = "Ascendente"
}
else if (nivelXp >=9001 && nivelXp >=10000) {
	nivelPersonagem = "Radiante" 
}
else {
	nivelPersonagem = "imortal"
}



//saída
console.log(`O Herói de nome ${personagem} está no nível de ${nivelPersonagem}!`)
