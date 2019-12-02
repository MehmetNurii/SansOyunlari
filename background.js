//Sallanan sayıların döndüğü fonksiyon
//kacakadar : Kaç sayı arasından random çekeceğini belirler
//kactane : kactane sayı çekeceğini belirler
function ArrayOfRandomNumbers(kacakadar, kactane) {
	var sayilar=[];
	for(var i=0;i<kactane;i++){
		var sayi=RandomSayi(kacakadar);
		if(sayilar.find(function(aranansayi){return aranansayi==sayi})){
			i--;
		}else{
			sayilar.push(sayi);
		}
	}
	sayilar.sort(function(a, b){return b - a});
	sayilar.reverse();
	return sayilar;
}



//Rastgele sayi sallama fonksiyonu
//kacakadar : Kaç sayı arasından random çekeceğini belirler
function RandomSayi(kacakadar){
	return Math.floor(Math.random() * kacakadar+1);
}


//Oyunda çekilen sayılar ile kullanıcının çektiği sayılardan kaç tane eşleştiğini döndürür 
////p1 : 1 ise çekilen sayıların kaçtane eşleştiği döner
 
//kacakadar : Kaça kadar sayı çekileceğini belirler
//kullanicisayilari : Kullanıcın salladığı sayılar dizisi
//oyunsayilari : oyunda çıkan sayılar
function eslesme(kullanicisayilari,oyunsayilari,kullanicisayilarikactane,oyunsayilarikactane){
		var eslesme=0;
	
	for(var i=0;i<kullanicisayilarikactane;i++){
		for(var j=0;j<oyunsayilarikactane;j++){
			if(kullanicisayilari[i]==oyunsayilari[j]){
				eslesme++;
			}
		}
		
	}
	//console.log("Kullanıcının çektiği numara:"+kullanicisayilari+"--Sistemin çektiği numaralar :"+oyunsayilari+" Bulunan Eşleşme :"+eslesme);

	return eslesme;
	
}
